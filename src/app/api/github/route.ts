import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')
  const owner = searchParams.get('owner')
  const repo = searchParams.get('repo')
  const branch = searchParams.get('branch')
  const path = searchParams.get('path')

  if (!owner || !repo) {
    return NextResponse.json({ error: 'Missing owner or repo' }, { status: 400 })
  }

  const token = process.env.GITHUB_TOKEN
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  let url = ''

  try {
    if (type === 'repo') {
      url = `https://api.github.com/repos/${owner}/${repo}`
    } else if (type === 'tree') {
      if (!branch) {
        return NextResponse.json({ error: 'Missing branch' }, { status: 400 })
      }
      url = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`
    } else if (type === 'content') {
      if (!path) {
        return NextResponse.json({ error: 'Missing path' }, { status: 400 })
      }
      // For content, we want the raw file content
      const ref = branch ? `?ref=${branch}` : ''
      url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}${ref}`
      headers['Accept'] = 'application/vnd.github.v3.raw'
    } else {
      return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
    }

    const res = await fetch(url, { headers })

    if (!res.ok) {
        const errorText = await res.text()
      return NextResponse.json(
        { error: `GitHub API error: ${res.status} ${res.statusText}`, details: errorText },
        { status: res.status }
      )
    }

    if (type === 'content') {
        const text = await res.text()
        return new NextResponse(text, { status: 200 })
    }

    const data = await res.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error', details: (error as Error).message },
      { status: 500 }
    )
  }
}
