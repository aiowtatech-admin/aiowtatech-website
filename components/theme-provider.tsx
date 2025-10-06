"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Theme = "theme-1" | "theme-2" | "theme-3"

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("theme-1")

  useEffect(() => {
    const savedTheme = localStorage.getItem("aiowta-theme") as Theme
    if (savedTheme) {
      console.log("[v0] Loading saved theme:", savedTheme)
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    console.log("[v0] Applying theme:", theme)
    document.documentElement.className = theme
    localStorage.setItem("aiowta-theme", theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
