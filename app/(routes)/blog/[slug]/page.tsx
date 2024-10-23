import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { BlogPost } from "@/app/types"
import Image from "next/image"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import markdownComponents from "@/app/_helpers/markdownComponents"
import Markdown from "react-markdown"
import Blob from "@/app/_components/Blob"
import SkillLinkList from "@/app/_components/SkillLinkList"
import { Metadata } from "next"
import TableOfContents from "@/app/_components/TableOfContents"

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getStrapiData(
    `/api/blog-posts?filters[slug]$eq]=${params.slug}&populate=seo`
  )

  return {
    title: data[0].seo ? data[0].seo.titleTag : "Title Tag",
    description: data[0].seo ? data[0].seo.metaDescription : "Meta description"
  }
}

export default async function BlogSlugPage({ params: { slug } }: Props) {
  const blogPostUrl = `/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`
  const [blogPost]: BlogPost[] = await getStrapiData(blogPostUrl)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).format(date)
  }

  return (
    <article>
      <section className="bg-charcoal py-16 text-white overflow-x-clip">
        <Container>
          <div className="flex justify-between lg:items-center gap-16 lg:gap-4 flex-col lg:flex-row">
            <div className="">
              {blogPost.title && <Heading level="h1">{blogPost.title}</Heading>}
              {blogPost && (
                <p className="my-4">
                  <span>Published: {formatDate(blogPost.publishedAt)}</span>
                  {blogPost.updatedAt && (
                    <span>
                      {" "}
                      | Last Updated: {formatDate(blogPost.updatedAt)}
                    </span>
                  )}
                </p>
              )}
              {blogPost.skills && blogPost.skills.length > 0 && (
                <SkillLinkList
                  scope="blog"
                  skills={blogPost.skills}
                  textVariant="white"
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
                src={getStrapiMedia(blogPost.mainImage.url) as string}
                alt={blogPost.mainImage.alternativeText}
                fill
                loading="eager"
                className="object-cover drop-shadow-xl-darker"
              />
            </div>
          </div>
        </Container>
      </section>
      <main className="py-32">
        <Container>
          <div className="flex">
            <aside className="flex-shrink-0 hidden lg:block">
              <TableOfContents className="sticky top-20" />
            </aside>
            <div className="ml-0 md:ml-12">
              {blogPost?.content && (
                <Markdown components={markdownComponents}>
                  {blogPost.content}
                </Markdown>
              )}
            </div>
          </div>
        </Container>
      </main>
    </article>
  )
}
