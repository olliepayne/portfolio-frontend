import Image from "next/image"
import SkillTag from "@/app/_components/SkillTag"
import { getStrapiMedia } from "@/app/helpers/getStrapiMedia"
import { Job } from "@/app/types"
import SkillTagsList from "@/app/_components/SkillTagsList"

interface Props {
  jobs: Job[]
}

export default function ExperienceTimeline({ jobs }: Props) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const formatter = new Intl.DateTimeFormat("en-us", { dateStyle: "medium" })
    return formatter.format(date)
  }

  function getDuration(index: any) {
    let endDate = jobs[index].stillHere
      ? new Date()
      : new Date(jobs[index].endDate)
    let startDate = new Date(jobs[index].startDate)
    if (index < jobs.length - 1) {
      for (let i = index; i < jobs.length; i++) {
        if (jobs[i].company.name !== jobs[index].company.name) {
          startDate = new Date(jobs[i - 1].startDate)
          break
        }
      }
    }

    const millisecondsDiff = endDate.getTime() - startDate.getTime()
    const daysDiff = Math.round(millisecondsDiff / (24 * 60 * 60 * 1000))
    const years = Math.round(daysDiff / 365)
    const months = Math.round((daysDiff % 365) / 30)
    const formattedDuration = `${years > 0 ? `${years} yrs` : ""} ${months} mos`
    return formattedDuration
  }

  function isNewCompanySection(index: number) {
    if (
      index === 0 ||
      (index > 0 && jobs[index].company.name !== jobs[index - 1].company.name)
    )
      return true
  }

  function isLastJobInSection(index: number) {
    if (
      index < jobs.length - 1 &&
      jobs[index].company.name === jobs[index + 1].company.name
    )
      return true
  }

  return (
    <div>
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
            skills,
            company
          },
          index
        ) => (
          <div key={`timeline-entry-${index}`}>
            {(index > 0 && company.name !== jobs[index - 1].company.name) ||
            index === 0 ? (
              <div
                className={
                  index === 0
                    ? undefined
                    : "mt-8 pt-8 border-t-2 border-solid border-themeLightGray"
                }
              >
                <div className="flex flex-row">
                  <div className="relative basis-14 aspect-square border-solid border-2 border-themeLightGray">
                    {company.logo && (
                      <Image
                        src={getStrapiMedia(company.logo.url) as string}
                        alt={company.logo.alternativeText}
                        fill
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="ml-4">
                    <p className="font-bold">{company.name}</p>
                    <p className="text-themeGray">{getDuration(index)}</p>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div
              className={`flex flex-row ${
                isNewCompanySection(index) ? "mt-4" : undefined
              }`}
            >
              <div className="flex flex-col items-center basis-14 shrink-0">
                <span className="h-7 flex-shrink-0">
                  <span className="align-middle inline-block w-2 h-2 rounded-full bg-themeLightGray" />
                </span>
                <span className="w-0.5 h-full bg-themeLightGray" />
              </div>
              <div
                className={`pl-4 ${
                  isLastJobInSection(index) ? "pb-8" : undefined
                }`}
              >
                <p className="font-bold">{title}</p>
                <p>{employmentType}</p>
                <p className="mt-2 text-themeGray">
                  {formatDate(startDate)} -{" "}
                  {endDate ? formatDate(endDate) : "Present"}
                </p>
                <p className="text-themeGray">{remote ? "Remote" : location}</p>
                <p className="mt-4">{summary}</p>
                {skills.length > 0 && (
                  <SkillTagsList skills={skills} className="mt-4" />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}
