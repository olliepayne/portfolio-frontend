"use client"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  atomDark,
  oneLight
} from "react-syntax-highlighter/dist/esm/styles/prism"

import { useTheme } from "@/app/_lib/themes-handler"

type ThemeWrapperProps = {
  language: string
  code: string
}

export default function ThemeWrappedSyntaxHighlighter({
  language,
  code
}: ThemeWrapperProps) {
  const { theme } = useTheme()

  return (
    <div className="mt-8 shadow-sm rounded-sm text-body-sm">
      <SyntaxHighlighter
        style={theme === "dark" ? atomDark : oneLight}
        PreTag="div"
        language={language}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
