import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, User, ArrowDownCircle, CornerDownLeft } from "lucide-react";
import { Message } from "../types";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-message",
      role: "assistant",
      content: "Welcome to Blanc Quant Systems. I am your specialized AI Strategy Assistant. If you have any inquiries regarding our analytics pipelines, quantitative modeling models, or automation services, feel free to ask me!",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to lowest point on update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    if (!textToSend) {
      setInputValue("");
    }

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Post full relevant chat history up so the assistant maintains system memory
      const chatPayload = [...messages, userMsg].map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatPayload }),
      });

      if (!res.ok) {
        throw new Error("Unable to establish communication with secure server.");
      }

      const data = await res.json();
      
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: data.response || "No response received.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      const errMsg: Message = {
        id: `err-${Date.now()}`,
        role: "assistant",
        content: "My connection experienced a microsecond routing interrupt. Please retry submitting your query shortly or notify our support node at jblanc86@gmail.com.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const QUICK_PROMPTS = [
    "Tell me about Quantitative Analytics",
    "What are your core engineering services?",
    "How does your AI help healthcare?",
    "How can I contact Blanc Quant?",
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="ai-chatbot-widget border-cyan-500">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] sm:w-[400px] h-[500px] max-h-[calc(100vh-120px)] rounded-2xl glass-card border border-brand-accent/20 bg-brand-deep/95 shadow-2xl flex flex-col overflow-hidden mb-4"
            id="chatbot-window-parent"
          >
            {/* Header */}
            <div className="p-4 bg-brand-deep border-b border-brand-accent/15 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-brand-accent/10 border border-brand-accent/30 text-brand-accent">
                  <Bot className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-sm tracking-wide text-white">Quantum Core Bot</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[10px] text-gray-400 font-mono">NODE_ACTIVE // GEMINI 3.5</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-slate-800/50 transition-colors"
                aria-label="Minimize Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Message Flow */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs scrollbar" id="chatbot-message-container">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="flex gap-2.5 max-w-[85%] items-start">
                    {msg.role !== "user" && (
                      <div className="p-1.5 rounded-md bg-brand-blue/10 border border-brand-blue/25 text-brand-blue shrink-0">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}
                    
                    <div
                      className={`p-3 rounded-2xl leading-relaxed text-slate-200 border ${
                        msg.role === "user"
                          ? "bg-slate-800/80 border-brand-accent/20 rounded-tr-none text-right"
                          : "bg-slate-900/60 border-slate-800 rounded-tl-none text-left"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                      <span className="block text-[8px] text-slate-500 mt-1.5 font-mono">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>

                    {msg.role === "user" && (
                      <div className="p-1.5 rounded-md bg-brand-accent/10 border border-brand-accent/25 text-brand-accent shrink-0">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2.5 max-w-[85%] items-center text-slate-400">
                    <div className="p-1.5 rounded-md bg-brand-blue/10 text-brand-blue animate-bounce">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-slate-900/40 border border-slate-800 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-accent animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-2 h-2 rounded-full bg-brand-accent animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 rounded-full bg-brand-accent animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Helper Prompts */}
            {messages.length === 1 && (
              <div className="px-4 py-2 bg-brand-deep/80 border-t border-brand-accent/5 flex flex-wrap gap-1.5">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(prompt)}
                    className="text-[10px] bg-slate-900 hover:bg-slate-800/80 text-brand-accent hover:text-white border border-brand-accent/10 rounded-full py-1 px-2.5 transition-all text-left duration-200 cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <div className="p-3 bg-brand-deep border-t border-brand-accent/10 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask our quantitative assistant..."
                className="flex-1 bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 focus:border-brand-accent rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none transition-all placeholder:text-gray-500 font-sans"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 rounded-xl bg-brand-accent/10 hover:bg-brand-accent text-brand-accent hover:text-brand-dark border border-brand-accent/25 transition-all outline-none disabled:opacity-40 disabled:hover:bg-brand-accent/10 disabled:hover:text-brand-accent cursor-pointer"
                aria-label="Submit Question"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button Toggle */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="p-4 rounded-full accent-gradient glow-cyan text-white shadow-lg cursor-pointer border border-brand-accent/30 flex items-center justify-center relative group"
        aria-label="Toggle Chat Bot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat-icon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0b0f19] animate-pulse"></span>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Tooltip on Hover */}
        {!isOpen && (
          <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-brand-deep border border-brand-accent/20 px-3 py-1.5 rounded-lg text-[10px] font-semibold text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
            Consult Quantum AI Agent
          </span>
        )}
      </motion.button>
    </div>
  );
}
