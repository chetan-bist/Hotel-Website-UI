"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/rooms", label: "Rooms & Suites" },
    { href: "/restaurant", label: "Restaurant" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@grandpalacehotel.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Welcome to Grand Palace Hotel</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GP</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Grand Palace</h1>
                <p className="text-xs text-gray-600">HOTEL</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                    pathname === item.href ? "text-blue-500" : "text-gray-700"
                  }`}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="bg-blue-500 hover:bg-blue-600"
                onClick={() => alert("Booking system will be implemented")}
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                      pathname === item.href ? "text-blue-500" : "text-gray-700"
                    }`}
                    onClick={() => {
                      setIsOpen(false)
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  className="bg-blue-500 hover:bg-blue-600 w-full"
                  onClick={() => alert("Booking system will be implemented")}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
