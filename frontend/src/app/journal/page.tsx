import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "THE ART OF KINTSUGI IN MODERN LUXURY",
    category: "Design Philosophy",
    date: "OCTOBER 12, 2026",
    image: "/Opulent Black and Gold Chessboard.png",
    excerpt: "Exploring how ancient Japanese philosophies of repairing broken pottery with gold inspire our most sought-after black and gold resin masterpieces.",
  },
  {
    id: 2,
    title: "STYLING CRYSTAL BASINS FOR MINIMALIST SPACES",
    category: "Interior Guides",
    date: "SEPTEMBER 28, 2026",
    image: "/Emerald Crystal Basin on Marble Vanity.png",
    excerpt: "A comprehensive guide on integrating dramatic, raw crystal textures into sleek, contemporary bathroom architectures.",
  },
  {
    id: 3,
    title: "BEHIND THE ATELIER: THE 12-WEEK RESIN POUR",
    category: "Craftsmanship",
    date: "SEPTEMBER 15, 2026",
    image: "/Opulent Blue and Gold Marble Coffee Table.png",
    excerpt: "Step inside the KALVÉ workshop to witness the painstaking, multi-layered resin pouring process that creates our signature deep-ocean depth.",
  }
];

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-b border-border-gold">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide text-foreground">
            THE JOURNAL
          </h1>
          <p className="text-sm md:text-base text-gold-dim tracking-widest uppercase leading-relaxed">
            Editorials, design philosophies, and an exclusive look inside the KALVÉ atelier.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24 border-b border-border-gold">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[4/3] w-full group overflow-hidden">
            <Image
              src="/Luxe Blue and Gold Crystal Chessboard.png"
              alt="Featured Article"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-gold text-xs tracking-widest uppercase mb-4 block">Featured Editorial</span>
            <h2 className="text-3xl md:text-4xl font-serif tracking-wide mb-6">
              THE RENAISSANCE OF THE CHESSBOARD
            </h2>
            <p className="text-gold-dim text-sm leading-relaxed mb-10">
              How a strategic game from antiquity transformed into the ultimate centerpiece of modern luxury living rooms. We dive into the architectural significance of our crystal and gold leaf chess sets.
            </p>
            <Link href="/journal" className="group flex items-center gap-3 text-gold text-xs tracking-widest uppercase hover:text-foreground transition-colors duration-500 w-max">
              Read the Editorial
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-8 md:px-16 lg:px-24 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative aspect-square w-full mb-8 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gold text-xs tracking-widest uppercase">{article.category}</span>
                <span className="text-gold-dim text-[10px] tracking-widest uppercase">{article.date}</span>
              </div>
              <h3 className="text-lg md:text-xl font-serif tracking-wide mb-4 group-hover:text-gold transition-colors duration-300">
                {article.title}
              </h3>
              <p className="text-gold-dim text-xs leading-relaxed">
                {article.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
