import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import ProjectCard from "@/app/_components/ProjectCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { FeaturedProjectsSection as IFeaturedProjectsSection } from "@/app/types"

interface Props {
  variant: "dark" | "light"
}

export default async function FeaturedProjectsSection({ variant }: Props) {
  const populateMain =
    "populate[0]=main&populate[1]=main.mainImage&populate[2]=main.skills"
  const populateSecond =
    "populate[3]=second&populate[4]=second.mainImage&populate[5]=second.skills"
  const populateThird =
    "populate[6]=third&populate[7]=third.mainImage&populate[8]=third.skills"
  const data: IFeaturedProjectsSection = await getStrapiData(
    `/api/featured-projects-section?${populateMain}&${populateSecond}&${populateThird}`
  )

  function hasData(property: "main" | "second" | "third") {
    if (data) {
      if (data[property]) return true
    } else {
      return false
    }
  }

  return (
    <section
      className={`py-32 relative ${
        variant === "dark" ? "bg-charcoal text-white" : "transparent"
      }`}
    >
      <a
        id="projects"
        className="inline-block w-full h-16 absolute top-16 left-0 pointer-events-none"
      />
      <Container>
        <Heading level="h2">Featured Projects</Heading>
        <p>What I&apos;ve worked on, both personal and professional.</p>
        <ul className="grid mt-8 gap-8 auto-rows-[1fr] lg:grid-cols-2">
          {hasData("main") && (
            <li className="lg:row-[span_2_/_auto]">
              <ProjectCard {...data.main} />
            </li>
          )}
          {hasData("second") && (
            <li>
              <ProjectCard {...data.second} />
            </li>
          )}
          {hasData("third") && (
            <li>
              <ProjectCard {...data.third} />
            </li>
          )}
        </ul>
      </Container>
    </section>
  )
}
