import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TablesPage() {
  const pieces = [
    { name: "HERITAGE CAR TABLE", col: "Collector's Suite", dim: "Ø 90 × 45 cm", mat: "Resin & Display Models", fin: "High-Gloss Crystal", color: "from-[#111] to-yellow-900", image: "/Luxury Model Car Showcase Table.png" },
    { name: "OBSIDIAN GOLD TABLE", col: "Private Collection", dim: "Ø 90 × 45 cm", mat: "Resin & Black Marble", fin: "Gold Veined Polish", color: "from-[#111] to-black", image: "/Gold-Veined Black Marble Table.png" },
    { name: "OPULENT BLUE GOLD TABLE", col: "Cosmic Collection", dim: "Ø 90 × 45 cm", mat: "Resin & Blue Marble", fin: "Gold Veined Polish", color: "from-blue-900 to-black", image: "/Opulent Blue and Gold Marble Coffee Table.png" }
  ];

  const themes = [
    { name: "BLACK GOLD", desc: "Bold, dramatic and opulent.", color: "from-black to-yellow-900" },
    { name: "PINK WHITE", desc: "Soft, elegant and timeless.", color: "from-pink-200 to-white" },
    { name: "BLUE GOLD", desc: "Rich, regal and refined.", color: "from-blue-900 to-yellow-600" },
    { name: "BLACK PREMIUM", desc: "Understated luxury in deep tones.", color: "from-gray-900 to-black" },
    { name: "RED WHITE", desc: "Vibrant, artistic and expressive.", color: "from-red-800 to-white" },
    { name: "GREEN", desc: "Organic, serene and refreshing.", color: "from-emerald-900 to-green-600" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground max-w-[1600px] mx-auto">

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col justify-center border-b border-border-gold overflow-hidden bg-background">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 bg-[url('/Opulent%20Blue%20and%20Gold%20Marble%20Coffee%20Table.png')] bg-cover bg-[center_right] z-0" />
        
        {/* Smooth Seamless Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-background from-30% via-background/80 via-50% to-transparent to-70% z-10" />

        {/* Left Content */}
        <div className="relative z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 max-w-3xl">
          <p className="text-gold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-8 font-medium">Bespoke Furniture. For extraordinary spaces.</p>
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-4">Signature Tables.</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-gold italic mb-8">Gather. Dine. Unmistakably Rare.</h2>
          <p className="text-foreground/80 text-sm md:text-[15px] leading-relaxed max-w-xl mb-12">
            Each KALVÉ table is a singular expression of artistry — blending premium resin with exquisite materials to create breathtaking centerpieces that anchor your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="border border-gold text-gold px-8 py-4 text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-colors flex items-center justify-center gap-3 w-max">
              Request Details <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-border-gold/30 bg-card text-gold px-8 py-4 text-xs tracking-widest uppercase hover:border-gold transition-colors flex items-center justify-center w-max">
              Book Design Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Signature Pieces */}
      <section className="px-6 md:px-12 py-20 border-b border-border-gold bg-background">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-gold tracking-[0.2em] text-xs uppercase font-medium whitespace-nowrap">Our Signature Tables</h3>
          <div className="h-px bg-border-gold/50 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pieces.map((piece) => (
            <div key={piece.name} className="border border-border-gold/30 p-6 bg-background flex flex-col group hover:border-gold transition-colors">
              {/* Piece Image or Simulation */}
              <div className="flex items-center justify-center mb-6 w-full relative overflow-hidden rounded-sm bg-black/20 aspect-[4/3]">
                {piece.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={piece.image} alt={piece.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                ) : (
                  <div className={`w-[90%] h-[70%] rounded-md bg-gradient-to-br ${piece.color} shadow-[inset_0_-10px_20px_rgba(0,0,0,0.8)] border border-white/10 group-hover:scale-105 transition-transform duration-500 relative`}>
                    <div className="absolute inset-x-4 top-4 bottom-4 border border-gold/20"></div>
                  </div>
                )}
              </div>

              <h4 className="text-gold text-[11px] tracking-widest uppercase mb-1 h-8">{piece.name}</h4>
              <p className="text-foreground/60 text-[10px] mb-8">{piece.col}</p>

              <div className="flex flex-col gap-2 mb-8 border-t border-border-gold/20 pt-4">
                <div className="grid grid-cols-5 gap-2 text-[10px]">
                  <span className="col-span-2 text-foreground/60">Dimensions</span>
                  <span className="col-span-3 text-foreground">{piece.dim}</span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-[10px]">
                  <span className="col-span-2 text-foreground/60">Material</span>
                  <span className="col-span-3 text-foreground">{piece.mat}</span>
                </div>
                <div className="grid grid-cols-5 gap-2 text-[10px]">
                  <span className="col-span-2 text-foreground/60">Finish</span>
                  <span className="col-span-3 text-foreground">{piece.fin}</span>
                </div>
              </div>

              <button className="mt-auto border border-border-gold/50 text-gold text-[10px] tracking-widest uppercase py-3 flex items-center justify-center gap-3 hover:bg-gold hover:text-black transition-colors w-full">
                Private Enquiry <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Curated by Theme Section */}
      <section className="px-6 md:px-12 py-20 border-b border-border-gold">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 border-r border-border-gold/20 pr-8">
            <h3 className="text-gold tracking-widest text-sm uppercase mb-4">Curated by Theme. Customized by you.</h3>
            <p className="text-foreground/80 text-xs leading-relaxed mb-8">
              From river table flow to dining dimensions — each table can be tailored to your vision. Choose a theme or collaborate with our design team to create an heirloom truly one-of-one.
            </p>
            <button className="border border-border-gold text-gold px-6 py-3 text-[10px] tracking-widest uppercase hover:bg-gold/10 transition-colors flex items-center gap-3">
              Explore Custom Options <ArrowRight className="w-3 h-3" />
            </button>
          </div>
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {themes.map((theme) => (
              <div key={theme.name} className="flex flex-col items-center text-center group cursor-pointer">
                <div className={`w-20 h-20 rounded-full mb-6 border border-border-gold bg-gradient-to-br ${theme.color} shadow-inner group-hover:scale-110 transition-transform duration-300`}></div>
                <h4 className="text-gold text-[10px] tracking-widest uppercase mb-2">{theme.name}</h4>
                <p className="text-foreground/60 text-[10px] leading-relaxed max-w-[100px]">{theme.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
