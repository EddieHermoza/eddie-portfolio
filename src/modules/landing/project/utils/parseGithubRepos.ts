export type ParsedRepo = {
  label: string
  owner: string
  repo: string
}

export function parseGithubRepos(
  repositories: { label: string; link: string }[]
): ParsedRepo[] {
  return repositories
    .map((r) => {
      const match = r.link.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git|\/)?$/)
      if (match) {
        return { label: r.label, owner: match[1], repo: match[2] }
      }
      return null
    })
    .filter((r): r is ParsedRepo => r !== null)
}
