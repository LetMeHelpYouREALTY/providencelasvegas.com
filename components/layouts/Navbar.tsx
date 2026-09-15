"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { realscoutUrls, gbpUrls } from "@/lib/site-config";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mainNavLinks = [
    { href: "/", label: "Home", external: false },
    { href: "/services", label: "Services", external: false },
    { href: "/providence", label: "Neighborhoods", external: false },
    { href: realscoutUrls.searchNavbar, label: "Properties", external: true },
    { href: "/contact", label: "Contact", external: false },
  ];

  const serviceLinks = [
    { href: "/buyers", label: "Buy in Providence" },
    { href: "/sellers", label: "Sell Your Providence Home" },
    { href: "/new-construction", label: "Providence New Construction" },
    { href: "/home-valuation", label: "Free Home Valuation" },
    { href: "/providence/hoa-info", label: "HOA & Resale Info" },
    { href: "/luxury-homes", label: "Premium Providence Homes" },
    { href: "/55-plus-communities", label: "Providence 55+ Living" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors leading-tight">
              Providence <span className="text-blue-600">Real Estate</span>
            </span>
            <span className="text-xs text-slate-500 hidden sm:block">Homes for Sale in Providence Las Vegas</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {mainNavLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm"
                >
                  {link.label}
                </Link>
              )
            )}

            <a
              href={gbpUrls.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm hidden xl:inline"
            >
              Directions
            </a>
            <a
              href={gbpUrls.review}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors text-sm hidden xl:inline"
            >
              Reviews
            </a>
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="tel:+17027442993" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">(702) 744-2993</span>
                <span className="xl:hidden">Call</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href="tel:+17027442993">
                <Phone className="h-4 w-4" />
              </Link>
            </Button>
            <button
              className="text-slate-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-1 pt-4">
              {mainNavLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Providence Services */}
              <div className="border-t border-slate-200 pt-2 mt-2">
                <span className="text-xs font-semibold text-slate-500 px-3 uppercase">
                  Providence Services
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                href={gbpUrls.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Directions</span>
              </a>
              <a
                href={gbpUrls.review}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-colors py-2 px-3 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="inline-flex items-center gap-2"><Star className="h-4 w-4" /> Google Reviews</span>
              </a>
              <div className="pt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700 w-full">
                  <Link
                    href="tel:+17027442993"
                    className="flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call (702) 744-2993
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
