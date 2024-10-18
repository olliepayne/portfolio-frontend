import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import { Project } from "@/app/types"
import getStrapiData from "@/app/_helpers/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import SkillTagLinksList from "@/app/_components/SkillTagLinksList"
import Markdown from "react-markdown"
import markdownComponents from "@/app/_helpers/markdownComponents"
import { Metadata } from "next"

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
    <main>
      <section className="relative z-30 py-32 text-white">
        <Container>
          {data[0].mainImage && (
            <Image
              src={getStrapiMedia(data[0].mainImage.url) as string}
              alt={data[0].mainImage.alternativeText}
              fill
              objectFit="cover"
              loading="eager"
              className="-z-20"
            />
          )}
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-charcoal opacity-80 transition-opacity group-hover:opacity-85" />
          <div className="lg:max-w-[640px]">
            {data[0].name && <Heading level="h1">{data[0].name}</Heading>}
            {data[0].summary && <p>{data[0].summary}</p>}
            {data[0].skills && (
              <SkillTagLinksList
                scope="projects"
                skills={data[0].skills}
                textVariant="white"
                className="mt-4"
              />
            )}
          </div>
        </Container>
      </section>
      <section className="text-white bg-charcoal py-32">
        <Container>
          <div className="border-l-4 border-themeLightGray border-solid pl-8 mt-4 lg:max-w-[640px]">
            <Heading level="h2">Request</Heading>
            {data[0].requestContent && (
              <Markdown components={markdownComponents}>
                {data[0].requestContent}
              </Markdown>
            )}
          </div>
        </Container>
      </section>
      <section className="py-32 relative">
        <Container variant="narrow">
          <div className="border-l-4 border-themeLightGray border-solid pl-8 mt-4">
            <Heading level="h2">Strategy</Heading>
            {data[0].strategyContent && (
              <Markdown components={markdownComponents}>
                {data[0].strategyContent}
              </Markdown>
            )}
          </div>
        </Container>
      </section>
      <section className="py-32 bg-charcoal text-white">
        <Container>
          <div className="border-l-4 border-primary border-solid pl-8 mt-4 lg:max-w-[640px]">
            <Heading level="h2">Results</Heading>
            {data[0].resultsContent && (
              <Markdown components={markdownComponents}>
                {data[0].resultsContent}
              </Markdown>
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}
