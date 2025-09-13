import { Post, SEO } from "@/app/types"
import getStrapiData from "@/app/_utils/getStrapiData"
import { Metadata } from "next"
import Head from "next/head"
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

function postIsUpdated(publishedDateStr: string, updatedDateStr: string) {
  if (
    new Date(publishedDateStr).getDate() === new Date(updatedDateStr).getDate()
  ) {
    return false
  }
  return true
}

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const [
    {
      noindex,
      title,
      mainImage,
      summary,
      content,
      publishedAt,
      updatedAt,
      postCategory
    }
  ]: Post[] = await getStrapiData(
    `/api/posts?filters[slug][$eq]=${slug}&populate=*`
  )

  return (
    <main>
      {noindex && (
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
      )}
      <article>
        <header className="mt-32">
          <Container>
            <Heading level="h1">{title}</Heading>
            <div>
              <div className="my-4">
                {postCategory && (
                  <span className="px-2 py-1 text-sm uppercase rounded-sm border-[1px] border-off-white bg-[#FAFAFA] dark:bg-[#1D1F21] dark:border-off-black">
                    {postCategory.name}
                  </span>
                )}
              </div>
              <p className="text-body-large">{summary}</p>
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
            <p className="mb-8">
              {postIsUpdated(publishedAt, updatedAt) ? (
                <time dateTime={updatedAt}>
                  Updated: {getShortMonthDayYear(updatedAt)}
                </time>
              ) : (
                <time dateTime={publishedAt}>
                  Published: {getShortMonthDayYear(publishedAt)}
                </time>
              )}
            </p>
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
