"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/mentorship" },
  { label: "How It Works", href: "/workshops" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8E6E2]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-serif text-2xl font-black tracking-tight leading-none">
            <span className="text-[#FF7477]">HER</span>
            <span className="text-[#1A1A1A]">IZON</span>
          </span>
          <span className="hidden sm:block text-xs text-[#9B9B9B] uppercase tracking-widest font-medium ml-1">
            SOCIETY
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2D2D2D] hover:text-[#FF7477] transition-colors duration-200 uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="/apply"
            className="hidden lg:inline-flex bg-[#FF7477] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#E85F62] transition-colors duration-200"
          >
            Join Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[#1A1A1A] p-2"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#E8E6E2] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#2D2D2D] hover:text-[#FF7477] uppercase tracking-wide py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-2 bg-[#FF7477] text-white text-sm font-semibold px-5 py-3 rounded-full text-center hover:bg-[#E85F62] transition-colors"
          >
            Join Now
          </Link>
        </div>
      )}
    </header>
  );
}
