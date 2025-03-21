"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center relative">
          <Link
            href="/"
            className="md:flex absolute left-0 items-center gap-3 font-bold text-white group"
          >
            <div className="size-9 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
              LF
            </div>
            <span className="hidden md:flex text-lg tracking-tight transition-colors group-hover:text-white/80">
              Luan Finatto
            </span>
          </Link>
  
          <nav className="flex justify-center">
            <div className="flex gap-4 sm:gap-8">
              <Link
                href="/portfolio"
                className="text-xs sm:text-sm font-medium text-white/90 transition-colors hover:text-white relative group"
              >
                Portfólio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-xs sm:text-sm font-medium text-white/90 transition-colors hover:text-white relative group"
              >
                Sobre mim
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <a
                href="/docs/Curriculo.pdf"
                download
                className="text-xs sm:text-sm font-medium text-white/90 transition-colors hover:text-white relative group"
              >
                Currículo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
  
}
