"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/", label: "COLLECTIONS" },
    { href: "/chess", label: "CHESS" },
    { href: "/tables", label: "TABLES" },
    { href: "/basins", label: "BASINS" },
    { href: "/wall-art", label: "WALL ART" },
    { href: "/bespoke", label: "BESPOKE" },
    { href: "/journal", label: "JOURNAL" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-border-gold">
      <div className="container mx-auto px-6 h-28 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gold-dim hover:text-gold transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center justify-center mx-auto md:mx-0">
          <Image src="/logo-removebg-preview.png" alt="KALVÉ Logo" width={240} height={100} className="object-contain w-auto h-[70px] md:h-[100px]" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-[10px] lg:text-xs tracking-widest text-gold-dim">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={`transition-colors hover:text-gold ${pathname === link.href ? 'text-gold' : ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6 text-gold-dim">
          <button className="hover:text-gold transition-colors hidden sm:block" aria-label="User profile">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button className="hover:text-gold transition-colors" aria-label="Shopping bag">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-28 left-0 w-full bg-[#0a0a0a] border-b border-border-gold flex flex-col shadow-2xl py-6 px-6 max-h-[calc(100vh-7rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu}
              className={`py-4 border-b border-border-gold/30 text-sm tracking-widest transition-colors ${pathname === link.href ? 'text-gold' : 'text-gold-dim hover:text-gold'}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="py-6 flex items-center gap-6 text-gold-dim">
            <button className="hover:text-gold transition-colors flex items-center gap-2 text-xs tracking-widest" aria-label="User profile">
              <User className="w-5 h-5" strokeWidth={1.5} /> MY ACCOUNT
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
