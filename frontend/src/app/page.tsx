"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { products } from "@/lib/data";
import { ChevronRight, LayoutGrid, Crown, Target, Table, Image as ImageIcon, Diamond, FileBadge } from "lucide-react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All Pieces");
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const heroImages = [
    "/Sink  Blue and Gold.png",
    "/Luxe Blue and Gold Crystal Chessboard.png",
    "/Opulent Blue and Gold Marble Coffee Table.png",
    "/Sapphire Geode Crystal Wall Clock.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: "All Pieces", icon: LayoutGrid },
    { name: "Chess", icon: Crown },
    { name: "Basins", icon: Target },
    { name: "Tables", icon: Table },
    { name: "Wall Art", icon: ImageIcon },
    { name: "Bespoke", icon: Diamond },
  ];

  const themes = ["Black Gold", "Pink White", "Blue Gold", "Black Premium", "Red White", "Green"];

  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === "All Pieces" || product.category === activeCategory;
    const themeMatch = !activeTheme || product.theme === activeTheme;
    return categoryMatch && themeMatch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-20 border-b border-border-gold overflow-hidden">
        {/* Background Subtle Image Slider */}
        <div
          className="absolute inset-0 bg-cover bg-right opacity-80 z-0 transition-all duration-1000 ease-in-out"
          style={{ backgroundImage: `url('${heroImages[heroImageIndex]}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-10" />

        <div className="relative z-20 max-w-2xl">
          <p className="text-gold uppercase tracking-widest text-xs mb-6 font-semibold">
            Collectible Art. Made with Intention.
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-4">
            Collections
            <br />
            <span className="italic text-gold font-light">Rarity. Design. Legacy.</span>
          </h1>
          <p className="text-foreground text-sm leading-relaxed max-w-md mt-6">
            Curated expressions of craftsmanship and rare materials. Each piece is conceived to be timeless, distinctive, and eternally collected.
          </p>
        </div>
      </section>

      {/* Categories Navigation Bar */}
      <div className="border-b border-border-gold bg-background sticky top-28 z-40">
        <div className="container mx-auto px-4 overflow-x-auto">
          <ul className="flex items-center min-w-max w-full justify-between">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <li
                  key={cat.name}
                  onClick={() => { setActiveCategory(cat.name); setActiveTheme(null); }}
                  className={`flex-1 flex flex-col items-center justify-center py-4 ${isActive ? 'border-b-2 border-gold text-gold' : 'text-gold-dim hover:text-gold'} font-serif tracking-widest text-xs uppercase cursor-pointer ${idx !== 0 ? 'border-l border-border-gold/50' : ''} transition-colors`}
                >
                  <Icon className="w-5 h-5 mb-2 opacity-80" strokeWidth={1} />
                  <span>{cat.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Themes Filter */}
      <section className="container mx-auto px-6 py-8 border-b border-border-gold flex flex-wrap items-center gap-6">
        <span className="text-gold-dim text-xs tracking-widest uppercase font-serif">Order by Theme</span>
        <div className="h-[1px] w-12 bg-border-gold" />
        <div className="flex flex-wrap gap-6">
          {themes.map((theme, i) => {
            const isThemeActive = activeTheme === theme;
            return (
              <div 
                key={theme} 
                onClick={() => setActiveTheme(isThemeActive ? null : theme)}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className={`w-6 h-6 rounded-full border ${isThemeActive ? 'border-gold' : 'border-border-gold'} bg-gradient-to-br ${i === 0 ? 'from-black to-yellow-900' : i === 1 ? 'from-pink-200 to-white' : i === 2 ? 'from-blue-900 to-yellow-600' : i === 3 ? 'from-gray-900 to-black' : i === 4 ? 'from-red-800 to-white' : 'from-emerald-900 to-green-600'} group-hover:scale-110 transition-transform`} />
                <span className={`text-xs uppercase tracking-widest transition-colors ${isThemeActive ? 'text-gold' : 'text-gold-dim group-hover:text-gold'}`}>{theme}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto min-h-[50vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-border-gold">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group border-r border-b border-border-gold p-6 flex flex-col bg-background hover:bg-card transition-colors">
              <Link href={`/products/${product.id}`} className="block relative aspect-square mb-6 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </Link>

              <div className="flex-1 flex flex-col">
                <h3 className="font-serif text-gold text-sm tracking-wider uppercase mb-1">
                  {product.name}
                </h3>
                <p className="text-gold-dim text-xs italic mb-4">
                  {product.collection}
                </p>

                <div className="mt-auto pt-4 flex flex-col gap-2 text-xs text-gold-dim">
                  <p>{product.dimensions}</p>
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-6 w-full py-3 border border-border-gold text-center text-gold text-xs tracking-widest uppercase hover:bg-gold/10 transition-colors flex items-center justify-center gap-2 group-hover:border-gold"
                >
                  Discover <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Engagement Prompts (KALVE style) */}
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row border-b border-border-gold gap-8 md:gap-0">

        {/* Column 1 */}
        <div className="flex-1 flex items-start gap-4 md:border-r border-border-gold md:pr-12">
          <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center shrink-0">
            <Diamond className="w-6 h-6 text-gold" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-serif text-gold tracking-widest text-sm uppercase mb-3">Limited Editions</h3>
            <p className="text-xs text-gold-dim leading-relaxed mb-4 max-w-[200px]">
              Each collection is limited and individually numbered. Crafted to be rare. Designed to endure.
            </p>

          </div>
        </div>

        {/* Column 2 */}
        <div className="flex-[1.5] flex flex-col md:border-r border-border-gold md:px-12">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="font-serif text-gold tracking-widest text-sm uppercase">Order by Theme</h3>
            <div className="flex items-center gap-2">
              {themes.map((theme, i) => {
                const isActive = activeTheme === theme;
                return (
                  <div
                    key={theme}
                    onClick={() => setActiveTheme(isActive ? null : theme)}
                    className={`w-6 h-6 rounded-full border ${isActive ? 'border-gold scale-125' : 'border-border-gold'} bg-gradient-to-br ${i === 0 ? 'from-black to-yellow-900' : i === 1 ? 'from-pink-200 to-white' : i === 2 ? 'from-blue-900 to-yellow-600' : i === 3 ? 'from-gray-900 to-black' : i === 4 ? 'from-red-800 to-white' : 'from-emerald-900 to-green-600'} cursor-pointer hover:scale-110 transition-all`}
                    title={theme}
                  />
                );
              })}
            </div>
          </div>
          <p className="text-xs text-gold-dim leading-relaxed mb-4 max-w-[250px]">
            Explore our collections by signature themes and material expressions.
          </p>

        </div>

        {/* Column 3 */}
        <div className="flex-1 flex items-start gap-4 md:pl-12">
          <div className="w-14 h-14 rounded-full border border-gold flex items-center justify-center shrink-0">
            <FileBadge className="w-6 h-6 text-gold" strokeWidth={1} />
          </div>
          <div>
            <h3 className="font-serif text-gold tracking-widest text-sm uppercase mb-3">Limited Release Notes</h3>
            <p className="text-xs text-gold-dim leading-relaxed mb-4 max-w-[200px]">
              New collections are released in small, curated batches. Register your interest for early access.
            </p>

          </div>
        </div>
      </section>

    </div>
  );
}
