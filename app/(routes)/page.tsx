import Container from "@/app/_components/Container"
import Image from "next/image"
import Heading from "@/app/_components/Heading"
import LinkButton from "@/app/_components/LinkButton"
import { Metadata } from "next"
import getStrapiData from "@/app/_helpers/getStrapiData"
import FeaturedProjectsSection from "@/app/_components/FeaturedProjectsSection"
import InternalLink from "@/app/_components/InternalLink"

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
    <main>
      <section className="py-8">
        <Container>
          <div className="flex justify-between items-center">
            <div className="mr-8">
              <Heading level="h1">Hey, I'm Ollie 👋</Heading>
              <p className="mt-4">
                I’m an English <mark>software developer</mark> &{" "}
                <mark>SEO/SEM professional</mark> living in Phoenix, Arizona. I
                got into the tech agency/startup world at the age of 19 and
                have spent the last {new Date().getFullYear()-2021}+ years there.
              </p>
            </div>
            <Image
              src="/images/headshot.jpeg"
              alt="Ollie Payne headshot"
              width={400}
              height={300}
              className="rounded-md"
            />
          </div>
        </Container>
      </section>
    </main>
  )
}
