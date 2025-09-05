import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import { cn } from "@/app/_utils/cn"
import Image from "next/image"
import Link from "next/link"
import { Project } from "@/app/types"

interface ProjectCardProps extends Project {
  className?: string
}

export default function ProjectCard({
  name,
  slug,
  mainImage,
  className
}: ProjectCardProps) {
  const baseStyles =
    "relative group cursor-pointer flex flex-col justify-between"
  const mergedStyles = cn(baseStyles, className)
  return (
    <div className={mergedStyles}>
      <div className="relative flex-1 rounded-sm shadow-sm">
        <Image
          src={getStrapiMedia(mainImage.url) as string}
          alt={mainImage.alternativeText}
          fill
          className="object-cover rounded-sm"
        />
        <div className="absolute rounded-sm left-0 top-0 w-full h-full group-hover:border-4 transition-all dark:border-primary-intense border-primary"></div>
      </div>
      <p className="mt-2 w-fit relative after:-z-10 after:absolute after:left-0 after:bottom-0.5 after:w-full after:h-[2px] after:opacity-0 dark:after:bg-off-white after:bg-off-black group-hover:after:opacity-100 after:transition-all">
        {name}
      </p>
      <Link
        href={`/projects/${slug}`}
        className="absolute top-0 left-0 w-full h-full inline-block opacity-0"
      >
        View project
      </Link>
    </div>
  )
}
