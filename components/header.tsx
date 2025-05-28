"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* Mobile: Horizontal Layout */}
              <div className="flex items-center space-x-3 sm:hidden">
                <Image
                  src="/images/bhal-logo.png"
                  alt="BHAL Group Logo"
                  width={120}
                  height={40}
                  className="h-6 w-auto"
                />
                <div className="h-4 w-px bg-gray-300"></div>
                {/* Combined Rajarshi Logo for Mobile */}
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/rajarshi-logo-R.png"
                    alt="Rajarshi Logo Symbol"
                    width={24}
                    height={24}
                    className="h-8 w-10"
                  />
                  <Image
                    src="/images/rajarshi-logo-text.png"
                    alt="Rajarshi Construction Co Text"
                    width={80}
                    height={20}
                    className="h-4 w-auto"
                  />
                </div>
              </div>
              
              {/* Desktop: Horizontal Layout */}
              <div className="hidden sm:flex sm:items-center sm:space-x-2 lg:space-x-4">
                <Image
                  src="/images/bhal-logo.png"
                  alt="BHAL Group Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto lg:h-10"
                />
                <div className="h-6 w-px bg-gray-300 lg:h-8"></div>
                <Image
                  src="/images/rajarshi-logo.png"
                  alt="Rajarshi Construction Co Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto lg:h-10"
                />
              </div>
              <span className="sr-only">BHAL GROUP & RAJARSHI CONSTRUCTION CO</span>
            </Link>
          </div>
          <nav className="hidden xl:flex xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary whitespace-nowrap",
                  pathname === item.href ? "text-primary font-semibold" : "text-gray-700",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="hidden xl:block">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="flex xl:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden">
          <div className="space-y-1 px-4 pb-5 pt-2 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-3 text-base font-medium rounded-md px-3 transition-colors hover:bg-gray-50",
                  pathname === item.href ? "text-primary font-semibold bg-primary/5" : "text-gray-700",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
