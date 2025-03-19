"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center relative">
          {/* Logo - Only visible on md screens and up */}
          <div className="hidden md:flex absolute left-0 items-center gap-3 font-bold text-white">
            <div className="size-9 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground shadow-lg">
              LF
            </div>
            <span className="text-lg tracking-tight">Luan Finatto</span>
          </div>

          {/* Navigation - Centered on all screen sizes */}
          <nav className="flex justify-center">
            <div className="flex gap-4 sm:gap-8">
              {["Portfolio", "About me", "Curriculum"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs sm:text-sm font-medium text-white/90 transition-colors hover:text-white relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

