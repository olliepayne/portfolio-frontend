import { Project } from "@/app/types"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import ProjectCard from "@/app/_components/ProjectCard"

interface Props {
  projects: Project[]
  variant: "dark" | "light"
}

export default function FeaturedProjectsSection({ projects, variant }: Props) {
  return (
    <section
      className={`py-32 relative ${
        variant === "dark" ? "bg-charcoal text-white" : "transparent"
      }`}
    >
      <a
        id="projects"
        className="inline-block w-full h-16 absolute -top-16 left-0 pointer-events-none"
      />
      <Container>
        <Heading level="h2">Featured Projects</Heading>
        <p>What I've worked on, both personal and professional.</p>
        {projects && (
          <ul className="grid mt-8 gap-4 auto-rows-[250px] lg:grid-cols-2">
            {projects.map((project: Project, index: number) => (
              <li
                key={`project-${index}`}
                className={`${index === 0 ? "row-[span_2_/_auto]" : undefined}`}
              >
                <ProjectCard {...project} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}
