"use client"
import { usePathname } from "next/navigation"
import InternalLink from "@/app/_components/InternalLink"
import { cn } from "@/app/_utils/cn"

type BreadcrumbNavProps = {
  className?: string
}

export default function BreadcrumbNav({ className }: BreadcrumbNavProps) {
  const pathname = usePathname()
  const pathArray =
    pathname.split("/").filter((item) => item !== "") || undefined

  function getHref(index: number) {
    let href = `/${pathArray[0]}`
    if (index === 0) {
      return href
    }
    
    for (let i = 1; i < pathArray.length - 1; i++) {
      href += `/${pathArray[i]}`
    }
    return href
  }

  return (
    <nav className={cn("", className)}>
      <InternalLink href="/" text="Home" />
      {pathArray &&
        pathArray.map((item, index) => (
          <InternalLink href={getHref(index)} text={item} className="first-letter:uppercase" />
        ))}
    </nav>
  )
}
