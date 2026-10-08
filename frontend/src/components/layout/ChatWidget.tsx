"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, ChevronDown } from "lucide-react";
import { products } from "@/lib/data";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "concierge", text: "Welcome to KALVÉ. I am your Private Concierge. I am here to assist you in finding the perfect masterpiece or answering any bespoke inquiries. How may I assist you today?" }
  ]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (query: string, history: any[]) => {
    const lowerQuery = query.toLowerCase();
    const lastBotMessage = history.length > 0 ? history[history.length - 1].text : "";
    
    // 1. Email Capture (Conversion)
    if (lowerQuery.includes("@") && lowerQuery.includes(".")) {
      if (lastBotMessage.includes("email address")) {
        return "Thank you. I have securely saved your contact details. A senior styling director will reach out to you at that address within the hour to assist you further.";
      }
      return "Thank you for providing your email. I will have a concierge team member follow up with you shortly.";
    }

    // Context-aware response for "yes" / "no"
    if (/^(yes|yeah|sure|yep|please|i would|definitely)$/i.test(lowerQuery.trim())) {
      if (lastBotMessage.includes("email address")) return "Please type your email address below.";
      return "Excellent. Could you please provide your best email address so our styling director can reach out to you?";
    }
    if (/^(no|not right now|nope)$/i.test(lowerQuery.trim())) {
      return "Not a problem at all. Please let me know if you have any other questions about our collections, bespoke services, or shipping.";
    }

    // 2. Interior / Styling Advice
    if (/(recommend|living room|office|hotel|lobby|dining room|help me choose|statement piece|minimal|modern interior)/i.test(lowerQuery)) {
      return "I'd be delighted to help you find the perfect statement piece. May I know whether you prefer a darker, more dramatic aesthetic (like our Black Gold collection) or something more vibrant and crystalline? Or would you prefer to book a private design consultation?";
    }

    // 3. Customization / Bespoke
    if (/(custom|bespoke|different size|choose the material|make something based on my design|different color|can i customize)/i.test(lowerQuery)) {
      return "We specialize in 1-of-1 bespoke commissions. Our master artisans can tailor dimensions, resin hues, and gold detailing to perfectly match your architectural vision. The process takes 8-12 weeks. Would you like to speak to a designer to start a commission?";
    }

    // 4. Shipping & Delivery
    if (/(ship|delivery|india|internationally|countries|how long does delivery|white-glove|package)/i.test(lowerQuery)) {
      return "We offer secure, white-glove international shipping via private courier to anywhere in the world, including India. Each piece is crated in custom-built wooden casing and fully insured. Delivery typically takes 2-3 weeks for ready pieces. Shall I arrange a shipping quote for a specific item?";
    }

    // 5. Craftsmanship & Materials
    if (/(handmade|who makes|where are they made|what materials|craftsmanship|techniques|unique)/i.test(lowerQuery)) {
      return "Every KALVÉ piece is entirely handmade by master artisans in our private atelier. We use premium architectural resin, 24k gold leaf, and rare marbles. No two pieces are ever exactly alike. It is true functional art.";
    }

    // 6. Care & Maintenance
    if (/(clean|maintain|scratch|outdoors|care for the finish|avoid when cleaning)/i.test(lowerQuery)) {
      return "To maintain the pristine high-gloss finish of your resin and gold pieces, we recommend wiping them gently with a microfiber cloth and a mild, non-abrasive glass cleaner. Avoid placing them in direct outdoor sunlight to preserve the depth of the resin.";
    }

    // 7. Policies & Warranty
    if (/(return|refund|cancel|warranty|damaged|privacy)/i.test(lowerQuery)) {
      return "Due to the highly exclusive and often bespoke nature of our pieces, all sales are final. However, every piece carries a lifetime warranty of authenticity and craftsmanship. If a piece is damaged during transit, it is fully insured and will be replaced or restored immediately.";
    }

    // 8. Brand / About KALVÉ
    if (/(what is kalve|story behind|design philosophy|stand for)/i.test(lowerQuery)) {
      return "KALVÉ is a luxury atelier dedicated to collectible, functional art. We believe furniture should not just occupy space, but command it. We merge raw geological inspiration with opulent materials like gold and resin to create timeless centerpieces.";
    }

    // 9. Specific Product Search & Pricing
    const foundProduct = products.find(p => 
      lowerQuery.includes(p.name.toLowerCase()) || 
      lowerQuery.includes(p.name.toLowerCase().replace(" basin", "").replace(" chessboard", "")) ||
      (lowerQuery.includes(p.category.toLowerCase()) && lowerQuery.includes(p.theme.toLowerCase()))
    );

    if (foundProduct) {
      return `The ${foundProduct.name} is a breathtaking piece from our ${foundProduct.collection}. It is priced at $${foundProduct.price.toLocaleString()} and crafted from ${foundProduct.material}. ${foundProduct.description} Would you like to request detailed specifications or arrange a private viewing?`;
    }

    if (/(price|cost|how much|expensive|quotation)/i.test(lowerQuery)) {
      return "Our exclusive collection pieces range from $120,000 to over $350,000 depending on the materials and bespoke requirements. I can provide a specific quotation if you have a piece in mind. Would you like to provide your email address for a private catalog?";
    }

    if (/(collections|chess|tables|basins|wall art)/i.test(lowerQuery)) {
      return "We currently offer highly curated collections across Luxury Chessboards, Sculptural Tables, Crystalline Basins, and Wall Art. Are you looking for something specific, or would you like me to recommend a piece for your space?";
    }

    // Fallback: Assist & Convert
    return "Thank you for reaching out to KALVÉ. Given the exclusive nature of your inquiry, I'd like to connect you with our lead design team. Could you please provide your email address so we can assist you properly?";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    const userMessage = inputText;
    const currentMessages = [...messages, { sender: "user", text: userMessage }];
    setMessages(currentMessages);
    setInputText("");
    
    // Simulate AI thinking and replying
    setTimeout(() => {
      const reply = generateResponse(userMessage, currentMessages.filter(m => m.sender === "concierge"));
      setMessages(prev => [...prev, { sender: "concierge", text: reply }]);
    }, 1200);
  };

  const handleSuggestion = (text: string) => {
    const currentMessages = [...messages, { sender: "user", text }];
    setMessages(currentMessages);
    setTimeout(() => {
      const reply = generateResponse(text, currentMessages.filter(m => m.sender === "concierge"));
      setMessages(prev => [...prev, { sender: "concierge", text: reply }]);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-card border border-border-gold text-gold px-5 py-4 rounded-full shadow-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-105 group"
        >
          <span className="text-xs font-semibold tracking-wider max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out">
            Private Concierge
          </span>
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] bg-background border border-border-gold rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[550px] max-h-[calc(100vh-6rem)]">
          {/* Header */}
          <div className="bg-card border-b border-border-gold p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-background p-2 rounded-full border border-border-gold text-gold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-gold font-serif text-lg tracking-wide leading-tight">KALVÉ Concierge</h3>
                <p className="text-gold-dim text-[10px] tracking-widest uppercase">At your service</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gold-dim hover:text-gold transition-colors">
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-background">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] p-3 text-sm leading-relaxed rounded-2xl ${msg.sender === "user" ? "bg-gold text-black rounded-tr-sm" : "bg-card text-foreground border border-border-gold rounded-tl-sm"}`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-2">
                <button onClick={() => handleSuggestion("I would like to commission a bespoke piece.")} className="text-left bg-transparent border border-border-gold text-gold-dim hover:text-gold hover:border-gold p-3 rounded-xl text-xs transition-colors">
                  I would like to commission a bespoke piece. →
                </button>
                <button onClick={() => handleSuggestion("Tell me about the Blush Crystalline Basin.")} className="text-left bg-transparent border border-border-gold text-gold-dim hover:text-gold hover:border-gold p-3 rounded-xl text-xs transition-colors">
                  Tell me about the Blush Crystalline Basin. →
                </button>
                <button onClick={() => handleSuggestion("Do you ship internationally?")} className="text-left bg-transparent border border-border-gold text-gold-dim hover:text-gold hover:border-gold p-3 rounded-xl text-xs transition-colors">
                  Do you ship internationally? →
                </button>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 bg-card border-t border-border-gold flex items-center gap-3">
            <input 
              type="text" 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Message Concierge..." 
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-gold-dim focus:outline-none"
            />
            <button type="submit" className="bg-gold text-black p-2 rounded-full hover:scale-105 transition-transform disabled:opacity-50" disabled={!inputText.trim()}>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
