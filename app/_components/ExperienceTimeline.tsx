import Image from "next/image"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import SkillTagsList from "@/app/_components/SkillTagsList"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { Job } from "@/app/types"
import Markdown from "react-markdown"
import markdownComponents from "@/app/_helpers/markdownComponents"

export default async function ExperienceTimeline() {
  const data: Job[] = await getStrapiData(
    "/api/jobs?populate[0]=company&populate[1]=company.logo&populate[2]=skills&sort[0]=stillHere:desc&sort[1]=endDate:desc&sort[2]=startDate:desc",
    "no-cache"
  )

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return new Intl.DateTimeFormat("en-us", {
      year: "numeric",
      month: "long"
    }).format(date)
  }

  function getDuration(index: number) {
    const endDate = data[index].stillHere
      ? new Date()
      : new Date(data[index].endDate)
    const startDate = new Date(data[data.length - 1].startDate)

    const millisecondsDiff = endDate.getTime() - startDate.getTime()
    const daysDiff = Math.round(millisecondsDiff / (24 * 60 * 60 * 1000))
    const years = Math.round(daysDiff / 365)
    const months = Math.round((365 - (daysDiff % 365)) / 30)
    return `${years > 0 ? `${years} yrs` : ""} ${months} mos`
  }

  function isNewCompanySection(index: number) {
    if (
      index === 0 ||
      (index > 0 && data[index].company.name !== data[index - 1].company.name)
    )
      return true
  }

  function isLastJobInSection(index: number) {
    if (
      index < data.length - 1 &&
      data[index].company.name === data[index + 1].company.name
    )
      return true
  }

  return data ? (
    <div>
      {data.map(
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
            {(index > 0 && company.name !== data[index - 1].company.name) ||
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
                        className="object-cover"
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
                {summary && (
                  <Markdown components={markdownComponents}>{summary}</Markdown>
                )}
                {skills.length > 0 && (
                  <SkillTagsList skills={skills} className="mt-4" />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  ) : (
    <></>
  )
}
