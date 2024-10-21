import Container from "@/app/_components/Container"
import BlogPostCard from "@/app/_components/BlogPostCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { BlogPost } from "@/app/types"
import Heading from "@/app/_components/Heading"
import SkillFilters from "@/app/_components/SkillFilters"
import { Skill } from "@/app/types"
import { Metadata } from "next"
import { Suspense } from "react"

interface Props {
  searchParams: {
    skill?: string | string[]
  }
}

export const metadata: Metadata = {
  title: "Blog - Frontend & SEO Resources",
  description:
    "Browse educational resources covering frontend, development, and SEO topics."
}

export default async function BlogIndexPage({ searchParams }: Props) {
  const skills: Skill[] = await getStrapiData("/api/skills")

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
          <Heading level="h1">Blog</Heading>
          <p className="mt-4">Resources on frontend development and SEO.</p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          {skills && (
            <Suspense>
              <SkillFilters skills={skills} className="mt-4" />
            </Suspense>
          )}
          {blogPosts && (
            <ul className="grid mt-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((blogPost, index) => (
                <li key={`blog-post-${index}`} className="">
                  <BlogPostCard {...blogPost} />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </main>
  )
}
