import { Post, SEO } from "@/app/types"
import getStrapiData from "@/app/_utils/getStrapiData"
import { Metadata } from "next"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import { getShortMonthDayYear } from "@/app/_utils/dateFormatter"
import Image from "next/image"
import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import Markdown from "react-markdown"
import markdownComponents from "@/app/_components/markdownComponents"
import remarkGfm from "remark-gfm"

export async function generateStaticParams() {
  const posts: Post[] = await getStrapiData("/api/posts")

  return posts.map((post) => ({ slug: post.slug }))
}

type PostPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params
}: PostPageProps): Promise<Metadata> {
  const seo: SEO = await getStrapiData(
    `/api/posts?filters[slug][$eq]=${params.slug}&populate=seo`
  )

  return {
    title: seo.titleTag,
    description: seo.metaDescription
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const posts: Post[] = await getStrapiData(
    `/api/posts?filters[slug][$eq]=${params.slug}&populate=*`
  )
  const {
    title,
    mainImage,
    summary,
    content,
    updatedAt,
    publishedAt,
    postCategory
  } = posts[0]

  return (
    <main>
      <article>
        <header className="mt-32">
          <Container>
            <Heading level="h1">{title}</Heading>
            <div className="mt-8 flex justify-between flex-col md:flex-row">
              <p className="basis-2/3 text-body-large">{summary}</p>
              <div className="mt-8 md:mt-0 md:ml-8">
                <span className="mr-4">
                  Updated {getShortMonthDayYear(updatedAt)}
                </span>
                {postCategory && (
                  <span className="px-2 py-1 text-sm uppercase rounded-sm border-[1px] border-off-white bg-[#FAFAFA] dark:bg-[#1D1F21] dark:border-off-black">
                    {postCategory.name}
                  </span>
                )}
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

        <section>
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
