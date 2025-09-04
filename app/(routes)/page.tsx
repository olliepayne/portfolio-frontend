import getStrapiData from "@/app/_helpers/getStrapiData"
import { Metadata } from "next"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import SocialCard from "@/app/_components/SocialCard"
import ProjectsGrid from "@/app/_components/ProjectsGrid"
import WorkHistoryTable from "@/app/_components/WorkHistoryTable"
import { Skill } from "@/app/types"

const stats = [
  {
    metricText: "Years of experience",
    value: "4+"
  },
  {
    metricText: "Clients worked with",
    value: "40+"
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
  // fetch resume

  const skills: Skill[] = await getStrapiData(`/api/skills?sort[0]=name`)

  return (
    <>
      <header className="max-w-6xl mx-auto px-4 my-16 md:my-32">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="mr-16 flex-2/3">
            <Heading level="h1">Oliver {"(Ollie)"} Payne</Heading>
            <p className="mt-4 text-body-large">
              I&apos;m an English <mark>software developer</mark> &{" "}
              <mark>SEO/SEM professional</mark> living in Phoenix, Arizona. I
              got into the tech agency/startup world at the age of 19 and have
              spent the last {new Date().getFullYear() - 2021}+ years there.
            </p>
            <ul className="grid gap-4 grid-cols-3 mt-8">
              <li>
                <SocialCard type="LinkedIn" />
              </li>
              <li>
                <SocialCard type="GitHub" />
              </li>
              <li>
                <SocialCard type="Resume" />
              </li>
            </ul>
          </div>
          <Image
            src="/images/headshot.jpeg"
            alt="Ollie Payne headshot"
            width={400}
            height={400}
            className="rounded-xl mt-16 min-h-[400px] object-cover md:mt-0"
          />
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 my-16 md:my-32">
        <Heading level="h2" id="portfolio">
          Portfolio
        </Heading>
        <div className="mt-8">
          <ProjectsGrid />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 my-16 md:my-32">
        <Heading level="h2" id="work-history">
          Work history
        </Heading>
        <WorkHistoryTable />
      </section>
    </>
  )
}
