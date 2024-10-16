import Container from "@/app/_components/Container"
import BlogPostCard from "@/app/_components/BlogPostCard"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { BlogPost } from "@/app/types"
import Heading from "@/app/_components/Heading"

export default async function BlogIndexPage() {
  const blogPostsUrl = "/api/blog-posts?populate=*"
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
          <Heading level="h2">All Posts</Heading>
          <p>All blog posts matching the current filters.</p>
          {blogPosts && (
            <ul className="grid my-8 sm:grid-cols-2 lg:grid-cols-3">
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
