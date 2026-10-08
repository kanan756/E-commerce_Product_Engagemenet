import { products } from "@/lib/data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return [
    { category: 'collections' },
    { category: 'chess' },
    { category: 'tables' },
    { category: 'basins' },
    { category: 'wall-art' },
  ];
}

export const instant = false;

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const decodedCategory = decodeURIComponent(resolvedParams.category).replace("-", " ").toLowerCase();
  
  // Filter products by category, or show all if "collections"
  const categoryProducts = decodedCategory === "collections" 
    ? products 
    : products.filter(p => p.category.toLowerCase() === decodedCategory);

  // If no products match, we can just show a "Coming Soon" or empty state.
  const displayTitle = resolvedParams.category.replace("-", " ");

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Category Hero */}
      <section className="py-20 px-6 border-b border-border-gold flex flex-col items-center justify-center text-center">
        <p className="text-gold uppercase tracking-widest text-xs mb-4 font-semibold">
          Curated Selection
        </p>
        <h1 className="text-5xl md:text-6xl font-serif text-foreground uppercase tracking-wider mb-6">
          {displayTitle}
        </h1>
        <p className="text-gold-dim text-sm max-w-xl mx-auto leading-relaxed">
          Explore our exclusive collection of handcrafted {displayTitle.toLowerCase()}. Each piece is a singular expression of artistry and refinement.
        </p>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 border-b border-border-gold flex items-center gap-2 text-xs text-gold-dim tracking-widest uppercase">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gold">{displayTitle}</span>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto py-12">
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-border-gold">
            {categoryProducts.map((product) => (
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
        ) : (
          <div className="text-center py-32">
            <h2 className="font-serif text-2xl text-gold mb-4">Private Collection Unavailable</h2>
            <p className="text-gold-dim text-sm max-w-md mx-auto">
              Our {displayTitle} collection is currently only available for private viewing or is in production. 
              Please register your interest or contact our curation team.
            </p>
            <button className="mt-8 px-8 py-3 border border-border-gold text-gold font-serif tracking-widest text-xs uppercase hover:bg-gold/10 transition-colors">
              Request Private Access
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
