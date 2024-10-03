import Image from "next/image"
import SkillTag from "./SkillTag"
import { getStrapiMedia } from "../utils/getStrapiMedia"

interface StrapiSkill {
  name: string
}

interface StrapiJob {
  title: string
  employmentType: string
  startDate: string
  endDate?: string
  stillHere: boolean
  location: string
  remote: boolean
  summary: string
  skills: StrapiSkill[]
}

interface StrapiCompany {
  name: string
  logo: {
    url: string
    alternativeText: string
  }
  jobs: StrapiJob[]
}

interface Props {
  companies: StrapiCompany[]
}

export default function ExperienceTimeline({ companies }: Props) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const formatter = new Intl.DateTimeFormat("en-us", { dateStyle: "medium" })
    return formatter.format(date)
  }

  return (
    <div>
      {companies.map(({ name, logo, jobs }, index) => (
        <div
          key={`company-${index}`}
          className={
            index === 0
              ? undefined
              : "mt-8 pt-8 border-t-2 border-solid border-themeLightGray"
          }
        >
          <div className="flex flex-row">
            <div className="relative basis-14 aspect-square border-solid border-2 border-themeLightGray">
              <Image
                src={logo ? getStrapiMedia(logo.url) as string : ""}
                alt=""
                fill
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">{name}</p>
              <p className="text-themeGray">Duration</p>
            </div>
          </div>
          {jobs.map(
            (
              {
                title,
                employmentType,
                startDate,
                endDate,
                location,
                remote,
                summary,
                skills
              },
              index
            ) => (
              <div
                key={`role-${index}`}
                className={`flex flex-row ${index === 0 ? "mt-4" : undefined}`}
              >
                <div className="flex flex-col items-center basis-14 shrink-0">
                  <span className="h-7 flex-shrink-0">
                    <span className="align-middle inline-block w-2 h-2 rounded-full bg-themeLightGray" />
                  </span>
                  <span className="w-0.5 h-full bg-themeLightGray" />
                </div>
                <div
                  className={`pl-4 ${
                    index < jobs.length - 1 ? "pb-8" : undefined
                  }`}
                >
                  <p className="font-bold">{title}</p>
                  <p>{employmentType}</p>
                  <p className="mt-2 text-themeGray">
                    {formatDate(startDate)} -{" "}
                    {endDate ? formatDate(endDate) : "Present"}
                  </p>
                  <p className="text-themeGray">
                    {remote ? "Remote" : location}
                  </p>
                  <p className="mt-4">{summary}</p>
                  <div className="mt-4">
                    {skills?.length > 0 ? (
                      <>
                        <span className="mr-2">Skills:</span>
                        <ul className="inline-block">
                          {skills.map(({ name }, index) => (
                            <li
                              key={`role-${index}-${name}`}
                              className={`inline-block ${
                                index < skills.length - 1 ? "mr-2" : undefined
                              }`}
                            >
                              <SkillTag name={name} />
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </div>
  )
}
