import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Project } from "@/app/types"
import getStrapiData from "@/app/helpers/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import SkillTagsList from "@/app/_components/SkillTagsList"
import Markdown from "react-markdown"
import markdownComponents from "@/app/helpers/markdownComponents"
import { Metadata } from "next"

export async function generateStaticParams() {
  const projects: Project[] = await getStrapiData("/api/projects", "no-cache")

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
          <div className="lg:w-1/2">
            {data[0].name && <Heading level="h1">{data[0].name}</Heading>}
            {data[0].summary && <p>{data[0].summary}</p>}
            {data[0].skills && (
              <SkillTagsList skills={data[0].skills} className="mt-4" />
            )}
          </div>
        </Container>
      </section>
      <section className="text-white bg-charcoal pt-32 pb-[20.5rem]">
        <Container>
          <Heading level="h2">Request</Heading>
          <div className="border-l-4 border-themeLightGray border-solid pl-8 mt-4">
            {data[0].requestContent && (
              <Markdown components={markdownComponents}>
                {data[0].requestContent}
              </Markdown>
            )}
          </div>
        </Container>
      </section>
      {/* <section className="pb-32 pt-[20.5rem] relative"> */}
      <section className="py-32 relative">
        <Container variant="narrow">
          {/* <div className="absolute w-[calc(100%-32px)] max-w-[768px] h-[400px] -top-48 left-1/2 -translate-x-1/2">
            <Image
              src={getStrapiMedia(data[0].secondaryImage.url) as string}
              alt={data[0].secondaryImage.alternativeText}
              fill
              objectFit="cover"
            />
          </div> */}
          <Heading level="h2">Strategy</Heading>
          <div className="border-l-4 border-themeLightGray border-solid pl-8 mt-4">
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
          <div className="flex flex-col justify-between lg:items-center lg:flex-row">
            <div className="basis-1/2 mr-0 lg:mr-4">
              <Heading level="h2">Results</Heading>
              <div className="border-l-4 border-primary border-solid pl-8 mt-4">
                {data[0].resultsContent && (
                  <Markdown components={markdownComponents}>
                    {data[0].resultsContent}
                  </Markdown>
                )}
              </div>
            </div>
            {data[0].resultsImage && (
              <div className="relative basis-[400px] w-full mt-16 lg:mt-0 lg:basis-1/2 lg:h-[500px]">
                <Image
                  src={getStrapiMedia(data[0].resultsImage.url) as string}
                  alt={data[0].resultsImage.alternativeText}
                  fill
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        </Container>
      </section>
    </main>
  )
}
