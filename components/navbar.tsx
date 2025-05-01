"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              ZapDash
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${isActive("/") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Home
          </Link>
          <Link
            href="/business-model"
            className={`text-sm font-medium transition-colors ${isActive("/business-model") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Business Model
          </Link>
          <Link
            href="/market-analysis"
            className={`text-sm font-medium transition-colors ${isActive("/market-analysis") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Market Analysis
          </Link>
          <Link
            href="/financials"
            className={`text-sm font-medium transition-colors ${isActive("/financials") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Financials
          </Link>
          <Link
            href="/operations"
            className={`text-sm font-medium transition-colors ${isActive("/operations") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Operations
          </Link>
          <Link
            href="/invest"
            className={`text-sm font-medium transition-colors ${isActive("/invest") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Invest
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-foreground font-semibold" : "text-muted-foreground hover:text-primary"}`}
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild className="rounded-full bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Partner with Us</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden py-4">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${isActive("/") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Home
            </Link>
            <Link
              href="/business-model"
              className={`text-sm font-medium transition-colors ${isActive("/business-model") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Business Model
            </Link>
            <Link
              href="/market-analysis"
              className={`text-sm font-medium transition-colors ${isActive("/market-analysis") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Market Analysis
            </Link>
            <Link
              href="/financials"
              className={`text-sm font-medium transition-colors ${isActive("/financials") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Financials
            </Link>
            <Link
              href="/operations"
              className={`text-sm font-medium transition-colors ${isActive("/operations") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Operations
            </Link>
            <Link
              href="/invest"
              className={`text-sm font-medium transition-colors ${isActive("/invest") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Invest
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-foreground font-semibold" : "text-muted-foreground"}`}
            >
              Contact
            </Link>
            <Button asChild className="w-full mt-2 rounded-full bg-teal-600 hover:bg-teal-700">
              <Link href="/contact">Partner with Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
