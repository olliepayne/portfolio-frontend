import Image from "next/image"
import { getStrapiMedia } from "@/app/_helpers/getStrapiMedia"
import SkillLinkList from "@/app/_components/SkillLinkList"
import getStrapiData from "@/app/_helpers/getStrapiData"
import { Job, StrapiImage } from "@/app/types"
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

  function shouldCreateCompanyInfo(index: number, companyName: string) {
    if (
      (index > 0 && companyName !== data[index - 1].company.name) ||
      index === 0
    )
      return true
    return false
  }

  function getCompanyDuration(index: number) {
    const endDate = data[index].stillHere
      ? new Date()
      : new Date(data[index].endDate)
    let startDate = new Date(data[data.length - 1].startDate)
    function checkEarlierStartDate() {
      for (let i = index + 1; i < data.length; i++) {
        if (data[i].company.name !== data[index].company.name) {
          startDate = new Date(data[i - 1].startDate)
          break
        }
      }
    }
    checkEarlierStartDate()

    const millisecondsDuration = endDate.getTime() - startDate.getTime()
    const daysDuration = Math.round(
      millisecondsDuration / (24 * 60 * 60 * 1000)
    )
    const years = Math.trunc(daysDuration / 365)
    const months = Math.round((daysDuration / 365 - years) * 12)

    // console.log(months)

    return `${years > 0 ? `${years} yrs` : ""} ${
      months > 0 ? months + " mos" : ""
    }`
  }

  function isNewCompanySection(index: number) {
    if (
      index === 0 ||
      (index > 0 && data[index].company.name !== data[index - 1].company.name)
    )
      return true
  }

  function isLastJobInCompanySection(index: number) {
    if (
      index < data.length - 1 &&
      data[index].company.name === data[index + 1].company.name
    )
      return true
  }

  // if (data) console.log(data[0].company.logo)

  return (
    <div>
      {data.map(
        (
          {
            title,
            // employmentType,
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
            {shouldCreateCompanyInfo(index, company.name) && (
              <CompanyInfo
                name={company.name}
                logo={company.logo}
                duration={getCompanyDuration(index)}
                index={index}
              />
            )}
            <div
              className={`flex flex-row ${
                isNewCompanySection(index) ? "mt-4" : undefined
              }`}
            >
              <TimelineNode />
              <div
                className={`pl-4 ${
                  isLastJobInCompanySection(index) ? "pb-8" : undefined
                }`}
              >
                <p className="font-bold">{title}</p>
                {/* <p>{employmentType}</p> */}
                <p className="mt-2 text-themeGray">
                  {formatDate(startDate)} -{" "}
                  {endDate ? formatDate(endDate) : "Present"}
                </p>
                <p className="text-themeGray">{remote ? "Remote" : location}</p>
                {summary && (
                  <Markdown components={markdownComponents}>{summary}</Markdown>
                )}
                {skills?.length > 0 && (
                  <SkillLinkList
                    scope="projects"
                    skills={skills}
                    textVariant="black"
                    className="mt-4"
                  />
                )}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

interface CompanyInfoProps {
  name: string
  logo: StrapiImage
  index: number
  duration: string
}
function CompanyInfo({ name, logo, duration, index }: CompanyInfoProps) {
  return (
    <div
      className={
        index > 0
          ? "mt-8 pt-8 border-t-2 border-solid border-themeLightGray"
          : ""
      }
    >
      <div className="flex flex-row">
        <div className="basis-14 h-14 flex-shrink-0 relative border-solid border-2 border-themeLightGray">
          <Image
            src={getStrapiMedia(logo.url) as string}
            alt={logo.alternativeText}
            fill
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="font-bold">{name}</p>
          <p className="text-themeGray">{duration}</p>
        </div>
      </div>
    </div>
  )
}

function TimelineNode() {
  return (
    <div className="flex flex-col items-center basis-14 shrink-0">
      <span className="h-7 flex-shrink-0">
        <span className="align-middle inline-block w-2 h-2 rounded-full bg-themeLightGray" />
      </span>
      <span className="w-0.5 h-full bg-themeLightGray" />
    </div>
  )
}
