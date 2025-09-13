export function getShortMonthYear(dateStr: string) {
  const formatter = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short"
  })

  return formatter.format(new Date(dateStr)).toString()
}

export function getShortMonthDayYear(dateStr: string) {
  const formatter = Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })

  return formatter.format(new Date(dateStr)).toString()
}
