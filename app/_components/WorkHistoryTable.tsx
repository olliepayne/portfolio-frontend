import { cn } from "@/app/_utils/cn"

const data = [
  {
    company: "MCD Partners",
    role: "SEO & Paid Media Analyst",
    startDate: "06-30-2025",
    endDate: null
  },
  {
    company: "Eightfold",
    role: "Search Engine Marketing Manager",
    startDate: "07-01-2024",
    endDate: "06-30-2025"
  },
  {
    company: "Eightfold",
    role: "SEO Analyst",
    startDate: "04-01-2022",
    endDate: "07-01-2024"
  },
  {
    company: "Eightfold",
    role: "Junior Front-End Developer",
    startDate: "10-01-2021",
    endDate: "04-01-2022"
  },
  {
    company: "Eightfold",
    role: "Front-End Developer Intern",
    startDate: "07-01-2021",
    endDate: "10-01-2021"
  },
  {
    company: "Kasadia",
    role: "Front-End Developer Intern",
    startDate: "02-01-2021",
    endDate: "07-01-2021"
  }
]

export default function WorkHistoryTable() {
  function shouldCreateCompanyCell(index: number) {
    if (index > 0 && data[index].company !== data[index - 1].company) {
      return true
    } else if (index === 0) {
      return true
    }
    return false
  }

  function nextCompanyIsDifferent(index: number) {
    if (index < data.length - 1 && data[index + 1].company !== data[index].company) {
      return true
    } else if (index === data.length - 1) {
      return true
    }
    return false
  }

  function getCompanyRoleCount(company: string) {
    let counter = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].company === company) {
        counter++
      }
    }
    return counter
  }

  function getRoleDurationStr(startDate: string, endDate?: string | null) {
    const startYear = new Date(startDate).getFullYear()
    const endYear = endDate ? new Date(endDate).getFullYear() : "Now"
    return `${startYear}${endYear !== startYear ? `-${endYear}` : ""}`
  }

  return (
    <table className="mt-8 w-full">
      <tbody>
        {data.map((item, index) => (
          <tr key={`${item.role}-${index}`}>
            {shouldCreateCompanyCell(index) && (
              <th
                scope="row"
                rowSpan={getCompanyRoleCount(item.company)}
                className="pr-8 py-4 text-left align-top font-semibold border-b-[1px] dark:border-off-black border-light-gray"
              >
                {item.company}
              </th>
            )}
            <td
              className={cn(
                "pr-8 py-4 text-left",
                nextCompanyIsDifferent(index) &&
                  "border-b-[1px] dark:border-off-black border-light-gray"
              )}
            >
              {item.role}
            </td>
            <td
              className={cn(
                "py-4 text-left",
                nextCompanyIsDifferent(index) &&
                  "border-b-[1px] dark:border-off-black border-light-gray"
              )}
            >
              {getRoleDurationStr(item.startDate, item.endDate)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
