import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Project } from "@/app/types"
import getStrapiData from "@/app/helpers/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import SkillTagsList from "@/app/_components/SkillTagsList"

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
  const [{ name, mainImage, summary, skills }]: Project[] = await getStrapiData(
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
      <section className="text-white bg-charcoal pt-16 pb-64">
        <Container>
          <Heading level="h2">Request</Heading>
          <div className="border-l-4 border-themeLightGray border-solid pl-2 mt-4">
            <p>Text</p>
          </div>
        </Container>
      </section>
      <section className="pb-16 pt-64 relative">
        <Container variant="narrow">
          <div className="absolute mx-4 w-full max-w-[768px] h-[384px] -top-48 left-1/2 -translate-x-1/2">
            <Image
              src={getStrapiMedia(mainImage.url) as string}
              alt={mainImage.alternativeText}
              fill
              objectFit="cover"
            />
          </div>
          <Heading level="h2">Strategy</Heading>
          <div className="border-l-4 border-themeLightGray border-solid pl-2 mt-4">
            <p>Summary</p>
          </div>
        </Container>
      </section>
      <section className="py-16 bg-charcoal text-white">
        <Container>
          <Heading level="h2">Results</Heading>
          <div className="border-l-4 border-primary border-solid pl-2 mt-4">
            <p>markdown</p>
            <p className="font-bold text-heading5Desktop mt-8">Lessons</p>
            <p>Lessons go here</p>
          </div>
        </Container>
      </section>
    </main>
  )
}
