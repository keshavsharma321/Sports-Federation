"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, Menu, X } from "lucide-react"
import "./globals.css"

const routes = [
  { href: "/organization", label: "The Organization" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/footprint", label: "Our Footprint" },
  { href: "/partners", label: "Partners" },
  { href: "/committee", label: "Committee" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact Us" },
]

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll, .stagger-children")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header
          className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
            scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background"
          }`}
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary/10 p-2 rounded-full transition-all duration-300 group-hover:bg-primary/20">
                <Globe className="h-5 w-5 text-primary animate-pulse-slow" />
              </div>
              <span className="font-bold text-xl hidden sm:inline-block group-hover:text-primary transition-colors">
                Sports Federation
              </span>
              <span className="font-bold text-xl sm:hidden group-hover:text-primary transition-colors">SF</span>
            </Link>

            <nav className="hidden md:flex gap-6">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                    pathname === route.href ? "text-primary font-semibold" : ""
                  }`}
                >
                  {route.label}
                  {pathname === route.href && (
                    <span className="absolute -bottom-[1.5rem] left-0 w-full h-0.5 bg-primary"></span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden animate-fade-in">
            <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg animate-fade-in">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Globe className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl">Sports Federation</span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </button>
                </div>
                <nav className="flex flex-col gap-1 p-4 stagger-children visible">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={`text-base font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-muted/50 ${
                        pathname === route.href ? "bg-muted text-primary font-semibold" : ""
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <div className="flex gap-4 justify-center">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 hover-scale"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 hover-scale"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 hover-scale"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <span className="sr-only">Twitter</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {children}

        {/* Footer */}
        <footer className="bg-muted py-12 border-t">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="animate-on-scroll">
                <Link href="/" className="flex items-center gap-2 mb-4 group">
                  <Globe className="h-6 w-6 text-primary group-hover:animate-bounce-light" />
                  <span className="font-bold text-xl group-hover:text-primary transition-colors">
                    Sports Federation
                  </span>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">
                  Promoting excellence in sports and fostering talent development since 1985.
                </p>
                <div className="flex gap-4">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 hover-scale"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 hover-scale"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 hover-scale"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 hover-scale"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </div>
              </div>
              <div className="animate-on-scroll">
                <h3 className="font-medium text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/organization"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      The Organization
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/what-we-do"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      What We Do
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/footprint"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Our Footprint
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/committee"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Committee
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partners"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="animate-on-scroll">
                <h3 className="font-medium text-lg mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Training Materials
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Event Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Publications
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      Media Gallery
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="animate-on-scroll">
                <h3 className="font-medium text-lg mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Code of Conduct
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      Anti-Doping Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Sports Federation. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

