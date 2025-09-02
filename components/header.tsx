"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Search, Phone, ChevronDown } from "lucide-react"
import { SearchModal } from "./search-modal"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handlePhoneClick = () => {
    window.open("tel:+923142313681", "_self")
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <div className="relative group">
                <a
                  href="#products"
                  className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-1"
                >
                  Shop
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
            </nav>

            <div className="hidden lg:flex items-center">
              {/* Search and Cart Group */}
              <div className="flex items-center space-x-1 mr-4 border-r border-border pr-4">
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hover:bg-accent">
                  <Search className="h-5 w-5" />
                </Button>

                <div className="relative">
                  <Button variant="ghost" size="icon" className="hover:bg-accent">
                    <ShoppingCart className="h-5 w-5" />
                  </Button>
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    0
                  </span>
                </div>
              </div>

              {/* Action Buttons Group */}
              <div className="flex items-center space-x-3">
                <ThemeToggle />

                <Button
                  variant="outline"
                  size="sm"
                  className="text-sm font-medium border-primary text-primary hover:bg-primary hover:text-white transition-colors bg-transparent px-4"
                >
                  Become A Dealer
                </Button>

                <Button
                  variant="default"
                  size="sm"
                  className="text-sm font-medium bg-primary hover:bg-primary/90 text-white transition-colors flex items-center gap-2 px-4"
                  onClick={handlePhoneClick}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </Button>
              </div>
            </div>

            <div className="lg:hidden flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hover:bg-accent">
                <Search className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Button variant="ghost" size="icon" className="hover:bg-accent">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  0
                </span>
              </div>

              <ThemeToggle />

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-accent"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t bg-background">
              <div className="px-4 py-4 space-y-4">
                {/* Navigation Links */}
                <div className="space-y-2">
                  <a href="#" className="block py-2 text-foreground hover:text-primary font-medium transition-colors">
                    Home
                  </a>
                  <a
                    href="#products"
                    className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                  >
                    Shop
                  </a>
                  <a
                    href="#about"
                    className="block py-2 text-foreground hover:text-primary font-medium transition-colors"
                  >
                    About
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Become A Dealer
                  </Button>
                  <Button
                    variant="default"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={handlePhoneClick}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call: 0314-2313681
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
