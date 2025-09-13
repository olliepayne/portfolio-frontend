import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import { Project, SEO } from "@/app/types"
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

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const seo: SEO = await getStrapiData(
    `/api/projects?filters[slug]$eq]=${params.slug}&populate=seo`
  )

  return {
    title: seo.titleTag,
    description: seo.metaDescription
  }
}

export default async function ProjectPage({
  params: { slug }
}: ProjectPageProps) {
  const [
    { name, summary, mainImage, content, company, duration, skillTags }
  ]: Project[] = await getStrapiData(
    `/api/projects?filters[slug][$eq]=${slug}&populate=*`
  )

  return (
    <main>
      <article>
        <header className="mt-32">
          <Container>
            <Heading level="h1">{name}</Heading>
            <div className="mt-8 flex justify-between flex-col-reverse md:flex-row">
              <p className="mt-8 basis-2/3 text-body-large md:mt-0">
                {summary}
              </p>
              <div className="md:ml-8">
                <p>
                  <span className="font-semibold">
                    {company ? company.name : "Personal"}
                  </span>
                  , <span>{duration}</span>
                </p>
                <ul>
                  {skillTags?.map((item) => (
                    <li key={item.name}>{item.name}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-16 relative w-full aspect-video rounded-sm shadow-md">
              <Image
                src={getStrapiMedia(mainImage.url) as string}
                alt={mainImage.alternativeText}
                fill
                priority
                className="object-cover rounded-sm"
              />
            </div>
          </Container>
        </header>

        <section className="mt-16">
          <Container variant="narrow">
            <Markdown
              components={markdownComponents}
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </Markdown>
          </Container>
        </section>
      </article>
    </main>
  )
}
