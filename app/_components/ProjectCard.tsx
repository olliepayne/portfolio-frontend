import Image from "next/image"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import { Project } from "@/app/types"
import Link from "next/link"
import SkillTagList from "@/app/_components/SkillTagList"

export default function ProjectCard({
  name,
  slug,
  mainImage,
  summary,
  skills,
  type
}: Project) {
  return (
    <div className="relative z-30 p-4 h-full group cursor-pointer bg-themeGray text-white flex flex-col justify-between">
      <Image
        src={getStrapiMedia(mainImage.url) as string}
        alt={mainImage.alternativeText}
        fill
        className="-z-20 object-cover"
      />
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-charcoal opacity-80 transition-opacity lg:group-hover:opacity-90" />
      <div>
        <p className="text-heading3Mobile font-bold mt-4">{name}</p>
        <p className="mt-4">{summary}</p>
        <Link
          href={`/projects/${slug}`}
          className="mt-4 text-primary inline-block before:z-20 before:absolute before:w-full before:h-full before:top-0 before:left-0"
        >
          View Project
        </Link>
      </div>
      <div className="ml-auto mr-0 w-fit">
        <p className="mt-4 font-bold uppercase">{type}</p>
        {skills && (
          <SkillTagList
            skills={skills}
            className="relative z-30 mt-2 flex-col pointer-events-none"
          />
        )}
      </div>
    </div>
  )
}
