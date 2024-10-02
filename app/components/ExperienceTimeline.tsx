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
const entries = [
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
        summary: "",
        skills: [
          {
            name: "Next.js"
          }
        ]
      },
      {
        title: "SEO Analyst",
        // startDate: string
        // stillHere: boolean
        // workingLocation: string
        // remote?: boolean
        employmentType: "Full-Time",
        summary: "",
        skills: [
          {
            name: "Next.js"
          }
        ]
      }
    ]
  },
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
        summary: "",
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
      {entries.map(({ company, roles }, index) => (
        <div
          key={`company-${index}`}
          className={
            index === 0
              ? undefined
              : "mt-8 pt-8 border-t-2 border-solid border-themeLightGray"
          }
        >
          <div className="flex flex-row">
            <div className="relative basis-14 aspect-square">
              <Image
                src="/images/headshot.jpeg"
                alt=""
                fill
                objectFit="cover"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold">Company</p>
              <p className="text-themeGray">Start date - End date</p>
            </div>
          </div>
          {roles.map(({ title, summary, skills }, index) => (
            <div
              key={`role-${index}`}
              className={`flex flex-row ${index === 0 ? "mt-4" : undefined}`}
            >
              <div className="flex flex-col items-center basis-14 shrink-0">
                <span className="h-7 flex-shrink-0">
                  <span
                    className={`align-middle inline-block w-2 h-2 rounded-full bg-themeLightGray ${
                      roles.length > 1 ? "bg-themeLightGray" : "bg-transparent"
                    }`}
                  />
                </span>
                <span
                  className={`w-0.5 h-full ${
                    roles.length > 1 ? "bg-themeLightGray" : "bg-transparent"
                  }`}
                />
              </div>
              <div
                className={`pl-4 ${
                  index < roles.length - 1 ? "pb-8" : undefined
                }`}
              >
                <p className="font-bold">Role</p>
                <p>Employment type</p>
                <p className="mt-2 text-themeGray">Start date - End date</p>
                <p className="text-themeGray">Location</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <div className="mt-4">
                  <span className="mr-2">Skills:</span>
                  <ul className="inline-block">
                    {skills.map(({ name }) => (
                      <li
                        key={`role-${index}-${name}`}
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
