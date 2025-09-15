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
import SkillTag from "@/app/_components/SkillTag"

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
        <header className="mt-20 md:mt-32">
          <Container>
            <Heading level="h1">{name}</Heading>
            <div className="mt-8 flex gap-8 justify-between flex-col-reverse md:flex-row">
              <p className="basis-2/3 text-body-large">{summary}</p>
              <div>
                <p>
                  <span className="font-medium">
                    {company ? company.name : "Personal"}
                  </span>
                  , <span>{duration}</span>
                </p>
                <ul className="mt-2 flex flex-wrap gap-4">
                  {skillTags?.map((skillTag) => (
                    <li key={skillTag.name}>
                      <SkillTag name={skillTag.name} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-16 relative w-full aspect-video rounded-md overflow-clip shadow-md">
              <Image
                src={getStrapiMedia(mainImage.url) as string}
                alt={mainImage.alternativeText}
                fill
                priority
                className="object-cover"
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
