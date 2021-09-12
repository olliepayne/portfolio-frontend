const months = []

const shortMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

type MonthType = "SHORT" | "FULL"
export const parseKebabDate = (kebabDate: string, monthReturnType: MonthType) => {
  let month: string

  const splitKebabDate = kebabDate.split("-")

  if (monthReturnType === "FULL") {

  } else if (monthReturnType === "SHORT") {
    const monthIndex = parseInt(splitKebabDate[1].split("0")[1]) - 1
    month = shortMonths[monthIndex]
  }

  return {
    month,
    day: splitKebabDate[2],
    year: splitKebabDate[0]
  }
}
