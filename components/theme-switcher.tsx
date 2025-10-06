"use client"

import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette } from "lucide-react"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (newTheme: "theme-1" | "theme-2" | "theme-3") => {
    console.log("[v0] Switching theme to:", newTheme)
    setTheme(newTheme)
  }

  return (
    <Card className="border-2 shadow-lg">
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Palette className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-sm">Choose Theme</h3>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            variant={theme === "theme-1" ? "default" : "outline"}
            size="sm"
            onClick={() => handleThemeChange("theme-1")}
            className="w-full justify-start"
          >
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[oklch(0.45_0.18_240)]" />
              <span>Corporate Blue</span>
            </div>
          </Button>
          <Button
            variant={theme === "theme-2" ? "default" : "outline"}
            size="sm"
            onClick={() => handleThemeChange("theme-2")}
            className="w-full justify-start"
          >
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[oklch(0.35_0.15_240)]" />
              <span>Navy Tech</span>
            </div>
          </Button>
          <Button
            variant={theme === "theme-3" ? "default" : "outline"}
            size="sm"
            onClick={() => handleThemeChange("theme-3")}
            className="w-full justify-start"
          >
            <div className="flex items-center gap-2">
              <div className="h-4 w-4 rounded-full bg-[oklch(0.55_0.16_220)]" />
              <span>Ocean Fresh</span>
            </div>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
