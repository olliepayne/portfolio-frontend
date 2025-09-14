import { Post, SEO } from "@/app/types"
import getStrapiData from "@/app/_utils/getStrapiData"
import { Metadata } from "next"
import Head from "next/head"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
import SkillTag from "@/app/_components/SkillTag"
import Image from "next/image"
import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import { getShortMonthDayYear } from "@/app/_utils/dateFormatter"
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
      postCategory,
      skillTags
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
        <header>
          <Container>
            <Heading level="h1" className="mt-32">
              {title}
            </Heading>
            <div className="mt-8 flex justify-between gap-8">
              <div className="basis-1/2">
                {postCategory && (
                  <span className="font-medium">{postCategory.name}</span>
                )}
                <ul className="mt-2 flex gap-4 flex-wrap">
                  {skillTags?.map((skillTag) => (
                    <li key={skillTag.name}>
                      <SkillTag name={skillTag.name} />
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-body-large">{summary}</p>
              </div>
              <div className="relative basis-1/2 h-[350px] aspect-auto rounded-sm shadow-md">
                <Image
                  src={getStrapiMedia(mainImage.url) as string}
                  alt={mainImage.alternativeText}
                  fill
                  priority
                  className="object-cover rounded-sm"
                />
              </div>
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
