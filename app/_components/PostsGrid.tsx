import { Post } from "@/app/types"
import InternalLink from "@/app/_components/InternalLink"
import { getShortMonthYear } from "@/app/_utils/dateFormatter"

type PostsTableProps = {
  posts: Post[]
}

export default function PostsGrid({ posts }: PostsTableProps) {
  return (
    <div className="mt-8 grid gap-8 grid-cols-1 auto-rows-auto md:grid-cols-2">
      {posts.map((post, index) => (
        <div key={`post-${index}`}>
          <InternalLink href={`/posts/${post.slug}`} text={post.title} />
          {post.postCategory && (
            <div className="my-4">
              <span className="px-2 py-1 text-sm uppercase rounded-sm border-[1px] border-off-white bg-[#FAFAFA] dark:bg-[#1D1F21] dark:border-off-black">
                {post.postCategory.name}
              </span>
            </div>
          )}
          <p className="my-4">{post.summary}</p>
          <div>
            <span className="mr-4">{getShortMonthYear(post.updatedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
