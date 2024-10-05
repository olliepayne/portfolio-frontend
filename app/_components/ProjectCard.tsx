import Image from "next/image"
import { getStrapiMedia } from "../utils/getStrapiMedia"
import LinkButton from "./LinkButton"
import { StrapiSkill } from "./ExperienceTimeline"
import SkillTag from "./SkillTag"

interface Props {
  mainImage: string
  name: string
  summary: string
  skills: StrapiSkill[]
  className?: string
}

export default function ProjectCard({
  mainImage,
  name,
  summary,
  skills,
  className
}: Props) {
  return (
    <div className="relative">
      <div className="relative w-full h-48">
        <Image
          src={getStrapiMedia(mainImage) as string}
          alt=""
          fill
          className="top-0 left-0 w-full h-full"
          objectFit="cover"
        />
      </div>
      <div className="py-2">
        <p className="text-heading4Desktop font-bold">{name}</p>
        <p>{summary}</p>
        <div className="mt-4">
          <span className="mr-2">Skills:</span>
          <ul className="inline-flex flex-wrap">
            {skills.map(({ name }) => (
              <li className="mr-2">
                <SkillTag name={name} />
              </li>
            ))}
          </ul>
        </div>
        <LinkButton href="#" text="View project" className="mt-4" />
      </div>
    </div>
  )
}
