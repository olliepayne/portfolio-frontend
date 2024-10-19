import Image from "next/image"
import { BlogPost } from "@/app/types"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import Link from "next/link"
import SkillTagList from "@/app/_components/SkillTagList"

export default function BlogPostCard({
  title,
  slug,
  mainImage,
  skills,
  summary
}: BlogPost) {
  return (
    <div className="group cursor-pointer relative bg-gray-50 shadow-xl">
      <Link href={`/blog/${slug}`} className="absolute w-full h-full z-10" />
      <div className="relative w-full h-[200px]">
        <Image
          src={getStrapiMedia(mainImage.url) as string}
          alt={mainImage.alternativeText}
          fill
          className="object-cover"
        />
      </div>
      <div className="px-4 py-6">
        <SkillTagList skills={skills} />
        <p className="font-bold text-heading4Desktop mt-4">{title}</p>
        <p className="my-4">{summary}</p>
        <span className="relative pb-0.5 inline-block group-hover:text-primary transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary">
          Read Post
        </span>
      </div>
    </div>
  )
}
