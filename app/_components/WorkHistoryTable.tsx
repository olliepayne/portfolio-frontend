import { cn } from "@/app/lib/utils"

const data = [
  {
    company: "MCD Partners / M+C Saatchi Group",
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
    company: "Kasadia",
    role: "Software Developer Intern",
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
                className="pr-8 py-4 text-left align-top font-medium"
              >
                {item.company}
              </th>
            )}
            <td className="pr-8 py-4 text-left">{item.role}</td>
            <td className="py-4 text-left">
              {getRoleDurationStr(item.startDate, item.endDate)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
