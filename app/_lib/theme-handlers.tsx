"use client"
import {
  useState,
  useEffect,
  createContext,
  Dispatch,
  SetStateAction,
  useContext
} from "react"

const getSystemTheme = () => {
  let systemTheme = ""
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    systemTheme = "dark"
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    systemTheme = "light"
  }
  return systemTheme
}

interface ThemeContext {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}
export const ThemeContext = createContext<ThemeContext | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

type ThemeProviderProps = {
  children?: React.ReactNode | React.ReactNode[]
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState("")

  useEffect(() => {
    if (!isMounted) {
      const savedTheme = localStorage.getItem("theme") || undefined
      if (savedTheme === undefined) {
        setTheme(getSystemTheme())
      } else {
        setTheme(savedTheme)
      }

      setIsMounted(true)
    }
  }, [])

  useEffect(() => {
    function addThemeClasses() {
      const root = document.documentElement

      document.body.classList.add("theme-transition")
      setTimeout(() => {
        document.body.classList.remove("theme-transition")
      }, 200)

      if (theme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    }

    function saveThemeToLocal() {
      localStorage.setItem("theme", theme)
    }

    if (isMounted) {
      saveThemeToLocal()
      addThemeClasses()
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
