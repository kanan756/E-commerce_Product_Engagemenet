import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "KALVÉ | Collectible Art",
  description: "Collectible Art. Made with Intention.",
};

// import ChatWidget from "@/components/layout/ChatWidget";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background relative" suppressHydrationWarning>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          {/* <ChatWidget /> */}
      </body>
    </html>
  );
}
