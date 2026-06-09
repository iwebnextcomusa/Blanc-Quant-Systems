import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ChevronRight, ArrowUp, ExternalLink, Bot, Calendar, Clock,
  TrendingUp, Cpu, Database, BarChart3, Code, PieChart, Workflow, Users,
  DollarSign, HeartPulse, Laptop, Factory, ShieldAlert, Store, ArrowRight,
  ShieldAlert as Shield, ClipboardCheck, Layers, FileText, Lightbulb, HelpCircle, Phone, Mail
} from "lucide-react";
import { SERVICES_DATA, INDUSTRIES_DATA, BLOG_DATA } from "./data";
import { BlogPost, Service } from "./types";

// Import custom sections
import ThreeCanvas from "./components/ThreeCanvas";
import Chatbot from "./components/Chatbot";
import MediaGallery from "./components/MediaGallery";
import CaseStudies from "./components/CaseStudies";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState<string>("quant-analytics");

  // Dynamic Icon mapping for Lucide since simple string lookup isn't safe in standard TS configurations
  const renderServiceIcon = (name: string) => {
    switch (name) {
      case "TrendingUp": return <TrendingUp className="w-6 h-6 text-brand-accent" />;
      case "Cpu": return <Cpu className="w-6 h-6 text-brand-accent" />;
      case "Database": return <Database className="w-6 h-6 text-brand-accent" />;
      case "BarChart3": return <BarChart3 className="w-6 h-6 text-brand-accent" />;
      case "Code": return <Code className="w-6 h-6 text-brand-accent" />;
      case "PieChart": return <PieChart className="w-6 h-6 text-brand-accent" />;
      case "Workflow": return <Workflow className="w-6 h-6 text-brand-accent" />;
      case "Users": return <Users className="w-6 h-6 text-brand-accent" />;
      default: return <Cpu className="w-6 h-6 text-brand-accent" />;
    }
  };

  const renderIndustryIcon = (name: string) => {
    switch (name) {
      case "DollarSign": return <DollarSign className="w-5 h-5 text-brand-accent" />;
      case "HeartPulse": return <HeartPulse className="w-5 h-5 text-brand-accent" />;
      case "Laptop": return <Laptop className="w-5 h-5 text-brand-accent" />;
      case "Factory": return <Factory className="w-5 h-5 text-brand-accent" />;
      case "ShieldAlert": return <ShieldAlert className="w-5 h-5 text-brand-accent" />;
      case "Store": return <Store className="w-5 h-5 text-brand-accent" />;
      default: return <Laptop className="w-5 h-5 text-brand-accent" />;
    }
  };

  // Scroll event triggers
  useEffect(() => {
    const checkScrollHeight = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedServiceDetails = SERVICES_DATA.find(s => s.id === activeServiceTab) || SERVICES_DATA[0];

  return (
    <div className="min-h-screen relative text-slate-100 bg-brand-dark" id="main-application-frame">
      {/* Immersive 3D Interactive Landscape background canvas */}
      <ThreeCanvas />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-50 p-3.5 rounded-full bg-slate-900/90 hover:bg-brand-accent/20 text-brand-accent border border-brand-accent/20 shadow-lg cursor-pointer transition-all hover:scale-105"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* FIXED GLASS HEADER */}
      <header className="fixed top-0 inset-x-0 z-40 bg-brand-dark/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-12 h-20 flex items-center justify-between">
          {/* Corporate Title rotating geometric logo identifier */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-accent rounded-sm flex items-center justify-center rotate-45 transition-transform hover:rotate-90 duration-500">
              <div className="w-4 h-4 bg-brand-dark -rotate-45"></div>
            </div>
            <div>
              <span className="font-display font-bold text-sm tracking-widest text-white block">
                BLANC QUANT SYSTEMS
              </span>
              <span className="text-[9px] font-mono text-brand-accent tracking-widest block leading-none mt-0.5">
                PRECISION INTELLIGENCE LABS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Map */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
            <a href="#services" className="hover:text-white transition-colors">SERVICES</a>
            <a href="#industries" className="hover:text-white transition-colors">INDUSTRIES</a>
            <a href="#case-studies" className="hover:text-white transition-colors">CASES</a>
            <a href="#insights" className="hover:text-white transition-colors">INSIGHTS</a>
            <a href="#media-gallery" className="hover:text-white transition-colors">TELEMETRY</a>
            <a href="#contact" className="hover:text-white transition-colors text-brand-accent">CONTACT</a>
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="mailto:jblanc86@gmail.com"
              className="text-xs font-mono text-slate-500 hover:text-white transition-colors"
            >
              jblanc86@gmail.com
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-brand-accent/50 text-brand-accent text-xs font-bold uppercase tracking-widest hover:bg-brand-accent/10 transition-all rounded-sm"
            >
              INQUIRE NOW
            </a>
          </div>

          {/* Mobile responsive toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            aria-label="Toggle Navigation Drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "400px", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-brand-deep/95 border-b border-white/5 overflow-hidden font-sans text-sm"
              id="mobile-navigation-drawer"
            >
              <div className="px-6 py-6 flex flex-col gap-5.5">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors"
                >
                  ABOUT US
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#industries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors"
                >
                  INDUSTRIES
                </a>
                <a
                  href="#case-studies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors"
                >
                  CASE STUDIES
                </a>
                <a
                  href="#insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors"
                >
                  INSIGHTS & BLOG
                </a>
                <a
                  href="#media-gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors"
                >
                  SYSTEMS TELEMETRY
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-brand-accent font-medium tracking-wide transition-colors text-brand-accent"
                >
                  CONTACT NODE
                </a>
                <div className="pt-4 border-t border-slate-900 flex justify-center items-center text-xs font-mono">
                  <a href="mailto:jblanc86@gmail.com" className="text-brand-accent">jblanc86@gmail.com</a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/5" id="home">
        {/* Cyber overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/0 via-[#030712]/70 to-[#030712] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Precision Intelligence Systems // PHILADELPHIA HQ</span>
          </motion.div>

          {/* Giant high-contrast display head title with Playfair-style serif italic */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95] text-white tracking-tight mb-8"
          >
            Architecture for <br />
            <span className="font-serif italic text-brand-accent">Quantitative</span> <br />
            Dominance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-lg text-sm sm:text-base text-slate-400 leading-relaxed mb-10 font-sans"
          >
            Enterprise-grade data engineering, predictive modeling, and AI automation tailored for the most demanding technical landscapes.
          </motion.p>

          {/* CTAs matching Sophisticated Dark exactly */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center max-w-md pb-12"
          >
            <a
              href="#services"
              className="px-8 py-4 bg-white hover:bg-brand-accent hover:text-slate-950 text-slate-950 font-bold uppercase text-xs tracking-widest transition-all rounded-sm cursor-pointer"
            >
              View Capabilities
            </a>
            <div className="flex items-center gap-4 text-xs tracking-widest font-bold uppercase text-slate-500">
              <span className="w-12 h-[1px] bg-slate-700"></span>
              Scale your Enterprise
            </div>
          </motion.div>

          {/* Bottom Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-full max-w-5xl pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            id="trust-row-stats"
          >
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white text-glow">99.99%</div>
              <div className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mt-1">ENGINE RUNTIME COMPLIANCE</div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white text-glow">&lt;15 MICROSEC</div>
              <div className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mt-1">CALCULATION DOCK LATENCY</div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white text-glow">74% REDUCTION</div>
              <div className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mt-1">DIAGNOSTICS PROCESSING LAG</div>
            </div>
            <div>
              <div className="font-display font-bold text-xl sm:text-2xl text-white text-glow">$1.8M YEARLY</div>
              <div className="text-[9px] text-gray-500 font-mono uppercase tracking-widest mt-1">AUDITED MACHINERY SAVINGS</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRIEF OVERVIEW & ABOUT US PILLARS */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/5 overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 text-xs font-mono">
                <Shield className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                FOUNDING STRATEGY BOARD
              </div>
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Our Mission & vision:<br />
                Computational Integrity.
              </h2>
              
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                Blanc Quant Systems was established with a singular mission: to integrate superior mathematical rigor with production-grade engineering structures. We bridge the gap between high-level academic statistics and bulletproof corporate software systems.
              </p>
              
              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                Our vision is to empower leadership blocks within Finance, Healthcare, and Heavy Automation to make data-driven decisions that reduce processing latencies, protect capital exposures securely, and capture continuous operational efficiency gains automatically.
              </p>

              {/* Core Values grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900">
                  <h4 className="font-display font-medium text-white text-xs tracking-wider mb-1 uppercase">
                    1. Mathematical Truth
                  </h4>
                  <p className="text-[10.5px] text-gray-400 font-sans">
                    We eliminate guessing. All workflows are guided by probabilistic analytics.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900">
                  <h4 className="font-display font-medium text-white text-xs tracking-wider mb-1 uppercase">
                    2. Data Sovereignty
                  </h4>
                  <p className="text-[10.5px] text-gray-400 font-sans">
                    We build private systems that protect your custom data securely in-house.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900">
                  <h4 className="font-display font-medium text-white text-xs tracking-wider mb-1 uppercase">
                    3. Zero Friction
                  </h4>
                  <p className="text-[10.5px] text-gray-400 font-sans">
                    We eliminate manual bottlenecks via custom automated bridges.
                  </p>
                </div>
              </div>
            </div>

            {/* Right details bento column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4">
                <h3 className="font-display font-bold text-base text-white tracking-wide uppercase">
                  WHY BLANC QUANT SYSTEMS?
                </h3>
                <ul className="space-y-4.5 text-xs text-gray-300 font-sans">
                  <li className="flex gap-3">
                    <span className="p-1 rounded bg-brand-accent/15 text-brand-accent h-fit">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <div>
                      <strong>Enterprise API Privacy Guard:</strong> We deploy lightweight local models (LLaMA/Mistral), bypassing public SaaS endpoints entirely to enforce absolute corporate confidentiality.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="p-1 rounded bg-brand-accent/15 text-brand-accent h-fit">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <div>
                      <strong>Low Latency High-Throughput:</strong> We specialize in systems that absorb trillions of high-speed entries without experiencing pipeline back-pressure.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="p-1 rounded bg-brand-accent/15 text-brand-accent h-fit">
                      <ChevronRight className="w-4 h-4" />
                    </span>
                    <div>
                      <strong>Dual System Engineers:</strong> Our teams hold degrees in both Mathematical Analytics and Computer Software, designing systems that perform seamlessly.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CORE SERVICES HUB SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-brand-deep/60 border-b border-brand-accent/5" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-mono mb-4">
              <Layers className="w-3.5 h-3.5" />
              SYSTEM PORTFOLIO CATALOG
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Our 8 Pillars Of High-Throughput Engineering
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-400 font-sans">
              Strategic systems tailored to digest datasets, optimize computational flows, and generate persistent, secure, and rapid business intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Services Selection Navigation Column */}
            <div className="lg:col-span-5 space-y-2">
              <h3 className="text-[10px] text-gray-500 font-mono tracking-widest uppercase mb-4 px-3 block">
                SELECT OPERATIONAL MODULE
              </h3>
              <div className="flex flex-col gap-2">
                {SERVICES_DATA.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveServiceTab(service.id)}
                    className={`flex items-center gap-4 py-4 px-4 rounded-xl text-left transition-all tracking-wide cursor-pointer text-xs font-medium border ${
                      activeServiceTab === service.id
                        ? "bg-slate-900/90 border-brand-accent/30 text-white shadow-md shadow-brand-accent/5"
                        : "bg-slate-950/40 border-slate-900/50 hover:bg-slate-900/40 text-gray-400 hover:text-white"
                    }`}
                  >
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
                      {renderServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="block font-semibold">{service.title}</span>
                      <span className="block text-[9.5px] text-gray-500 mt-0.5 font-normal leading-none font-sans">
                        {service.subtitle}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Selected Service Tab Details Dashboard Box */}
            <div className="lg:col-span-7 glass-card rounded-2xl border border-brand-accent/10 bg-slate-900/70 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-brand-accent/10 border border-brand-accent/20">
                  {renderServiceIcon(selectedServiceDetails.iconName)}
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg sm:text-xl text-white">
                    {selectedServiceDetails.title}
                  </h3>
                  <p className="text-[10px] uppercase font-mono tracking-widest text-brand-accent mt-0.5">
                    {selectedServiceDetails.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                {selectedServiceDetails.description}
              </p>

              <div>
                <h4 className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-3 block">
                  TECHNICAL DELIVERABLE CHECKLIST
                </h4>
                <ul className="space-y-3 font-sans text-xs text-gray-300">
                  {selectedServiceDetails.details.map((detail, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <span className="p-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/25 text-brand-accent shrink-0 mt-0.5">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>CLASSIFIED SECURE DIRECTIVE</span>
                <a
                  href="#contact"
                  className="flex items-center gap-1 text-brand-accent hover:text-white transition-colors"
                >
                  REQUEST SERVICE AUDIT
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED BENTO GRID SECTION */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/5" id="industries">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-gray-400 text-xs font-mono mb-4">
              <ClipboardCheck className="w-3.5 h-3.5 text-brand-accent" />
              DEPLOYMENT DIRECTORIES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Operational Industries We Service
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-400 font-sans">
              Deploying custom statistical math, low-latency API wrappers, and predictive indicators suited for unique sectoral hurdles.
            </p>
          </div>

          {/* Bento layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="industries-bento-grid">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl glass-card border border-slate-800 hover:border-brand-accent/25 transition-all group duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2.5 rounded-lg bg-brand-accent/10 border border-brand-accent/25 text-brand-accent">
                      {renderIndustryIcon(ind.iconName)}
                    </div>
                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest mt-1">
                      SECURE // IND-{ind.id.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-white tracking-wide group-hover:text-brand-accent transition-colors mb-2 block">
                    {ind.name}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-sans leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900">
                  <div className="text-[10px] tracking-wide text-brand-blue uppercase font-mono font-medium">
                    STANDARD INTELLIGENT USE CASE:
                  </div>
                  <div className="text-xs text-gray-300 font-sans mt-1.5 leading-relaxed">
                    {ind.useCase}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES ARCHIVE COMPONENT */}
      <CaseStudies />

      {/* THOUGHT LEADERSHIP INSIGHTS & BLOG */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-brand-deep/50 border-b border-brand-accent/5" id="insights">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-mono mb-4">
              <Lightbulb className="w-3.5 h-3.5 text-glow" />
              THOUGHT LEADERSHIP NODES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Corporate Intelligence & Technical Insights
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-400 font-sans">
              Detailed technical registers breaking down developments in decentralized deep learning models, low-latency queues, and quantitative hazard assessments.
            </p>
          </div>

          {/* Blog listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_DATA.map((article) => (
              <div
                key={article.id}
                className="rounded-2xl glass-card border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-brand-accent/20 transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedBlog(article)}
              >
                <div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-gray-400 mb-4">
                    <span className="text-brand-accent bg-brand-accent/10 border border-brand-accent/15 py-0.5 px-2 rounded-full uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-indigo transition-colors mb-4 block leading-snug">
                    {article.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-3 mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-brand-accent transition-colors">
                  <span>READ INTEL BRIEFING</span>
                  <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Blog modal reader drawer overlay */}
        <AnimatePresence>
          {selectedBlog && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-deep/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setSelectedBlog(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="max-w-3xl w-full rounded-2xl glass-card border border-brand-accent/25 bg-brand-dark shadow-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 sm:p-10 border-b border-slate-900 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 font-mono uppercase tracking-widest mb-2.5">
                      <span className="text-brand-accent font-semibold">{selectedBlog.category}</span>
                      <span>•</span>
                      <span>PUBLISHED // {selectedBlog.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {selectedBlog.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="p-2 rounded-full hover:bg-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer border border-transparent hover:border-slate-700"
                    aria-label="Exit Reader"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-10 font-sans text-xs sm:text-sm text-gray-300 leading-relaxed max-h-[60vh] overflow-y-auto scrollbar space-y-4">
                  <p className="font-semibold italic text-slate-200 text-sm sm:text-base border-l-2 border-brand-accent/60 pl-4 py-1">
                    {selectedBlog.excerpt}
                  </p>
                  
                  <div className="whitespace-pre-wrap pt-2">
                    {selectedBlog.content}
                    {"\n\nTo capture operational margins and avoid SaaS security limits on strategic calculations streams, it is critical to rely on scalable private infrastructures hosted in-house natively."}
                    {"\n\nOur specialized team guides clients throughout entire assessment, modeling blueprints, continuous integration loops, and dedicated telemetry audits to guarantee continuous resilience across market volatility shifts."}
                  </div>
                </div>

                <div className="p-6 bg-slate-950 border-t border-slate-900 flex justify-between items-center">
                  <div className="text-[10px] text-gray-500 font-mono tracking-wider">
                    BLANC_QUANT_THOUGHT_LEADER // ID: {selectedBlog.id.toUpperCase()}
                  </div>
                  <button
                    onClick={() => setSelectedBlog(null)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wide transition-all rounded-xl border border-slate-800 hover:border-slate-700 cursor-pointer"
                  >
                    Return to Newsroom
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* MEDIA GALLERY SECTION */}
      <MediaGallery />

      {/* CONTACT REGULAR FORM + SIMULATED GEO MAP SECTION */}
      <ContactSection />

      {/* SYSTEM CHATBOT FLOATING MODULE WIDGET */}
      <Chatbot />

      {/* FOOTER */}
      <footer className="bg-brand-deep py-12 px-4 border-t border-white/5 text-center" id="footer">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex justify-center items-center gap-3">
            <span className="p-1 rounded bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-mono font-bold tracking-tighter text-xs">
              BQ
            </span>
            <span className="font-display font-medium text-xs text-white tracking-widest uppercase">
              BLANC QUANT SYSTEMS
            </span>
          </div>
          
          <p className="text-[11px] text-gray-500 font-mono tracking-widest">
            SECURED TELEMETRY NODES RUNNING // CLOUD INTEGRATED VIRTUAL LAYER
          </p>

          <p className="text-[11px] text-gray-400 font-sans">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-white transition-colors underline underline-offset-4 decoration-brand-accent/40 hover:decoration-white">iWebNext</a>
          </p>

          <div className="pt-6 border-t border-slate-950 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-500 font-mono gap-4">
            <div>
              &copy; 2026 Blanc Quant Systems. All system configurations registered.
            </div>
            <div className="flex gap-4">
              <a href="#about" className="hover:text-white transition-colors">SECURITY DEFINITIONS</a>
              <span>//</span>
              <a href="#services" className="hover:text-white transition-colors">TERMS OF COMPLIANCE</a>
              <span>//</span>
              <a href="#contact" className="hover:text-white transition-colors">IP ROUTING DIAGRAM</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
