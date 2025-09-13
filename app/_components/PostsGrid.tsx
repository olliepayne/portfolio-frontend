import { Post } from "@/app/types"
import InternalLink from "@/app/_components/InternalLink"

function getFormattedDateStr(dateStr: string) {
  const formatter = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short"
  })

  return formatter.format(new Date(dateStr)).toString()
}

type PostsTableProps = {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsTableProps) {
  return (
    <div className="mt-8 grid gap-8 grid-cols-1 auto-rows-auto md:grid-cols-2">
      {posts.map((post, index) => (
        <div key={`post-${index}`}>
          <InternalLink href={`/posts/${post.slug}`} text={post.title} />
          <p className="my-4">{post.summary}</p>
          <div>
            <span className="mr-4">
              {getFormattedDateStr(post.publishedAt)}
            </span>
            {post.postCategory && (
              <span className="px-2 py-1 text-sm uppercase rounded-sm border-[1px] border-off-white bg-[#FAFAFA] dark:bg-[#1D1F21] dark:border-off-black">
                {post.postCategory.name}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
