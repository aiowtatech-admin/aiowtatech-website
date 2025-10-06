"use client"
import Link from "next/link"
import type React from "react"

import { useRouter } from "next/navigation"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    router.push(href)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div>
            <Link
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="text-lg font-bold text-primary mb-4 hover:text-primary/80 transition-colors inline-block"
            >
              AIOWTA TECHNOLOGIES
            </Link>
            <p className="text-sm text-muted-foreground">
              Professional networking solutions, IT services and technical support for businesses.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={(e) => handleNavClick(e, "/")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={(e) => handleNavClick(e, "/about")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={(e) => handleNavClick(e, "/services")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contactus"
                  onClick={(e) => handleNavClick(e, "/contactus")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="text-sm font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://linkedin.com/company/aiowtatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/aiowtatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/aiowtatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AIOWTA TECHNOLOGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
