import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI server-side with User-Agent header for telemetry
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("WARNING: GEMINI_API_KEY is not defined. AI Chatbot functions will fall back to simulated responses.");
}

// System instruction holding deep knowledge of Blanc Quant Systems
const SYSTEM_INSTRUCTION = `You are the official AI Assistant for Blanc Quant Systems, a sophisticated technology and quantitative systems company operating globally via secure remote models. Your primary job is to answer questions from visitors with professional, warm, enterprise-grade tone, showcasing intelligence, technical excellence, precision, software development prowess, and data-driven solutions.

Company Key Information:
- Name: Blanc Quant Systems
- Email: jblanc86@gmail.com
- Operation: Global (Remote-first)
- Style & Quality: Premium, sophisticated, innovative, high-trust.
- Developed / Designed by: iWebNext (https://iwebnext.com)

Services Offered:
1. Quantitative Analytics: Mathematical and statistical modeling, high-frequency algorithms, data mining, risk assessment.
2. Artificial Intelligence Solutions: Deep learning, custom generative AI integrations, NLP, automated decision systems.
3. Data Engineering: Robust pipeline architecture, database layout, ETL/ELT flows, data warehousing, high-integrity warehousing.
4. Predictive Modeling: Market trends forecasting, customer behavioral modeling, predictive maintenance, risk scoring.
5. Software Development: Custom full-stack web and mobile apps, scalable microservices, low-latency execution systems.
6. Business Intelligence & Reporting: Immersive visual dashboards, descriptive metrics, interactive reports with custom metrics.
7. Process Automation: RPA (Robotic Process Automation), system integrations, custom automation tools.
8. Custom Consulting Services: Technical audit, digital transformation blueprint, cloud migration guides, executive consulting.

Industries Served:
- Finance (algorithmic system structures, quantitative hedging analytics)
- Healthcare (predictive patient diagnostics, operations intelligence)
- Technology (scalable cloud infrastructures, core software frameworks)
- Manufacturing (supply chain automation, predictive machinery maintenance)
- Government (data policy systems, automated process layers)
- Small & Medium Businesses (digital enablement, tailored analytics consulting)

Tone Guidelines:
- Professional, trustworthy, precise, and sophisticated.
- Do not make up untrue achievements, but rather demonstrate technical depth.
- Keep replies relatively brief and structured so they remain easy to read in a floating chatbot panel.
- Mention contact details (Email) if the user inquires about onboarding, collaboration, or custom quotes.
- If asked about "who made this site", mention: "This website was designed and developed by iWebNext (iwebnext.com)."`;

app.use(express.json());

// API route for chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request. 'messages' must be an array." });
    }

    // Format chat history to send to Gemini API
    // We fetch the last 15 messages to prevent token bloat
    const recents = messages.slice(-15);
    
    // Convert messages to part/contents format for Gemini API
    const contents = recents.map((msg) => {
      const role = msg.role === 'user' ? 'user' : 'model';
      return {
        role,
        parts: [{ text: msg.content }]
      };
    });

    if (!ai) {
      // Graceful fallback for demonstration of chatbot flow if GEMINI_API_KEY is not configured
      const lastMessage = messages[messages.length - 1]?.content || "";
      let reply = "Hello! I am the Blanc Quant Systems assistant. To enable the live AI engine, please make sure to add your GEMINI_API_KEY in the Secrets panel.";
      if (lastMessage.toLowerCase().includes("service") || lastMessage.toLowerCase().includes("what do you do")) {
        reply = "Blanc Quant Systems offers Quantitative Analytics, AI Solutions, Data Engineering, Predictive Modeling, Software Development, Business Intelligence, Process Automation, and Custom Consulting. How can we help accelerate your technical objectives today?";
      } else if (lastMessage.toLowerCase().includes("contact") || lastMessage.toLowerCase().includes("phone") || lastMessage.toLowerCase().includes("email")) {
        reply = "You can contact Blanc Quant Systems via email at jblanc86@gmail.com. We operate globally.";
      }
      return res.json({ response: reply });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ response: response.text || "I was unable to formulate a response at this moment." });
  } catch (error: any) {
    console.error("Gemini chatbot error:", error);
    res.status(500).json({ error: error.message || "An error occurred during AI processing." });
  }
});

// Configure Vite middleware in development, serve build output in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Bind to host 0.0.0.0 and Port 3000 as required by the runtime environment
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical: Failed to start full-stack server:", error);
});
