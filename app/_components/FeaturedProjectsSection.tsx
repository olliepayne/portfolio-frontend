import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import ProjectCard from "@/app/_components/ProjectCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { FeaturedProjectsSection as IFeaturedProjectsSection } from "@/app/types"

export default async function FeaturedProjectsSection() {
  const url = `/api/featured-projects-section?populate[main][populate]=*&populate[second][populate]=*&populate[third][populate]=*`
  const data: IFeaturedProjectsSection = await getStrapiData(url)

  return (
    <section
      className="py-32 relative bg-charcoal text-white"
    >
      <a
        id="projects"
        className="inline-block w-full h-16 absolute top-16 left-0 pointer-events-none"
      />
      <Container>
        <Heading level="h2">Featured Projects</Heading>
        <p>What I&apos;ve been up to, both professional and personal.</p>
        {data && (
          <ul className="grid mt-8 gap-8 auto-rows-[minmax(200px,auto)] lg:grid-cols-2">
            {data.main && (
              <li className="lg:row-[span_2_/_auto]">
                <ProjectCard {...data.main} />
              </li>
            )}
            {data.second && (
              <li>
                <ProjectCard {...data.second} />
              </li>
            )}
            {data.third && (
              <li>
                <ProjectCard {...data.third} />
              </li>
            )}
          </ul>
        )}
      </Container>
    </section>
  )
}
