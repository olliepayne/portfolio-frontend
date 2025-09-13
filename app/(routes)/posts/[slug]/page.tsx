import { Post, SEO } from "@/app/types"
import getStrapiData from "@/app/_utils/getStrapiData"
import { Metadata } from "next"
import Container from "@/app/_components/Container"
import Heading from "@/app/_components/Heading"
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
  const { title, mainImage } = posts[0]

  return (
    <main>
      <article>
        <header className="mt-32">
          <Container>
            <Heading level="h1">{title}</Heading>
            <div className="mt-8 flex justify-between flex-col-reverse md:flex-row">
              <p className="mt-8 basis-2/3 text-body-large md:mt-0"></p>
              <div className="md:ml-8">
                <span className="font-semibold"></span>
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
            ></Markdown>
          </Container>
        </section>
      </article>
    </main>
  )
}
