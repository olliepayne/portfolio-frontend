"use client"
import { useState, useEffect, createContext, Dispatch, SetStateAction } from "react"

const systemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light"
  }
}

type ThemeProviderProps = {
  childen?: React.ReactNode | React.ReactNode[]
}

const ThemeContext = createContext<[string, Dispatch<SetStateAction<string>>]>([
  "",
  () => {}
])

export default function ThemeProvider({ childen }: ThemeProviderProps) {
  const [theme, setTheme] = useState("")

  function loadTheme() {
    const savedTheme = localStorage.getItem("theme") || undefined
    if (savedTheme !== undefined) {
      
    } else {
      
    }
  } 

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {childen}
    </ThemeContext.Provider>
  )
}
