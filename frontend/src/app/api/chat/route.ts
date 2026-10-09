import { NextResponse } from 'next/server';
import { products } from '@/lib/data';

export async function POST(request: Request) {
  try {
    const { message, history } = await request.json();

    // 1. Prepare the Knowledge Base Context
    const knowledgeBase = products.map(p => 
      `Product: ${p.name}\nCollection: ${p.collection}\nCategory: ${p.category}\nPrice: $${p.price}\nMaterial: ${p.material}\nDimensions/Size: ${p.dimensions}\nFeatures: ${p.features.join(", ")}\nDescription: ${p.description}\n`
    ).join('\n');

    // 2. Prepare the System Prompt
    const systemPrompt = `
      You are KALVÉ's Private Concierge, an exclusive and luxury customer support assistant. 
      Your tone should be elegant, professional, polite, and helpful.
      
      Here is the information about our products:
      ${knowledgeBase}

      RULES & BEHAVIORS:
      1. PRODUCT QUERIES: Answer questions about products using the information above. If asked about "collections" or "what do you have", list some of the actual pieces/products we offer, not just the collection names.
      2. SIZE/DIMENSIONS: If asked about the size, refer to the "Dimensions/Size" field.
      3. TRUST & AUTHENTICITY: If asked "how can I trust you", explain that KALVÉ is a luxury atelier crafting 1-of-1 bespoke pieces with lifetime warranties and premium materials, and assure them of our white-glove service.
      4. CONTACT INQUIRIES: If the user asks how to contact us, reply gracefully and ask them to provide their email address right here in the chat so a senior styling director can reach out.
      5. OFF-TOPIC STRICT RULE: If the user asks a completely unrelated question (e.g. coding, math, general world facts not related to luxury furniture or art), you MUST NOT answer it. Instead, say exactly: "I specialize in assisting with KALVÉ's exclusive collections. For other inquiries, please contact our support team."
      6. Keep your answers concise but luxurious. Do not provide extremely long paragraphs.
    `;

    // 3. Prepare Messages Array for OpenRouter
    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...history.map((msg: any) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text
      })),
      { role: "user", content: message }
    ];

    // 4. Call OpenRouter API
    // Using model: openai/gpt-4o-mini
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost:3000", 
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: apiMessages,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
        console.error("OpenRouter Error:", data);
        return NextResponse.json({ reply: "I apologize, but our concierge service is currently experiencing technical difficulties." }, { status: 500 });
    }

    return NextResponse.json({ reply: data.choices[0].message.content });

  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ reply: "I apologize, but our concierge service is currently experiencing technical difficulties." }, { status: 500 });
  }
}
