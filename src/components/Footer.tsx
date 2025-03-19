"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="space-x-4">
            <Link href="https://github.com/finattttto" target="_blank">
              <Button variant="outline" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/luan-finatto" target="_blank">
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="">
              <Button variant="outline" size="icon">
                <Phone className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="">
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
