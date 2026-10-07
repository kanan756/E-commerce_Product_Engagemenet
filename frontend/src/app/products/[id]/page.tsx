import { products } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Heart, Scale, Bell, MessageSquare, Calendar, ShieldCheck, Mail } from "lucide-react";

export function generateStaticParams() {
  return products.map((p) => ({
    id: p.id,
  }));
}

export const instant = false;

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a]">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4 border-b border-border-gold flex items-center gap-2 text-xs text-gold-dim tracking-widest uppercase">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={`/${product.category.toLowerCase()}`} className="hover:text-gold transition-colors">{product.category}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gold">{product.name}</span>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-border-gold">
        {/* Left: Images */}
        <div className="flex flex-col gap-6">
          <div className="aspect-square bg-[#111111] border border-border-gold overflow-hidden relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Right: Details & Engagement Engine Actions */}
        <div className="flex flex-col">
          <p className="text-gold uppercase tracking-widest text-xs mb-4 font-semibold">
            {product.collection}
          </p>
          <h1 className="text-4xl lg:text-5xl font-serif text-[#f4ecd8] leading-tight mb-6 uppercase tracking-wider">
            {product.name}
          </h1>
          <p className="text-2xl text-gold font-light mb-8 font-serif">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          
          <p className="text-gold-dim text-sm leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12 py-8 border-y border-border-gold/50 text-xs">
            <div>
              <span className="block text-gold-dim uppercase tracking-widest mb-1">Dimensions</span>
              <span className="text-[#f4ecd8]">{product.dimensions}</span>
            </div>
            <div>
              <span className="block text-gold-dim uppercase tracking-widest mb-1">Material</span>
              <span className="text-[#f4ecd8]">{product.material}</span>
            </div>
            <div>
              <span className="block text-gold-dim uppercase tracking-widest mb-1">Finish</span>
              <span className="text-[#f4ecd8]">{product.finish}</span>
            </div>
            <div>
              <span className="block text-gold-dim uppercase tracking-widest mb-1">Availability</span>
              <span className="text-[#f4ecd8]">Made to Order (8-12 weeks)</span>
            </div>
          </div>

          {/* Core Engagement Actions */}
          <div className="flex flex-col gap-4 mb-12">
            <button className="w-full py-4 bg-gold text-[#0a0a0a] font-serif tracking-widest text-sm uppercase hover:bg-[#e0b985] transition-colors flex justify-center items-center gap-2">
              <Mail className="w-4 h-4" /> Private Enquiry
            </button>
            <div className="grid grid-cols-2 gap-4">
              <button className="w-full py-3 border border-border-gold text-gold font-serif tracking-widest text-xs uppercase hover:bg-gold/10 transition-colors flex justify-center items-center gap-2">
                <Heart className="w-4 h-4" /> Wishlist
              </button>
              <button className="w-full py-3 border border-border-gold text-gold font-serif tracking-widest text-xs uppercase hover:bg-gold/10 transition-colors flex justify-center items-center gap-2">
                <Scale className="w-4 h-4" /> Compare
              </button>
            </div>
          </div>

          {/* Secondary Engagement Drivers */}
          <div className="space-y-4">
            <button className="flex items-center gap-4 p-4 border border-border-gold/30 hover:border-gold transition-colors w-full text-left group">
              <div className="p-2 border border-border-gold rounded-full group-hover:bg-gold/10 transition-colors">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-[#f4ecd8] text-sm tracking-wide font-serif">Book a Design Consultation</h4>
                <p className="text-gold-dim text-xs mt-1">Speak with our curation specialists</p>
              </div>
            </button>
            <button className="flex items-center gap-4 p-4 border border-border-gold/30 hover:border-gold transition-colors w-full text-left group">
              <div className="p-2 border border-border-gold rounded-full group-hover:bg-gold/10 transition-colors">
                <Bell className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-[#f4ecd8] text-sm tracking-wide font-serif">Set Release Alerts</h4>
                <p className="text-gold-dim text-xs mt-1">Get notified of similar private collections</p>
              </div>
            </button>
            <button className="flex items-center gap-4 p-4 border border-border-gold/30 hover:border-gold transition-colors w-full text-left group">
              <div className="p-2 border border-border-gold rounded-full group-hover:bg-gold/10 transition-colors">
                <MessageSquare className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="text-[#f4ecd8] text-sm tracking-wide font-serif">Live Artisan Chat</h4>
                <p className="text-gold-dim text-xs mt-1">Discuss custom dimensions and materials</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Recommended/Similar Products */}
      <section className="container mx-auto px-6 py-20 border-b border-border-gold">
        <h2 className="text-center font-serif text-2xl text-[#f4ecd8] tracking-widest uppercase mb-12">
          Curated For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.filter(p => p.id !== product.id).slice(0, 3).map((related) => (
             <Link key={related.id} href={`/products/${related.id}`} className="group block">
               <div className="aspect-square bg-[#111111] border border-border-gold mb-6 relative overflow-hidden">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                   src={related.image} 
                   alt={related.name}
                   className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                 />
               </div>
               <h3 className="font-serif text-gold text-sm tracking-wider uppercase mb-1">
                 {related.name}
               </h3>
               <p className="text-gold-dim text-xs italic">
                 {related.collection}
               </p>
             </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
