import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API registration lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/5 overflow-hidden" id="contact">
      {/* Absolute glow elements */}
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-brand-accent" />
            COMMUNICATION GATEWAY // SECURE
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Initiate Contact with Blanc Quant
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-400 font-sans">
            Ready to integrate custom AI models, stress-test your analytics pipeline, or automate outdated systems? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="columns-container-contact">
          {/* Left Block: Corporate Info */}
          <div className="lg:col-span-5 space-y-8" id="corporate-info-column">
            <div>
              <h3 className="font-display font-semibold text-xl text-white mb-4">
                Corporate Headquarters
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans">
                Our quant systems engineers and consultants are headquartered in the historic core of Philadelphia, Pennsylvania. We offer both cloud-based secure remote audits and onsite technical transformation runs.
              </p>
            </div>

            <div className="space-y-4" id="contacts-listing">
              {/* Address */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-800 transition-colors">
                <div className="p-3 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent h-fit">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none mb-1.5">
                    Location Node
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    Philadelphia, Pennsylvania
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono">
                    39.9526° N, 75.1652° W
                  </span>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:617-869-1116"
                className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-brand-accent/30 hover:bg-slate-900/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent h-fit">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 group-hover:text-brand-accent uppercase tracking-widest leading-none mb-1.5 transition-colors">
                    Telephone Line
                  </h4>
                  <p className="text-sm font-semibold text-white group-hover:text-glow transition-all">
                    617-869-1116
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono">
                    MON - FRI // 0900 - 1800 EST
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:jblanc86@gmail.com"
                className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-brand-accent/30 hover:bg-slate-900/60 transition-all group"
              >
                <div className="p-3 rounded-lg bg-brand-accent/10 border border-brand-accent/20 text-brand-accent h-fit">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-gray-400 group-hover:text-brand-accent uppercase tracking-widest leading-none mb-1.5 transition-colors">
                    Secure Email Link
                  </h4>
                  <p className="text-sm font-semibold text-white group-hover:text-glow break-all transition-all">
                    jblanc86@gmail.com
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono">
                    ENCRYPTED INBOX STREAM
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Center Block: Submission Form */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl" id="forms-column">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="inline-flex p-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mb-2">
                  <CheckCircle className="w-10 h-10 animate-bounce" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  Corporate Briefing Registered
                </h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto font-sans leading-relaxed">
                  Your inquiry has been logged securely onto our database. A Blanc Quant Systems systems engineer from our Phila, PA office will contact you back in less than 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-4 py-2 rounded-xl bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white border border-brand-blue/20 transition-all text-xs font-semibold cursor-pointer"
                >
                  Create New Entry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 font-medium mb-1.5 uppercase tracking-wide text-[9px] font-mono">
                      Your Representative Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-slate-800/80 hover:border-slate-700 focus:border-brand-accent rounded-xl p-3.5 text-white transition-all focus:outline-none placeholder:text-gray-600"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 font-medium mb-1.5 uppercase tracking-wide text-[9px] font-mono">
                      Corporate Email Address
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. jdoe@firm.com"
                      className="w-full bg-slate-950 border border-slate-800/80 hover:border-slate-700 focus:border-brand-accent rounded-xl p-3.5 text-white transition-all focus:outline-none placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 font-medium mb-1.5 uppercase tracking-wide text-[9px] font-mono">
                    Subject Of Intent
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Pipeline Optimization Briefing"
                    className="w-full bg-slate-950 border border-slate-800/80 hover:border-slate-700 focus:border-brand-accent rounded-xl p-3.5 text-white transition-all focus:outline-none placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-medium mb-1.5 uppercase tracking-wide text-[9px] font-mono">
                    System Requirements & Scope Details
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please outline your current tech stack, data bottlenecks, and automation target scopes..."
                    className="w-full bg-slate-950 border border-slate-800/80 hover:border-slate-700 focus:border-brand-accent rounded-xl p-3.5 text-white transition-all focus:outline-none placeholder:text-gray-600 resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-2">
                  <button
                    maxLength={44}
                    disabled={isSubmitting}
                    className="w-full p-4 rounded-xl accent-gradient hover:opacity-90 font-display font-semibold hover:glow-cyan text-white shadow-md disabled:opacity-50 flex items-center justify-center gap-2 transition-all duration-300 text-xs tracking-wider uppercase cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        TRANSMITTING BRIEFING TO ENCRYPTED NODE...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        SECURELY TRANSMIT BRIEFING
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Map Block coordinates simulation overlay */}
        <div className="mt-14 rounded-2xl overflow-hidden glass-card border border-slate-800 p-2 relative group shadow-2xl">
          <div className="relative aspect-[16/7] w-full bg-slate-950 rounded-xl overflow-hidden">
            {/* Structured diagram map lines simulation background mapping */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [background-size:16px_16px] opacity-40"></div>
            
            {/* Interactive geographic vector design representing Philadelphia Downtown mapping */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Concentric rings styled like standard vector sonar radar targeting */}
              <div className="w-48 h-48 rounded-full border border-brand-accent/25 animate-pulse absolute"></div>
              <div className="w-96 h-96 rounded-full border border-brand-blue/10 absolute animate-pulse-slow"></div>
              <div className="w-[450px] h-[450px] rounded-full border border-dashed border-slate-800/70 absolute"></div>
              
              {/* Central Philly node overlay */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-3.5 h-3.5 rounded-full bg-brand-accent animate-ping absolute"></div>
                <div className="w-4 h-4 rounded-full bg-brand-accent border-2 border-[#0b0f19] shadow-md shadow-brand-accent"></div>
                <div className="mt-3.5 py-1.5 px-3 rounded-lg bg-brand-dark/95 border border-brand-accent/40 shadow-xl backdrop-blur-sm text-center">
                  <h4 className="font-display font-bold text-xs tracking-wider text-white">PHILADELPHIA REGION</h4>
                  <p className="text-[9px] font-mono text-brand-accent tracking-widest mt-0.5">// BLANC_QUANT_CORE</p>
                </div>
              </div>

              {/* Auxiliary fake coordinates dots surrounding center */}
              <div className="absolute -top-10 left-1/4 flex gap-1.5 items-center font-mono text-[8px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span>SCH_NODE_2_OFF_95</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 flex gap-1.5 items-center font-mono text-[8px] text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>DATA_STREAM_PIPELINE_OK</span>
              </div>
            </div>

            {/* Simulated UI labels */}
            <div className="absolute bottom-5 left-5 bg-slate-950/80 border border-slate-800 p-3 rounded-lg text-[9px] font-mono text-gray-400 backdrop-blur-sm">
              <p className="text-white font-semibold mb-1">COMPASS TELEMETRY GRID</p>
              <p>LAT: 39° 57&apos; 9.4&quot; N</p>
              <p>LON: 75° 9&apos; 54.7&quot; W</p>
              <p className="text-brand-accent">GPS MATCH: VERIFIED</p>
            </div>
            
            <div className="absolute top-5 right-5 bg-slate-950/80 border border-slate-800 py-1.5 px-3 rounded-lg text-[9px] font-mono text-brand-accent backdrop-blur-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
              SECURE CONNECT TO LOCAL DISTRICT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
