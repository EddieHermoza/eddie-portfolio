import { MetadataRoute } from 'next'
import { PROJECTS } from '@/__mocks__/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eddiehermoza.vercel.app'

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
  ]

  // Dynamic project routes
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...routes, ...projectRoutes]
}
