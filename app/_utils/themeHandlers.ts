export type Theme = "dark" | "light"

export function setTheme() {
  if (getTheme() === "dark") {
    localStorage.setItem("theme", "light")
  } else {
    localStorage.setItem("theme", "dark")
  }

  applyTheme()
}

export function getTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme !== undefined) {
    return savedTheme
  } else {
    if (window.matchMedia("(prefers-color-scheme: dark)")) {
      return "dark"
    } else {
      return "light"
    }
  }
}

export function applyTheme() {
  if (getTheme() === "dark") {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }
}
