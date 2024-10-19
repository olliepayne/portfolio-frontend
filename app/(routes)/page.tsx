import Container from "@/app/_components/Container"
import Image from "next/image"
import LinkButton from "@/app/_components/LinkButton"
import Heading from "@/app/_components/Heading"
import ExperienceTimeline from "@/app/_components/ExperienceTimeline"
import { Metadata } from "next"
import Blob from "@/app/_components/Blob"
import getStrapiData from "@/app/_helpers/getStrapiData"
import FeaturedProjectsSection from "@/app/_components/FeaturedProjectsSection"
import InternalLink from "@/app/_components/InternalLink"

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

  return {
    title: data ? data.seo.titleTag : "Title tag",
    description: data ? data.seo.metaDescription : ""
  }
}

export default async function Home() {
  return (
    <main>
      <section className="py-16 overflow-hidden bg-charcoal text-white">
        <Container>
          <div className="flex flex-col justify-between items-center lg:flex-row">
            <div className="basis-1/2 grow-0 mr-0 lg:mr-4">
              <Heading level="h1">👋 I&apos;m Ollie</Heading>
              <p className="mt-4">
                I am a frontend developer, SEO analyst, and avid sport climber
                living in Phoenix, AZ.
              </p>
              <div className="my-16">
                <ul className="flex flex-row flex-wrap gap-8">
                  {stats.map(({ metricText, value }, index) => (
                    <li key={`intro-stat-${index}`}>
                      <div>
                        <span className="text-heading3Mobile font-bold text-primary lg:text-heading3Desktop">
                          {value}
                        </span>
                        <p>{metricText}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <LinkButton
                  href="/contact"
                  text="Contact Me"
                  className="mr-4 hover:text-black"
                />
                <InternalLink href="#projects" text="My Projects" />
              </div>
            </div>
            <div className="relative mt-16 basis-1/3 aspect-square w-3/4 max-w-[416px] lg:w-auto lg:mt-0 lg:ml-4">
              <Blob
                variant="secondary"
                className="absolute animate-blob fill-primary"
              />
              <Blob
                variant="image"
                className="drop-shadow-xl-darker absolute h-full w-full"
              />
              <Image
                src="/images/headshot.jpeg"
                alt="Headshot of Ollie Payne."
                fill
                className="object-cover z-10 [mask-image:url('/svgs/blob.svg')] [mask-repeat:no-repeat] [mask-position:center]"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="relative py-32">
        <a
          id="about"
          className="inline-block w-full h-16 absolute top-16 left-0 pointer-events-none"
        />
        <Container>
          <div className="flex flex-col-reverse justify-between items-center lg:flex-row">
            <div className="relative w-full max-w-[426px] aspect-square mt-16 lg:basis-1/3 lg:mt-0 lg:mr-4">
              <Image
                src="/images/climbing-green.jpg"
                alt="Ollie Payne competing in a climbing competition."
                fill
                className="object-cover object-[center_10%] drop-shadow-xl-darker"
              />
            </div>
            <div className="basis-2/3 lg:ml-4">
              <Heading level="h2">About Me</Heading>
              <p className="mt-4">
                I began coding as a teen by working on 2D indie games. Once it
                was time to take a first step towards a career, it was a no
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
      <FeaturedProjectsSection />
      <section className="py-32 relative overflow-clip">
        <a
          id="experience"
          className="inline-block w-full h-1 absolute top-16 left-0 pointer-events-none"
        />
        <Container variant="narrow">
          <div className="text-center mb-8">
            <Heading level="h2">Experience</Heading>
          </div>
          <Heading level="h3" className="mb-4">
            Timeline
          </Heading>
          <ExperienceTimeline />
        </Container>
      </section>
    </main>
  )
}
