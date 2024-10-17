import Container from "@/app/_components/Container"
import BlogPostCard from "@/app/_components/BlogPostCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { BlogPost } from "@/app/types"
import Heading from "@/app/_components/Heading"
import SkillTagsList from "@/app/_components/SkillTagLinksList"
import { Skill } from "@/app/types"

interface Props {
  searchParams: any
}

export default async function BlogIndexPage({ searchParams }: Props) {
  const skills: Skill[] = await getStrapiData("/api/skills")

  let blogPostsUrl = "/api/blog-posts?populate=*"
  if (searchParams["skills"]) {
    // const blogPostsUrlFilters = searchParams.
    blogPostsUrl += `&filters[skills][name][$eq]=${searchParams["[skills]"]}`
  }
  const blogPosts: BlogPost[] = await getStrapiData(blogPostsUrl)

  return (
    <main className="min-h-screen">
      <section className="py-16 bg-charcoal text-white">
        <Container>
          <Heading level="h1">Blog</Heading>
          <p className="">Resources on frontend development and SEO.</p>
        </Container>
      </section>
      <section className="py-16">
        <Container>
          <div>
            <p className="font-bold text-heading5Desktop">Filter by skill</p>
            <SkillTagsList scope="blog" skills={skills} className="mt-4" />
          </div>
          <Heading level="h2" className="mt-8">
            All Posts
          </Heading>
          <p>All blog posts matching the current filters.</p>
          {blogPosts && (
            <ul className="grid my-8 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
