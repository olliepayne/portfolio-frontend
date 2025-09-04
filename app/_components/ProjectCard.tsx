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
  summary,
  skills,
  type,
  className
}: ProjectCardProps) {
  const baseStyles = "group cursor-pointer flex flex-col justify-between"
  const mergedStyles = cn(baseStyles, className)
  return (
    <div className={mergedStyles}>
      <div className="relative flex-1 rounded-sm">
        <Image
          src={getStrapiMedia(mainImage.url) as string}
          alt={mainImage.alternativeText}
          fill
          className="object-cover rounded-sm"
        />
        <div className="absolute rounded-sm left-0 top-0 w-full h-full hover:border-4 transition-all border-primary"></div>
      </div>
      <div className="mt-2">
        <span className="font-medium text-off-black">{name}</span>
        {/* <span>Eightfold</span> */}
      </div>
    </div>
  )
}
