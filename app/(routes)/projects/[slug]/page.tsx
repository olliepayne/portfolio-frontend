import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Project } from "@/app/types"
import getStrapiData from "@/app/helpers/getStrapiData"

export async function generateStaticParams() {
  const projects: Project[] = await getStrapiData("/api/projects", "no-cache")

  return projects.map((project) => ({ slug: project.slug }))
}

interface Props {
  params: {
    slug: string
  }
}

export default async function ProjectSlugPage({ params }: Props) {
  const [project]: Project[] = await getStrapiData(
    `/api/projects?filters[slug][$eq]=${params.slug}`
  )

  return (
    <main>
      <h1>{project.name}</h1>
    </main>
  )
}
