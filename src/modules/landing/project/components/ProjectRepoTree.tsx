/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'
import {
  Files,
  FolderItem,
  FolderTrigger,
  FolderPanel,
  SubFiles,
  FileItem,
} from '@/modules/shared/animate-ui/components/base/files'
import {
  CodeBlock,
  Code,
  CodeHeader,
} from '@/modules/shared/animate-ui/components/animate/code'
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/modules/shared/components/ui/tabs'

import { Skeleton } from '@/modules/shared/components/ui/skeleton'
import { useGithubRepo } from '../hooks/useGithubRepo'

type Repository = {
  label: string
  owner: string
  repo: string
}

export default function ProjectRepoTree({
  repositories,
}: {
  repositories: Repository[]
}) {
  const [activeRepoIndex, setActiveRepoIndex] = useState(0)
  const activeRepo = repositories[activeRepoIndex]

  const {
    tree,
    loadingRepo,
    selectedFile,
    setSelectedFile,
    fileContent,
    loadRepo,
    loadFile,
    resetFileContent
  } = useGithubRepo()

  useEffect(() => {
    if (activeRepo) {
      loadRepo(activeRepo.owner, activeRepo.repo)
    }
  }, [activeRepo, loadRepo])

  useEffect(() => {
    if (!selectedFile || !activeRepo) return
    loadFile(activeRepo.owner, activeRepo.repo, selectedFile)
  }, [selectedFile, activeRepo, loadFile])

  useEffect(() => {
    resetFileContent()
  }, [activeRepoIndex, resetFileContent])


  return (
    <section className="h-screen max-lg:h-auto flex flex-col p-10 max-lg:p-2 bg-background">
      <div className="flex items-center gap-4 lg:gap-10 w-full my-4 lg:mb-10 ">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extralight whitespace-nowrap">
          .. / Estructura del proyecto
        </h2>
        <span className="h-[2px] flex-1 bg-primary max-lg:hidden"></span>
      </div>

      <div className="size-full flex flex-col overflow-hidden">
        {repositories.length > 1 && (
          <div className="mb-6">
            <Tabs
              defaultValue="0"
              onValueChange={(val) => setActiveRepoIndex(parseInt(val))}
            >
              <TabsList className="bg-muted/50 w-full justify-start overflow-x-auto custom-scrollbar">
                {repositories.map((repo, idx) => (
                  <TabsTrigger key={idx} value={idx.toString()}>
                    {repo.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}

        <div className="flex-1 flex max-lg:flex-col max-lg:items-center overflow-hidden border">
          <div className="w-[40%] border-r max-lg:w-full max-lg:border-r-0 max-lg:border-b h-full">
            <div className="size-full overflow-y-auto custom-scrollbar py-5">
              {loadingRepo ? (
                <div className="px-6 flex flex-col gap-4">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Skeleton className="size-4 shrink-0" />
                      <Skeleton
                        className="h-4 w-full"
                        style={{ width: `${Math.random() * 40 + 40}%` }}
                      />
                    </div>
                  ))}
                </div>
              ) : tree ? (
                <Files className={'scrollbar-none'}>
                  {renderTree(tree, (p) => setSelectedFile(p))}
                </Files>
              ) : (
                <p className="p-10 text-muted-foreground">
                  Error al cargar el repositorio.
                </p>
              )}
            </div>
          </div>

          <div className="w-[60%] max-lg:w-full overflow-auto pr-5 max-lg:pr-0 h-full">
            {selectedFile ? (
              <Code
                className="size-full rounded-none bg-background"
                code={fileContent}
              >
                <CodeHeader className="bg-muted/40" copyButton>
                  {selectedFile}
                </CodeHeader>

                <CodeBlock
                  duration={800}
                  writing
                  lang="ts"
                  className="custom-scrollbar max-lg:text-xs"
                />
              </Code>
            ) : (
              <div className="size-full text-xl max-lg:text-base font-light flex items-center justify-center p-10 text-center text-muted-foreground">
                Selecciona un archivo para ver su contenido
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const renderTree = (
  tree: Record<string, any>,
  // eslint-disable-next-line no-unused-vars
  onSelect: (path: string) => void,
  prefix = ''
) => {
  return Object.entries(tree).map(([name, value]) => {
    const fullPath = prefix ? `${prefix}/${name}` : name
    if (value === null) {
      return (
        <FileItem
          className="scrollbar-none"
          key={fullPath}
          onFileHighlighClick={() => onSelect(fullPath)}
        >
          {name}
        </FileItem>
      )
    }

    return (
      <FolderItem className={'scrollbar-none'} key={fullPath} value={fullPath}>
        <FolderTrigger>{name}</FolderTrigger>
        <FolderPanel className={'scrollbar-none'}>
          <SubFiles>{renderTree(value, onSelect, fullPath)}</SubFiles>
        </FolderPanel>
      </FolderItem>
    )
  })
}

