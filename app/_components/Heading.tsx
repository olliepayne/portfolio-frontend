import React from "react"
import { cn } from "@/app/_utils/cn"

interface Props {
  level: "h1" | "h2" | "h3" | "h4"
  children?: React.ReactNode
  className?: string
  id?: string
}

export default function Heading({ level, children, className, id }: Props) {
  const styles = {
    h1: "font-bold text-h1-mobile md:text-h1-desktop",
    h2: "font-bold text-h2-mobile md:text-h2-desktop",
    h3: "font-bold text-h3-mobile md:text-h3-desktop",
    h4: "font-bold text-h4-mobile md:text-h4-desktop"
  }

  const mergedStyles = {
    h1: cn(styles.h1, className),
    h2: cn(styles.h2, className),
    h3: cn(styles.h3, className),
    h4: cn(styles.h4, className)
  }

  switch (level) {
    case "h1":
      return (
        <h1 id={id} className={mergedStyles.h1}>
          {children}
        </h1>
      )
    case "h2":
      return (
        <h2 id={id} className={mergedStyles.h2}>
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3 id={id} className={mergedStyles.h3}>
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4 id={id} className={mergedStyles.h4}>
          {children}
        </h4>
      )
  }
}
