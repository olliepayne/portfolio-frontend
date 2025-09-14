import { Post } from "@/app/types"
import InternalLink from "@/app/_components/InternalLink"
import SkillTag from "@/app/_components/SkillTag"
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
          <div className="my-4">
            {post.postCategory && <span className="font-medium">{post.postCategory.name}</span>}
            <ul className="mt-2 flex flex-wrap gap-4">
              {post.skillTags?.map((skillTag) => (
                <li key={skillTag.name}>
                  <SkillTag name={skillTag.name} />
                </li>
              ))}
            </ul>
          </div>
          <p className="my-4">{post.summary}</p>
          <div>
            <span className="mr-4">{getShortMonthYear(post.updatedAt)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
