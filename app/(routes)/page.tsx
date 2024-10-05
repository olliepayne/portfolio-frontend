import Container from "../_components/Container"
import Image from "next/image"
import LinkButton from "../_components/LinkButton"
import Divider from "../_components/Divider"
import Heading from "../_components/Heading"
import ExperienceTimeline from "../_components/ExperienceTimeline"
import { Metadata } from "next"
import ProjectCard from "../_components/ProjectCard"

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

async function getStrapiData(url: string, cache?: RequestCache) {
  const baseUrl = "http://localhost:1337"
  try {
    const response = await fetch(baseUrl + url, {
      cache
    })
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

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
  const companies = await getStrapiData(
    "/api/companies?populate[logo]=true&populate[jobs][populate]=skills&sort[0]=jobs.startDate:desc&sort[1]=jobs.stillHere:desc",
    "no-cache"
  )

  const projects = await getStrapiData("/api/projects?populate=*", "no-cache")

  return (
    <main>
      <section className="py-16">
        <Container>
          <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="basis-1/2 mr-0 md:mr-4">
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
            <div className="relative mt-16 basis-1/2 aspect-square w-full border-solid border-2 border-primary drop-shadow-md md:w-auto md:mt-0 md:ml-4">
              <Image
                src="/images/headshot.jpeg"
                alt="Picture of Ollie Payne"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </Container>
      </section>
      <Divider />
      <section id="about" className="py-16">
        <Container>
          <div className="flex flex-col-reverse justify-between items-center md:flex-row">
            <div className="relative basis-1/2 aspect-square w-full mt-16 md:w-auto md:mt-0 md:mr-4">
              <Image
                src="/images/climbing-green.jpg"
                alt="Picture of Ollie Payne"
                fill
                objectFit="cover"
                objectPosition="0 0"
              />
            </div>
            <div className="basis-1/2 md:ml-4">
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
      <section id="experience" className="py-16">
        <Container variant="narrow">
          <div className="text-center mb-8">
            <Heading level="h2">Experience</Heading>
          </div>
          <Heading level="h3" className="mb-4">
            Timeline
          </Heading>
          {companies && <ExperienceTimeline companies={companies} />}
          <Heading level="h3" className="mt-16">
            Top Skills
          </Heading>
        </Container>
      </section>
      <Divider />
      {/* <section className="py-16">
        <Container>
          <Heading level="h2">Featured Projects</Heading>
          {projects && (
            <ul className="flex mt-4 gap-4">
              {projects.map(({ mainImage, name, summary, skills }) => (
                <li className="basis-1/3 shrink-0">
                  <ProjectCard
                    name={name}
                    summary={summary}
                    mainImage={mainImage.url}
                    skills={skills}
                  />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section> */}
    </main>
  )
}
