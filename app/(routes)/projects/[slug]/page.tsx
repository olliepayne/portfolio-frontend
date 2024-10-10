import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Project } from "@/app/types"
import getStrapiData from "@/app/helpers/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import SkillTagsList from "@/app/_components/SkillTagsList"
import Markdown from "react-markdown"
import markdownComponents from "@/app/helpers/markdownComponents"

export async function generateStaticParams() {
  const projects: Project[] = await getStrapiData("/api/projects", "no-cache")

  return projects.map((project) => ({ slug: project.slug }))
}

interface Props {
  params: {
    slug: string
  }
}

export default async function ProjectSlugPage({ params }: Props) {
  const [
    {
      name,
      mainImage,
      summary,
      skills,
      requestContent,
      secondaryImage,
      strategyContent,
      resultsContent,
      resultsImage
    }
  ]: Project[] = await getStrapiData(
    `/api/projects?filters[slug][$eq]=${params.slug}&populate=*`
  )

  return (
    <main className="">
      <section className="relative z-30 py-32 text-white">
        <Container>
          <Image
            src={getStrapiMedia(mainImage.url) as string}
            alt={mainImage.alternativeText}
            fill
            objectFit="cover"
            loading="eager"
            className="-z-20"
          />
          <div className="absolute -z-10 top-0 left-0 w-full h-full bg-charcoal opacity-80 transition-opacity group-hover:opacity-85" />
          <div className="flex flex-col justify-center">
            <Heading level="h1">{name}</Heading>
            <p>{summary}</p>
            <SkillTagsList skills={skills} className="mt-4" />
          </div>
        </Container>
      </section>
      <section className="text-white bg-charcoal pt-32 pb-72">
        <Container>
          <Heading level="h2">Request</Heading>
          <div className="border-l-4 border-themeLightGray border-solid pl-8 mt-4">
            <Markdown components={markdownComponents}>
              {requestContent}
            </Markdown>
          </div>
        </Container>
      </section>
      <section className="pb-32 pt-72 relative">
        <Container variant="narrow">
          <div className="absolute w-[calc(100%-32px)] max-w-[768px] h-[384px] -top-48 left-1/2 -translate-x-1/2">
            <Image
              src={getStrapiMedia(secondaryImage.url) as string}
              alt={mainImage.alternativeText}
              fill
              objectFit="cover"
            />
          </div>
          <Heading level="h2">Strategy</Heading>
          <div className="border-l-4 border-themeLightGray border-solid pl-8 mt-4">
            <Markdown components={markdownComponents}>
              {strategyContent}
            </Markdown>
          </div>
        </Container>
      </section>
      <section className="py-32 bg-charcoal text-white">
        <Container>
          <div className="flex flex-col justify-between items-center lg:flex-row">
            <div className="basis-1/2 mr-0 lg:mr-4">
              <Heading level="h2">Results</Heading>
              <div className="border-l-4 border-primary border-solid pl-8 mt-4">
                <Markdown components={markdownComponents}>
                  {resultsContent}
                </Markdown>
              </div>
            </div>
            <div className="relative basis-[400px] w-full mt-16 lg:mt-0 lg:basis-1/2 lg:h-[400px]">
              <Image
                src={getStrapiMedia(resultsImage.url) as string}
                alt={resultsImage.alternativeText}
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
