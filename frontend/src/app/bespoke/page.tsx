import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BespokePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="/Opulent Blue and Gold Marble Coffee Table.png"
          alt="Bespoke Design"
          fill
          className="object-cover opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide text-gold">
            BESPOKE COMMISSIONS
          </h1>
          <p className="text-sm md:text-base text-gold-dim tracking-widest uppercase mb-10 max-w-2xl mx-auto leading-relaxed">
            Elevate your space with a one-of-a-kind masterpiece. Designed to your exact specifications, handcrafted by master artisans.
          </p>
          <button className="bg-gold hover:bg-white text-black px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-500 font-semibold">
            Request a Consultation
          </button>
        </div>
      </section>

      {/* The Process */}
      <section className="container mx-auto px-6 py-24 md:py-32 border-b border-border-gold">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide">THE ATELIER PROCESS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="text-center">
            <span className="text-4xl font-serif text-gold-dim mb-6 block">01</span>
            <h3 className="text-lg uppercase tracking-widest mb-4">Vision & Consultation</h3>
            <p className="text-gold-dim text-sm leading-relaxed">
              We begin with a private consultation to understand your vision, space, and aesthetic preferences. Our designers will present initial concepts and material selections.
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-serif text-gold-dim mb-6 block">02</span>
            <h3 className="text-lg uppercase tracking-widest mb-4">Design & Rendering</h3>
            <p className="text-gold-dim text-sm leading-relaxed">
              You will receive highly detailed 3D renderings of your piece. We refine the design together until every curve, facet, and gold vein is perfect.
            </p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-serif text-gold-dim mb-6 block">03</span>
            <h3 className="text-lg uppercase tracking-widest mb-4">Master Craftsmanship</h3>
            <p className="text-gold-dim text-sm leading-relaxed">
              Our master artisans bring the design to life over 8-12 weeks, meticulously pouring resin, laying gold leaf, and hand-polishing the final masterpiece.
            </p>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="container mx-auto px-6 py-24 md:py-32 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide mb-4">COMMISSION AN ARTWORK</h2>
          <p className="text-gold-dim text-sm tracking-wider">
            Begin the journey of creating your exclusive piece. Our head of design will contact you within 24 hours.
          </p>
        </div>
        
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xs tracking-widest text-gold-dim mb-3 uppercase">Full Name</label>
              <input type="text" className="w-full bg-transparent border-b border-border-gold pb-2 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-gold-dim mb-3 uppercase">Email Address</label>
              <input type="email" className="w-full bg-transparent border-b border-border-gold pb-2 text-white focus:outline-none focus:border-gold transition-colors text-sm" placeholder="contact@example.com" />
            </div>
          </div>
          
          <div>
            <label className="block text-xs tracking-widest text-gold-dim mb-3 uppercase">Project Category</label>
            <select className="w-full bg-[#0a0a0a] border-b border-border-gold pb-2 text-white focus:outline-none focus:border-gold transition-colors text-sm cursor-pointer appearance-none">
              <option>Custom Chessboard</option>
              <option>Bespoke Table</option>
              <option>Sculptural Basin</option>
              <option>Wall Art Installation</option>
              <option>Full Interior Commission</option>
            </select>
          </div>
          
          <div>
            <label className="block text-xs tracking-widest text-gold-dim mb-3 uppercase">Project Details & Vision</label>
            <textarea rows={5} className="w-full bg-transparent border-b border-border-gold pb-2 text-white focus:outline-none focus:border-gold transition-colors text-sm resize-none" placeholder="Describe the materials, dimensions, and aesthetic you envision..." />
          </div>
          
          <div className="pt-8 text-center">
            <button type="button" className="group flex items-center justify-center gap-3 w-full md:w-auto md:px-16 mx-auto py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-500 text-xs tracking-widest uppercase">
              Submit Inquiry
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
