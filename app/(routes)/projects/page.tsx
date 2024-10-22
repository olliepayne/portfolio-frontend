import ProjectCard from "@/app/_components/ProjectCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { Project, Skill } from "@/app/types"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import SkillFilters from "@/app/_components/SkillFilters"
import { Metadata } from "next"
import { Suspense } from "react"

interface Props {
  searchParams: {
    skill?: string | string[]
  }
}

export const metadata: Metadata = {
  title: "My Professional & Personal Projects for Frontend & SEO",
  description:
    "View the collection of some of my professional and personal projects which utilize and demonstrate my frontend & SEO skills."
}

export default async function ProjectsIndexPage({ searchParams }: Props) {
  const skillsUrl = `/api/skills?sort[0]=name`
  const skills: Skill[] = await getStrapiData(skillsUrl)

  function setProjectsUrlFilters() {
    if (searchParams.skill) {
      if (typeof searchParams.skill === "string") {
        return `&filters[skills][name][$eq]=${searchParams.skill}`
      } else {
        return searchParams.skill
          .map((item) => `&filters[skills][name][$eq]=${item}`)
          .join()
          .replace(/[,]/g, "")
      }
    }

    return ""
  }
  const projectsUrl = `/api/projects?populate=*&sort[0]=updatedAt:desc${setProjectsUrlFilters()}`
  const projects: Project[] = await getStrapiData(projectsUrl)

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-charcoal text-white">
        <Container>
          <Heading level="h1">Projects</Heading>
          <p className="mt-4">
            What I&apos;ve been up to, professional and personal.
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          {skills && (
            <Suspense>
              <SkillFilters skills={skills} />
            </Suspense>
          )}
          <ul className="grid gap-8 auto-rows-[500px] mt-16 md:grid-cols-2">
            {projects &&
              projects.map((item, index) => (
                <li key={`project-card-${index}`}>
                  <ProjectCard {...item} />
                </li>
              ))}
          </ul>
        </Container>
      </section>
    </main>
  )
}
