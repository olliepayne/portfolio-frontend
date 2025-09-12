import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import { Project } from "@/app/types"
import { Metadata } from "next"
import getStrapiData from "@/app/_utils/getStrapiData"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import Image from "next/image"
import Markdown from "react-markdown"
import markdownComponents from "@/app/_components/markdownComponents"
import remarkGfm from "remark-gfm"

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
  const [
    { name, summary, mainImage, content, company, duration, tags }
  ]: Project[] = await getStrapiData(
    `/api/projects?filters[slug][$eq]=${params.slug}&populate=*`
  )

  return (
    <>
      <header className="mt-32">
        <Container>
          <Heading level="h1">{name}</Heading>
          <div className="mt-8 flex justify-between flex-col-reverse md:flex-row">
            <p className="mt-8 basis-2/3 text-body-large md:mt-0">{summary}</p>
            <div className="md:ml-8">
              <span className="font-semibold">
                {company ? company.name : "Personal"}, {duration}
              </span>
              <ul>
                {tags?.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 relative w-full aspect-video rounded-sm shadow-md">
            <Image
              src={getStrapiMedia(mainImage.url) as string}
              alt=""
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </Container>
      </header>

      <article className="mt-16">
        <Container variant="narrow">
          <Markdown components={markdownComponents} remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </Container>
      </article>
    </>
  )
}
