import Container from "./components/Container"
import Image from "next/image"
import LinkButton from "./components/LinkButton"
import Divider from "./components/Divider"
import Heading from "./components/Heading"
import ExperienceTimeline from "./components/ExperienceTimeline"

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

async function getStrapiData(url: string) {
  const baseUrl = "http://localhost:1337"
  try {
    const response = await fetch(baseUrl + url, {
      cache: "no-cache"
    })
    const { data } = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const companies = await getStrapiData(
    "/api/companies?populate[jobs][populate][0]=skills&sort=jobs.startDate:desc"
  )
  console.log(companies)

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
            <div className="relative mt-16 basis-1/2 aspect-square w-full md:w-auto md:mt-0 md:ml-4 ">
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
          <ExperienceTimeline companies={companies} />
        </Container>
      </section>
    </main>
  )
}
