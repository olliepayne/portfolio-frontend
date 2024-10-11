import Image from "next/image"
import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Project } from "@/app/types"
import Link from "next/link"
import SkillTagsList from "@/app/_components/SkillTagsList"

export default function ProjectCard({
  name,
  slug,
  mainImage,
  summary,
  skills
}: Project) {
  return (
    <div className="relative z-30 p-4 h-full group cursor-pointer bg-themeGray">
      <Image
        src={getStrapiMedia(mainImage.url) as string}
        alt={mainImage.alternativeText}
        fill
        objectFit="cover"
        className="-z-20"
      />
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-charcoal opacity-80 transition-opacity group-hover:opacity-90" />
      <p className="text-heading3Mobile font-bold">{name}</p>
      <p className="mt-4">{summary}</p>
      <SkillTagsList skills={skills} className="mt-4 relative z-30" />
      <Link
        href={`/projects/${slug}`}
        className="mt-4 text-primary inline-block before:z-20 before:absolute before:w-full before:h-full before:top-0 before:left-0"
      >
        View project
      </Link>
    </div>
  )
}
