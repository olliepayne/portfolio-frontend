import Container from "@/app/_components/Container"
import BlogPostCard from "@/app/_components/BlogPostCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { BlogPost } from "@/app/types"
import Heading from "@/app/_components/Heading"
import SkillFilters, {
  SkillFiltersPlaceholder
} from "@/app/_components/SkillFilters"
import { Skill } from "@/app/types"
import { Metadata } from "next"
import { Suspense } from "react"

interface Props {
  searchParams: {
    skill?: string | string[]
  }
}

export const metadata: Metadata = {
  title: "Development & Digital Marketing Resources",
  description: "Tips and insights for development and digital marketing."
}

export default async function BlogIndexPage({ searchParams }: Props) {
  const skills: Skill[] = await getStrapiData("/api/skills?sort[0]=name")

  let blogPostsUrlFilters = ""
  function setBlogPostsUrlFilters() {
    if (searchParams.skill) {
      if (typeof searchParams.skill === "string") {
        blogPostsUrlFilters = `&filters[skills][name][$eq]=${searchParams.skill}`
      } else {
        blogPostsUrlFilters = searchParams.skill
          .map((item) => `&filters[skills][name][$eq]=${item}`)
          .join()
          .replace(/[,]/g, "")
      }
    }
  }
  setBlogPostsUrlFilters()
  const blogPostsUrl = `/api/blog-posts?populate=*${blogPostsUrlFilters}&sort[0]=updatedAt:desc`
  const blogPosts: BlogPost[] = await getStrapiData(blogPostsUrl, "no-cache")

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-charcoal text-white">
        <Container>
          <Heading level="h1">Learn</Heading>
          <p className="mt-4">
            Tips and insights for development and digital marketing
          </p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          {skills && (
            <Suspense fallback={<SkillFiltersPlaceholder />}>
              <SkillFilters skills={skills} />
            </Suspense>
          )}
          <ul className="grid mt-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Suspense fallback={<p>Loading results...</p>}>
              {blogPosts.map((blogPost, index: number) => (
                <li key={`blog-post-${index}`} className="">
                  <BlogPostCard {...blogPost} />
                </li>
              ))}
            </Suspense>
          </ul>
        </Container>
      </section>
    </main>
  )
}
