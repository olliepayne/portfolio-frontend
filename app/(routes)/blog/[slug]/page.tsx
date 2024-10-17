import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { BlogPost } from "@/app/types"
import Image from "next/image"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import markdownComponents from "@/app/_helpers/markdownComponents"
import Markdown from "react-markdown"
import Blob from "@/app/_components/Blob"
import SkillTagLinksList from "@/app/_components/SkillTagLinksList"

export async function generateStaticParams() {
  const blogPostsUrl = "/api/blog-posts"
  const blogPosts: BlogPost[] = await getStrapiData(blogPostsUrl)

  return blogPosts.map(({ slug }) => ({
    slug
  }))
}

interface Props {
  params: {
    slug: string
  }
}

export default async function BlogSlugPage({ params: { slug } }: Props) {
  const blogPostUrl = `/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
  const [
    { title, mainImage, content, skills, publishedAt, updatedAt }
  ]: BlogPost[] = await getStrapiData(blogPostUrl)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date)
  }

  return (
    <article className="overflow-hidden">
      <section className="bg-charcoal py-16 text-white overflow-x-clip">
        <Container>
          <div className="flex justify-between lg:items-center gap-8 lg:gap-4 flex-col lg:flex-row">
            <div className="">
              <Heading level="h1">{title}</Heading>
              <p className="my-4">
                <span>Updated on {formatDate(updatedAt)} | </span>
                <span>Published on {formatDate(publishedAt)}</span>
              </p>
              {skills.length > 0 && (
                <SkillTagLinksList
                  scope="blog"
                  skills={skills}
                  className="relative z-10"
                />
              )}
            </div>
            <div className="relative basis-[380px] w-full lg:basis-1/2 lg:h-[380px]">
              <Blob
                variant="secondary"
                className="absolute h-[600px] -top-16 -right-16 fill-primary animate-blob"
              />
              <Image
                src={getStrapiMedia(mainImage.url) as string}
                alt={mainImage.alternativeText}
                fill
                className="object-cover drop-shadow-xl-darker"
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="py-32">
        <Container variant="narrow">
          <Markdown components={markdownComponents}>{content}</Markdown>
        </Container>
        <code>Here is some code</code>
      </section>
    </article>
  )
}
