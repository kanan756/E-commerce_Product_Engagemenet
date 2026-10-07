import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-gray-200 max-w-[1600px] mx-auto">
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex flex-col justify-center border-b border-border-gold overflow-hidden bg-[#050505]">
        {/* Full-width Background Image */}
        <div className="absolute inset-0 bg-[url('/Luxury%20Black-and-Gold%20Executive%20Desk.png')] bg-cover bg-[center_top] opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/50 z-0" />
        
        {/* Left Content */}
        <div className="px-6 md:px-16 py-20 z-10 relative max-w-3xl">
          <p className="text-gold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-8 font-medium">Connect with our atelier.</p>
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Private Commissions.</h1>
          <h2 className="text-2xl md:text-3xl font-serif text-gold italic mb-8">Enquire. Collaborate. Create.</h2>
          <p className="text-white text-sm leading-relaxed max-w-lg mb-12">
            Whether you seek to acquire a signature piece or commission a bespoke creation tailored to your space, our design team is at your disposal.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-6 md:px-16 py-20 flex flex-col lg:flex-row gap-16 border-b border-border-gold bg-[#080808]">
        
        {/* Contact Form */}
        <div className="flex-1">
          <h3 className="text-gold tracking-[0.2em] text-xs uppercase font-medium mb-8">Send an Enquiry</h3>
          
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase text-gray-500">First Name</label>
                <input type="text" className="bg-[#050505] border border-border-gold/30 p-4 text-sm focus:border-gold outline-none transition-colors text-white" placeholder="" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase text-gray-500">Last Name</label>
                <input type="text" className="bg-[#050505] border border-border-gold/30 p-4 text-sm focus:border-gold outline-none transition-colors text-white" placeholder="" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase text-gray-500">Email Address</label>
                <input type="email" className="bg-[#050505] border border-border-gold/30 p-4 text-sm focus:border-gold outline-none transition-colors text-white" placeholder="" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-widest uppercase text-gray-500">Phone (Optional)</label>
                <input type="tel" className="bg-[#050505] border border-border-gold/30 p-4 text-sm focus:border-gold outline-none transition-colors text-white" placeholder="" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-gray-500">Nature of Enquiry</label>
              <select className="bg-[#050505] border border-border-gold/30 p-4 text-sm focus:border-gold outline-none transition-colors text-gray-400 appearance-none rounded-none">
                <option>Signature Collection Purchase</option>
                <option>Bespoke Commission</option>
                <option>Interior Design Partnership</option>
                <option>Press & Media</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] tracking-widest uppercase text-gray-500">Message</label>
              <textarea rows={5} className="bg-[#050505] border border-border-gold/30 p-4 text-sm focus:border-gold outline-none transition-colors text-white resize-none" placeholder=""></textarea>
            </div>

            <button type="button" className="border border-gold text-black bg-gold px-8 py-4 text-xs tracking-widest uppercase hover:bg-transparent hover:text-gold transition-colors flex items-center justify-center gap-3 w-max mt-4">
              Submit Enquiry <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="lg:w-1/3 flex flex-col gap-12">
          
          <div>
            <h3 className="text-gold tracking-[0.2em] text-xs uppercase font-medium mb-6 border-b border-border-gold/30 pb-4">Our Atelier</h3>
            <div className="flex flex-col gap-6 text-sm text-gray-400">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <br />
                  <br />
                  <br />
                  <span className="text-[10px] uppercase tracking-widest text-gold mt-2 block">By Appointment Only</span>
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <p></p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <p></p>
              </div>
            </div>
          </div>

          <div className="bg-[#050505] p-8 border border-border-gold/20">
            <h4 className="font-serif text-2xl text-white mb-4">Trade & Partnerships</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-6">
              We collaborate intimately with leading architects, interior designers, and luxury developers worldwide. Connect with our dedicated trade team to discuss your project requirements.
            </p>
            <button className="border-b border-gold text-gold pb-1 text-[10px] tracking-widest uppercase hover:text-white hover:border-white transition-colors">
              Apply for Trade Account
            </button>
          </div>

        </div>

      </section>

    </div>
  );
}
