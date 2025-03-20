"use client";

import Link from "next/link";
import { Github } from "lucide-react";

interface ProjectCardProps {
  title: string
  description: string
  link: string
  github: string
  tech: string[]
}

export default function ProjectCard({ title, description, link, github, tech }: ProjectCardProps) {
  return (
    <div className="bg-zinc-900 rounded-md overflow-hidden transition-all duration-300 hover:border-purple-500/50 border border-zinc-800 h-full flex flex-col">
      <Link href={link} target="_blank" rel="noopener noreferrer" className="block group flex-1 p-4">
        <h2 className="text-base font-bold mb-1 text-white">{title}</h2>
        <p className="text-xs text-zinc-400">{description}</p>
      </Link>

      <div className="px-4 pb-2 flex justify-between items-center">
        <div className="flex gap-1">
          {tech.includes("Frontend") && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-900/30 text-purple-300 border border-purple-800/50">
              Frontend
            </span>
          )}
          {tech.includes("Backend") && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-900/30 text-blue-300 border border-blue-800/50">
              Backend
            </span>
          )}
        </div>
        <Link
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-white transition-colors p-1"
          onClick={(e) => e.stopPropagation()}
        >
          <Github size={16} />
          <span className="sr-only">GitHub Repository</span>
        </Link>
      </div>
    </div>
  )
}

