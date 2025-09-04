import Icon from "@/app/_components/Icon"
import { Resume } from "@/app/types"
import { getStrapiMedia } from "@/app/_utils/getStrapiMedia"

interface SocialCardProps {
  type: "LinkedIn" | "GitHub" | "Resume"
  resume?: Resume
}

export default function SocialCard({ type, resume }: SocialCardProps) {
  switch (type) {
    case "LinkedIn":
      return (
        <div className="border-light-gray border-2 rounded-lg p-3 relative hover:border-primary transition-all">
          <a
            href="https://www.linkedin.com/in/oliverpayne01/"
            target="_blank"
            className="absolute top-0 left-0 w-full h-full opacity-0"
          >
            View Ollie Payne on LinkedIn
          </a>
          <div className="flex items-center">
            <Icon name="LinkedIn" className="fill-charcoal" />
            <div className="ml-3">
              <p>LinkedIn</p>
              <span>oliverpayne01</span>
            </div>
          </div>
        </div>
      )
    case "GitHub":
      return (
        <div className="border-light-gray border-2 rounded-lg p-3 relative hover:border-primary transition-all">
          <a
            href="https://github.com/olliepayne"
            target="_blank"
            className="absolute top-0 left-0 w-full h-full opacity-0"
          >
            View Ollie Payne's GitHub profile
          </a>
          <div className="flex items-center">
            <Icon name="GitHub" className="fill-charcoal" />
            <div className="ml-3">
              <p>GitHub</p>
              <span>olliepayne</span>
            </div>
          </div>
        </div>
      )
    case "Resume":
      return (
        <div className="border-light-gray border-2 rounded-lg p-3 relative hover:border-primary transition-all">
          <a
            href={
              resume?.file?.url
                ? (getStrapiMedia(resume.file.url) as string)
                : "#"
            }
            target="_blank"
            className="absolute top-0 left-0 w-full h-full opacity-0"
          >
            View Ollie Payne's resume
          </a>
          <div className="flex items-center">
            <Icon name="Resume" className="fill-charcoal" />
            <div className="ml-3">
              <p>Resume</p>
              <span>View</span>
            </div>
          </div>
        </div>
      )
  }
}
