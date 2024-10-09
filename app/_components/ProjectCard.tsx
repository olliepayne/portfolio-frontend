import Image from "next/image"
import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import LinkButton from "@/app/_components/LinkButton"
import SkillTag from "@/app/_components/SkillTag"
import { Project } from "@/app/types"
import Link from "next/link"

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
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-charcoal opacity-80 transition-opacity group-hover:opacity-85" />
      <p className="text-heading3Mobile font-bold">{name}</p>
      <p className="mt-4">{summary}</p>
      <ul className="mt-4">
        {skills.map((skill) => (
          <li>
            <SkillTag href="" name={skill.name} />
          </li>
        ))}
      </ul>
      <Link
        href={`/projects/${slug}`}
        className="mt-4 text-primary block opacity-0 transition-opacity before:z-20 before:absolute before:w-full before:h-full before:top-0 before:left-0 group-hover:opacity-100"
      >
        View project
      </Link>
    </div>
  )
}
