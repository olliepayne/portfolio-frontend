import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import { Project } from "@/app/types"
import { Metadata } from "next"
import getStrapiData from "@/app/_utils/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import Markdown from "react-markdown"
import markdownComponents from "@/app/_utils/markdownComponents"

export async function generateStaticParams() {
  const projects: Project[] = await getStrapiData("/api/projects")

  return projects.map((project) => ({ slug: project.slug }))
}

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getStrapiData(
    `/api/projects?filters[slug]$eq]=${params.slug}&populate=seo`
  )

  return {
    title: data[0].seo ? data[0].seo.titleTag : "Title Tag",
    description: data[0].seo ? data[0].seo.metaDescription : "Meta description"
  }
}

export default async function ProjectSlugPage({ params }: Props) {
  const data: Project[] = await getStrapiData(
    `/api/projects?filters[slug][$eq]=${params.slug}&populate=*`
  )

  return (
    <>
      <header className="py-16">
        <Container>
          <div className="relative">
            {/* <Image src={getStrapiMedia(data[0].mainImage)} /> */}
          </div>
          <Heading level="h1">Name</Heading>
          <div className="mt-16 flex justify-between">
            <p className="basis-1/2">
              Migrate a marketing site for a MedTech startup from vanilla HTML,
              CSS, and JavaScript into the front-end React-framework Next.js.
            </p>
            <div className="ml-8">
              <span className="font-semibold">2021, Kasadia</span>
              <ul>
                <li>Software Development</li>
              </ul>
            </div>
          </div>
        </Container>
      </header>

      <article className="">
        <Container>
          <p>Markdown text</p>
        </Container>
      </article>
    </>
  )
}
