import Container from "@/app/_components/Container"
import Image from "next/image"
import LinkButton from "@/app/_components/LinkButton"
import Divider from "@/app/_components/Divider"
import Heading from "@/app/_components/Heading"
import ExperienceTimeline from "@/app/_components/ExperienceTimeline"
import { Metadata } from "next"
import ProjectCard from "@/app/_components/ProjectCard"
import Blob from "@/app/_components/Blob"
import { Project } from "@/app/types"
import getStrapiData from "@/app/helpers/getStrapiData"

const stats = [
  {
    metricText: "Years of experience",
    value: "3+"
  },
  {
    metricText: "Clients worked with",
    value: "25+"
  }
]

export async function generateMetadata(): Promise<Metadata> {
  const data = await getStrapiData("/api/homepage?populate=seo")

  if (data) {
    const {
      seo: { titleTag, metaDescription }
    } = data

    return {
      title: titleTag,
      description: metaDescription
    }
  } else {
    return {
      title: "Title tag",
      description: "Meta description"
    }
  }
}

export default async function Home() {
  const jobs = await getStrapiData(
    "/api/jobs?populate[0]=company&populate[1]=company.logo&populate[2]=skills&sort[0]=stillHere:desc&sort[1]=endDate:desc&sort[2]=startDate:desc",
    "no-cache"
  )

  const projects = await getStrapiData("/api/projects?populate=*", "no-cache")

  return (
    <main>
      <section className="py-16 overflow-hidden">
        <Container>
          <div className="flex flex-col justify-between items-center lg:flex-row">
            <div className="basis-1/2 grow-0 mr-0 lg:mr-4">
              <Heading level="h1">👋 I'm Ollie</Heading>
              <p className="mt-4">
                I am a Frontend developer, SEO Analyst, and avid sport climber
                living in Phoenix, AZ.
              </p>
              <div className="my-16">
                <ul className="flex flex-row flex-wrap gap-8">
                  {stats.map(({ metricText, value }, index) => (
                    <li key={`intro-stat-${index}`}>
                      <div>
                        <span className="text-xl font-bold">{value}</span>
                        <p>{metricText}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LinkButton href="#" text="Contact Me" className="mr-4" />
                <p className="inline-block">My projects</p>
              </div>
            </div>
            <div className="relative mt-16 basis-1/3 aspect-square w-1/2 lg:w-auto lg:mt-0 lg:ml-4">
              <Blob
                variant="primary"
                className="absolute -right-8 animate-blobXToY fill-primary overflow-visible"
              />
              <Blob
                variant="image"
                className="drop-shadow-xl-darker absolute h-full w-full"
              />
              <Image
                src="/images/headshot.jpeg"
                alt="Picture of Ollie Payne"
                fill
                objectFit="cover"
                className="rounded-md z-10 [mask-image:url('/svgs/blob.svg')] [mask-repeat:no-repeat] [mask-position:center]"
              />
            </div>
          </div>
        </Container>
      </section>
      <Divider />
      <section className="py-16 relative">
        <a
          id="about"
          className="inline-block w-full h-16 absolute -top-16 left-0 pointer-events-none"
        />
        <Container>
          <div className="flex flex-col-reverse justify-between items-center lg:flex-row">
            <div className="relative basis-1/3 w-1/2 aspect-square mt-16 lg:w-auto lg:mt-0 lg:mr-4">
              <Image
                src="/images/climbing-green.jpg"
                alt="Picture of Ollie Payne"
                fill
                objectFit="cover"
                objectPosition="0 0"
                className="rounded-lg drop-shadow-xl-darker"
              />
            </div>
            <div className="basis-1/2 lg:ml-4">
              <Heading level="h2">About Me</Heading>
              <p className="mt-4">
                I began coding as a teen by working on 2D indie games. Once It
                was time to commit to a first step towards a career, it was a no
                brainer for me to pursue programming. I got my first position as
                a Frontend development intern, and have been working in the
                agency world ever since.
              </p>
              <p className="mt-4">
                Besides my work, I am also an avid sport climber and love to
                compete and push myself to the highest level.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Divider />
      <section className="py-16 relative">
        <a
          id="experience"
          className="inline-block w-full h-16 absolute -top-16 left-0 pointer-events-none"
        />
        <Container variant="narrow">
          <div className="text-center mb-8">
            <Heading level="h2">Experience</Heading>
          </div>
          <Heading level="h3" className="mb-4">
            Timeline
          </Heading>
          {jobs && <ExperienceTimeline jobs={jobs} />}
          <Heading level="h3" className="mt-16">
            Top Skills
          </Heading>
        </Container>
      </section>
      <Divider />
      <section className="py-16 relative">
        <a
          id="projects"
          className="inline-block w-full h-16 absolute -top-16 left-0 pointer-events-none"
        />
        <Container>
          <Heading level="h2">Featured Projects</Heading>
          <p>
            What I've been working on, both personal and
            professional.
          </p>
          {projects && (
            // <ul className="flex mt-8 gap-4">
            <ul className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3-auto">
              {projects.map((project: Project, index: number) => (
                <li key={`project-${index}`} className="basis-1/3 shrink-0">
                  <ProjectCard {...project} />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </main>
  )
}
