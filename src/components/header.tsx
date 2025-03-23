"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const routes = [
    { href: "/organization", label: "The Organization" },
    { href: "/what-we-do", label: "What We Do" },
    { href: "/footprint", label: "Our Footprint" },
    { href: "/partners", label: "Partners" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-full">
            <Globe className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">Sports Federation</span>
          <span className="font-bold text-xl sm:hidden">SF</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href && "text-primary font-semibold",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Button  className="mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden">
            <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background shadow-lg">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <Globe className="h-6 w-6 text-primary" />
                    <span className="font-bold text-xl">Sports Federation</span>
                  </Link>
                  <Button  onClick={() => setIsMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-primary p-2 rounded-md",
                        pathname === route.href ? "bg-muted text-primary font-semibold" : "hover:bg-muted/50",
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto p-4 border-t">
                  <div className="flex gap-4 justify-center">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
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
                        className="h-5 w-5"
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
      </div>
    </header>
  )
}

