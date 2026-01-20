/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react'

type GitTreeItem = {
  path: string
  type: 'tree' | 'blob'
}

export function useGithubRepo() {
  const [tree, setTree] = useState<Record<string, any> | null>(null)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [fileContent, setFileContent] = useState<string>('')
  const [branch, setBranch] = useState<string>('main')
  const [loadingRepo, setLoadingRepo] = useState(false)
  const [loadingFile, setLoadingFile] = useState(false)

  const buildTree = (files: GitTreeItem[]) => {
    const root: Record<string, any> = {}

    files.forEach((file) => {
      const parts = file.path.split('/')
      let current = root

      parts.forEach((part, index) => {
        const isFile = index === parts.length - 1 && file.type === 'blob'
        if (!current[part]) current[part] = isFile ? null : {}
        current = current[part] ?? current
      })
    })

    return root
  }

  const loadRepo = useCallback(async (owner: string, repo: string) => {
    setLoadingRepo(true)
    setTree(null)
    setSelectedFile(null)
    setFileContent('')
    try {
      const repoRes = await fetch(`/api/github?type=repo&owner=${owner}&repo=${repo}`)
      let currentBranch = 'main'
      if (repoRes.ok) {
        const repoJson = await repoRes.json()
        if (repoJson.default_branch) {
          currentBranch = repoJson.default_branch
          setBranch(currentBranch)
        }
      }

      const res = await fetch(
        `/api/github?type=tree&owner=${owner}&repo=${repo}&branch=${currentBranch}`
      )

      if (!res.ok) {
        setTree({})
        return
      }

      const data = await res.json()
      const structured = buildTree(data.tree as GitTreeItem[])
      setTree(structured)
    } catch {
      setTree({})
    } finally {
      setLoadingRepo(false)
    }
  }, [])

  const loadFile = useCallback(
    async (owner: string, repo: string, filePath: string) => {
      if (!filePath) return
      setLoadingFile(true)
      try {
        const res = await fetch(
          `/api/github?type=content&owner=${owner}&repo=${repo}&branch=${branch}&path=${filePath}`
        )
        if (!res.ok) {
          setFileContent(
            `Error al cargar archivo: ${res.status} ${res.statusText}`
          )
          return
        }
        const text = await res.text()
        setFileContent(text)
      } catch (err) {
        setFileContent(`Error: ${(err as Error).message}`)
      } finally {
        setLoadingFile(false)
      }
    },
    [branch]
  )

  const resetFileContent = useCallback(() => {
     setFileContent('')
     setSelectedFile(null)
  }, [])

  return {
    tree,
    loadingRepo,
    selectedFile,
    setSelectedFile,
    fileContent,
    loadingFile,
    loadRepo,
    loadFile,
    resetFileContent
  }
}
