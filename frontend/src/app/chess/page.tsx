import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ChessPage() {
  const pieces = [
    { name: "LUXE BLUE & GOLD CHESSBOARD", col: "Private Collection", dim: "60 × 60 × 8 cm", mat: "Resin & Gold Leaf", fin: "High-Gloss Crystal", color: "from-blue-900 to-yellow-600", image: "/Luxe Blue and Gold Crystal Chessboard.png" },
    { name: "OPULENT BLACK & GOLD CHESSBOARD", col: "Obsidian Collection", dim: "60 × 60 × 8 cm", mat: "Resin & Gold Dust", fin: "Crystal Clear", color: "from-[#111] to-yellow-900", image: "/Opulent Black and Gold Chessboard.png" },
    { name: "EMERALD & OBSIDIAN CHESSBOARD", col: "Botanical Collection", dim: "60 × 60 × 8 cm", mat: "Resin & Obsidian", fin: "Deep Gloss", color: "from-emerald-900 to-black", image: "/Emerald and Obsidian Chessboard.png" },
    { name: "ROSE QUARTZ CHESS ELEGANCE", col: "Artisan Collection", dim: "60 × 60 × 8 cm", mat: "Resin & Rose Gold", fin: "Textured Matte", color: "from-pink-900 to-rose-400", image: "/Rose Quartz and Ivory Chess Elegance.png" },
    { name: "CRYSTAL CHESS ON BLACK MARBLE", col: "Timeless Collection", dim: "60 × 60 × 8 cm", mat: "Resin & Marble Dust", fin: "Smooth Polish", color: "from-gray-300 to-black", image: "/Crystal Chess on Black Marble.png" }
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
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-border-gold bg-background">
        {/* Left Column: Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 order-2 lg:order-1">
          <p className="text-gold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-8 font-medium">Strategic Art. For extraordinary spaces.</p>
          <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-4">Masterpiece Chess.</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-gold italic mb-8">Tactical. Beautiful. Unmistakably Rare.</h2>
          <p className="text-foreground/80 text-sm md:text-[15px] leading-relaxed max-w-xl mb-12">
            Each KALVÉ chess set is a singular expression of artistry — sculpted in premium resin and meticulously weighted, transforming the game of kings into a breathtaking centerpiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button className="border border-gold text-gold px-8 py-4 text-xs tracking-widest uppercase hover:bg-gold hover:text-black transition-colors flex items-center justify-center gap-3">
              Request Details <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-border-gold/30 bg-card text-gold px-8 py-4 text-xs tracking-widest uppercase hover:border-gold transition-colors flex items-center justify-center">
              Book Design Consultation
            </button>
          </div>
        </div>
        
        {/* Right Column: Image */}
        <div className="relative w-full min-h-[50vh] lg:min-h-full bg-[url('/Luxe%20Blue%20and%20Gold%20Crystal%20Chessboard.png')] bg-cover bg-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-border-gold" />
      </section>

      {/* Signature Pieces */}
      <section className="px-6 md:px-12 py-20 border-b border-border-gold bg-background">
        <div className="flex items-center gap-4 mb-12">
          <h3 className="text-gold tracking-[0.2em] text-xs uppercase font-medium whitespace-nowrap">Our Signature Chess Sets</h3>
          <div className="h-px bg-border-gold/50 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {pieces.map((piece) => (
            <div key={piece.name} className="border border-border-gold/30 p-6 bg-background flex flex-col group hover:border-gold transition-colors">
              {/* Piece Image or Simulation */}
              <div className="flex items-center justify-center mb-6 w-full relative overflow-hidden rounded-sm bg-black/20 aspect-[4/3]">
                {piece.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={piece.image} alt={piece.name} className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                ) : (
                  <div className={`w-[90%] h-[90%] bg-gradient-to-br ${piece.color} shadow-[inset_0_-10px_20px_rgba(0,0,0,0.8)] border border-white/10 group-hover:scale-105 transition-transform duration-500 relative`}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-sm border border-gold/50 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gold/50 blur-[1px]"></div>
                    </div>
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
              From piece weighting to board detailing — each chess set can be tailored to your vision. Choose a theme or collaborate with our design team to create an heirloom truly one-of-one.
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
