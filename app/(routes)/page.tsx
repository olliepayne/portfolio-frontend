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
          <Heading level="h1">Hey, I'm Ollie 👋</Heading>
          <p className="mt-4">
            I’m a software developer & SEO/SEM professional living in Phoenix,
            AZ.
          </p>
        </Container>
      </section>
    </main>
  )
}
