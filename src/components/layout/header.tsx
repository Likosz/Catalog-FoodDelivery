"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Menu", href: "/menu" },
  { label: "Special Offers", href: "/offers" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Track Order", href: "/track" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-secondary">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Order.UK Home">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-primary">Order</span>
            <span className="text-3xl font-bold text-white">.UK</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="hidden rounded-full border-none bg-white/10 text-white hover:bg-white/20 hover:text-white lg:flex"
            asChild
          >
            <Link href="/login">
              <User className="mr-2 h-4 w-4" aria-hidden="true" />
              Login/Signup
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-secondary p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-white/10 p-4">
                  <span className="text-xl font-bold text-white">Menu</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-1 p-4" role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="rounded-lg px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-primary focus-visible:bg-white/10 focus-visible:text-primary focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto border-t border-white/10 p-4">
                  <Button
                    className="w-full rounded-full bg-primary text-white hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <User className="mr-2 h-4 w-4" aria-hidden="true" />
                      Login/Signup
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
