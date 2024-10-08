import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Project } from "@/app/types"
import getStrapiData from "@/app/helpers/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import SectionNav from "@/app/_components/SectionNav"

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
  const [{ name }]: Project[] = await getStrapiData(
    `/api/projects?filters[slug][$eq]=${params.slug}`
  )

  return (
    <main className="">
      <Container variant="narrow">
        <Heading level="h1">{name}</Heading>
        <SectionNav />
        <Heading level="h2">Goals</Heading>
        <div className="[min-height:500px]" />
        <Heading level="h2">Strategy</Heading>
        <div className="[min-height:500px]" />
        <Heading level="h2">Results</Heading>
        <div className="[min-height:500px]" />
        <Heading level="h2">Lessons</Heading>
        <div className="[min-height:500px]" />
      </Container>
    </main>
  )
}
