import { Project } from "@/app/types"
import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"
import { cn } from "@/app/_utils/cn"
import Image from "next/image"
import InternalLink from "@/app/_components/InternalLink"
import SkillTag from "@/app/_components/SkillTag"

interface ProjectCardProps extends Project {
  className?: string
}

export default function ProjectCard({
  name,
  slug,
  mainImage,
  skillTags,
  className
}: ProjectCardProps) {
  return (
    <div className={cn("relative group cursor-pointer flex flex-col", className)}>
      <div className="relative flex-1 rounded-sm shadow-sm overflow-clip">
        <Image
          src={getStrapiMedia(mainImage.url) as string}
          alt={mainImage.alternativeText}
          fill
          className="object-cover rounded-sm group-hover:scale-x-105 group-hover:scale-y-105 transition-all duration-300"
        />
        <div className="absolute rounded-sm left-0 top-0 w-full h-full group-hover:border-4 transition-all dark:border-primary-intense border-primary"></div>
      </div>
      <div className="mt-2">
        <p className="mt-2 w-fit inline-block relative dark:group-hover:after:bg-off-white group-hover:after:bg-off-black after:transition-all after:absolute after:bottom-0.5 after:left-0 after:w-full after:h-[2px] after:bg-gray-400">
          {name}
        </p>
        <ul className="mt-4 flex flex-wrap gap-4">
          {skillTags?.map((skillTag) => (
            <li key={skillTag.name}>
              <SkillTag name={skillTag.name} />
            </li>
          ))}
        </ul>
      </div>
      <InternalLink
        href={`/projects/${slug}`}
        className="absolute top-0 left-0 w-full h-full inline-block opacity-0"
        text={`View the ${name} projectInternalLink`}
      />
    </div>
  )
}
