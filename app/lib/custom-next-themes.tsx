"use client"
import { useState, useEffect, createContext } from "react"

const systemTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark"
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light"
  }
}
