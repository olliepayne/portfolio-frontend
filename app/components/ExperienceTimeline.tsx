import Image from "next/image"
import SkillTag from "./SkillTag"

interface Props {
  events: [
    {
      company: string
      startDate: string
      stillHere: boolean
      roles: [
        {
          title: string
          startDate: string
          stillHere: boolean
          workingLocation: string
          remote?: boolean
          employmentTime: "Full-Time"
          summary: string
        }
      ]
    }
  ]
}

// Test data
const events = [
  {
    company: "Eightfold",
    // startDate: string
    // stillHere: boolean
    roles: [
      {
        title: "SEO Analyst",
        // startDate: string
        // stillHere: boolean
        // workingLocation: string
        // remote?: boolean
        employmentType: "Full-Time",
        summary:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        skills: [
          {
            name: "Next.js"
          }
        ]
      }
    ]
  }
]

export default function ExperienceTimeline() {
  return (
    <div>
      {events.map(({ company, roles }) => (
        <div key={`company-${company}`}>
          <div className="flex flex-row">
            <div className="relative w-14 aspect-square">
              <Image
                src="/images/headshot.jpeg"
                alt=""
                fill
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <span className="block text-heading4Desktop">{company}</span>
              {/* <span className="inline-block"></span> */}
            </div>
          </div>
          {roles.map(({ title, summary, skills }) => (
            <div
              key={`company-${company}-${title}`}
              className="flex flex-row mt-4"
            >
              <div className="flex flex-col items-center basis-14 shrink-0">
                <span className="h-7 flex-shrink-0">
                  <span className="align-middle inline-block w-2 h-2 rounded-full bg-charcoal" />
                </span>
                <span className="w-0.5 h-full bg-charcoal" />
              </div>
              <div className="pl-4">
                <span className="text-xl">{title}</span>
                <p className="mt-4">{summary}</p>
                <div className="mt-4">
                  <span className="mr-2">Skills:</span>
                  <ul className="inline-block">
                    {skills.map(({ name }) => (
                      <li
                        key={`company-${company}-${title}-${name}`}
                        className="inline-block"
                      >
                        <SkillTag name={name} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
