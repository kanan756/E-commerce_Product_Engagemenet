import Link from "next/link";
import Image from "next/image";
import { Diamond, CheckCircle, Package, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-gold mt-auto text-gold-dim">
      <div className="container mx-auto px-6 py-16">

        {/* Value Props Section matching KALVE */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 pb-16 border-b border-border-gold">
          <div className="flex items-start gap-4">
            <div className="p-3 border border-border-gold rounded-full shrink-0">
              <Diamond className="w-6 h-6 text-gold" strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-gold font-serif mb-2 tracking-wide text-sm">AUTHENTIC & LIMITED</h4>
              <p className="text-xs leading-relaxed">Every piece is unique, individually numbered and accompanied by a certificate of authenticity.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 border border-border-gold rounded-full shrink-0">
              <CheckCircle className="w-6 h-6 text-gold" strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-gold font-serif mb-2 tracking-wide text-sm">HANDCRAFTED FINISHING</h4>
              <p className="text-xs leading-relaxed">Meticulously handcrafted by master artisans using premium materials and time-honoured techniques.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 border border-border-gold rounded-full shrink-0">
              <Package className="w-6 h-6 text-gold" strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-gold font-serif mb-2 tracking-wide text-sm">BESPOKE BY DESIGN</h4>
              <p className="text-xs leading-relaxed">Personalized dimensions, finishes and details to complement your vision and space.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 border border-border-gold rounded-full shrink-0">
              <Globe className="w-6 h-6 text-gold" strokeWidth={1} />
            </div>
            <div>
              <h4 className="text-gold font-serif mb-2 tracking-wide text-sm">WHITE-GLOVE DELIVERY</h4>
              <p className="text-xs leading-relaxed">Insured, secure and globally delivered with the highest standard of care and discretion.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image src="/KALVÉ__Art_Made_Rare-removebg-preview.png" alt="KALVÉ Logo" width={280} height={180} className="object-contain w-auto h-32 scale-125 origin-left" />
            </Link>
            <p className="text-sm max-w-sm mb-6 leading-relaxed">
              Collectible art made with intention. Curated expressions of craftsmanship and rare materials.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-gold tracking-widest text-sm mb-6 uppercase">Collections</h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li><Link href="/chess" className="hover:text-gold transition-colors">Chessboards</Link></li>
              <li><Link href="/basins" className="hover:text-gold transition-colors">Statement Basins</Link></li>
              <li><Link href="/tables" className="hover:text-gold transition-colors">Tables & Consoles</Link></li>
              <li><Link href="/wall-art" className="hover:text-gold transition-colors">Wall Art & Clocks</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold tracking-widest text-sm mb-6 uppercase">Client Services</h3>
            <ul className="space-y-3 text-xs tracking-wider">
              <li><Link href="/consultation" className="hover:text-gold transition-colors">Book Consultation</Link></li>
              <li><Link href="/bespoke" className="hover:text-gold transition-colors">Bespoke Inquiries</Link></li>
              <li><Link href="/shipping" className="hover:text-gold transition-colors">Shipping & Returns</Link></li>
              <li><Link href="/care" className="hover:text-gold transition-colors">Product Care</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border-gold flex flex-col md:flex-row justify-between items-center text-xs tracking-wider">
          <p>© 2026 KALVÉ. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
