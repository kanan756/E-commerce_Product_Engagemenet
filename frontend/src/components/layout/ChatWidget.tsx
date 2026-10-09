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
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchAIResponse = async (query: string, history: any[]) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query, history })
      });
      const data = await response.json();
      return data.reply;
    } catch (error) {
      return "I apologize, but our concierge service is currently experiencing technical difficulties.";
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    
    const userMessage = inputText;
    const currentMessages = [...messages, { sender: "user", text: userMessage }];
    setMessages(currentMessages);
    setInputText("");
    
    setIsTyping(true);
    const reply = await fetchAIResponse(userMessage, messages);
    setMessages(prev => [...prev, { sender: "concierge", text: reply }]);
    setIsTyping(false);
  };

  const handleSuggestion = async (text: string) => {
    const currentMessages = [...messages, { sender: "user", text }];
    setMessages(currentMessages);
    
    setIsTyping(true);
    const reply = await fetchAIResponse(text, messages);
    setMessages(prev => [...prev, { sender: "concierge", text: reply }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex items-center gap-3 bg-card border border-border-gold text-gold px-4 py-3 md:px-5 md:py-4 rounded-full shadow-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-105 group"
        >
          <span className="text-xs font-semibold tracking-wider max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-500 ease-in-out">
            Private Concierge
          </span>
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:bottom-6 md:right-6 z-50 w-auto md:w-[380px] bg-background border border-border-gold rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-6rem)]">
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

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] p-4 text-sm leading-relaxed rounded-2xl bg-card text-foreground border border-border-gold rounded-tl-sm flex items-center gap-1.5 h-[42px]">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
                </div>
              </div>
            )}

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
