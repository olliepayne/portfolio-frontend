import Image from "next/image"
import { BlogPost } from "@/app/types"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import Link from "next/link"

export default function BlogPostCard({
  title,
  slug,
  mainImage,
  summary
}: BlogPost) {
  return (
    <div className="group cursor-pointer relative bg-gray-50 shadow-md">
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
        <p className="font-bold text-heading4Desktop">{title}</p>
        <p className="my-4">{summary}</p>
        <span className="z-20 relative inline-block group-hover:text-primary transition-all after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:-z-10">
          Read Post
        </span>
      </div>
    </div>
  )
}
