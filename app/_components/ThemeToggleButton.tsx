"use client"
import { useState, useEffect } from "react"

type Theme = "dark" | "light"

export default function ThemeToggleButton() {
  function handleTheme() {
    let newTheme: Theme
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.remove("dark-mode")
      newTheme = "light"
    } else {
      document.body.classList.add("dark-mode")
      newTheme = "dark"
    }
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    function setTheme(theme: Theme) {
      if (theme == "dark") {
        document.body.classList.add("dark-mode")
      } else {
        document.body.classList.remove("dark-mode")
      }

      localStorage.setItem("theme", theme)
    }

    if (localStorage.getItem("theme") === null) {
      if (window.matchMedia("(prefers-color-scheme: dark)")) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    } else {
      setTheme(localStorage.getItem("theme") as Theme)
    }
  }, [])

  return (
    <button className="" onClick={handleTheme}>
      Theme
      <span className=""></span>
    </button>
  )
}
