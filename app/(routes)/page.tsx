import Container from "@/app/_components/Container"
import Image from "next/image"
import Heading from "@/app/_components/Heading"
import LinkButton from "@/app/_components/LinkButton"
import { Metadata } from "next"
import getStrapiData from "@/app/_helpers/getStrapiData"
import FeaturedProjectsSection from "@/app/_components/FeaturedProjectsSection"
import InternalLink from "@/app/_components/InternalLink"
import Icon from "@/app/_components/Icon"
import SocialCard from "@/app/_components/SocialCard"

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
  return (
    <>
      <header className="max-w-6xl my-16 mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="mr-8">
            <Heading level="h1">Hey, I'm Ollie 👋</Heading>
            <p className="mt-4 text-body-large">
              I’m an English <mark>software developer</mark> &{" "}
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
            height={300}
            className="rounded-xl"
          />
        </div>
      </header>

      <section className="max-w-6xl mt-8 mb-16 mx-auto px-4">
        <Heading level="h2">Portfolio</Heading>
        <div className="mt-4">
          <div>
            <span>Tags</span>
          </div>
          <div>{/* project grid */}</div>
        </div>
      </section>

      {/* <section className="max-w-6xl my-16 mx-auto px-4">
        <Heading level="h2">Work history</Heading>
      </section> */}
    </>
  )
}
