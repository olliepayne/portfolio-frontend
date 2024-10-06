import Image from "next/image"
import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import LinkButton from "@/app/_components/LinkButton"
import SkillTag from "@/app/_components/SkillTag"
import { Project } from "@/app/types"

export default function ProjectCard({
  name,
  slug,
  mainImage,
  summary,
  skills
}: Project) {
  return (
    <div className="relative shadow-lg rounded-lg">
      <div className="relative w-full h-48 shadow-lg">
        <Image
          src={getStrapiMedia(mainImage.url) as string}
          alt={mainImage.alternativeText}
          fill
          className="top-0 left-0 w-full h-full rounded-lg"
          objectFit="cover"
        />
      </div>
      <div className="py-4 px-4">
        <p className="text-heading4Desktop font-bold">{name}</p>
        <p>{summary}</p>
        <div className="mt-4">
          {skills && (
            <ul className="inline-flex flex-wrap">
              {skills.map((skill) => (
                <li key={`project-${name}-${skill.name}`} className="mr-2">
                  <SkillTag href={"#"} name={skill.name} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <LinkButton
          href={`/projects/${slug}`}
          text="View project"
          className="mt-4"
        />
      </div>
    </div>
  )
}
