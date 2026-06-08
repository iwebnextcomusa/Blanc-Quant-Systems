import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ClipboardCheck, Sparkles, ChevronRight, X, ArrowUpRight } from "lucide-react";
import { CASE_STUDIES_DATA } from "../data";
import { CaseStudy } from "../types";

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/5 overflow-hidden" id="case-studies">
      {/* Background glow offsets */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-brand-indigo/5 blur-3xl pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-mono mb-4">
              <ClipboardCheck className="w-3.5 h-3.5" />
              CASE ARCHIVES
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Real Integrations. Groundbreaking Metrics.
            </h2>
            <p className="max-w-2xl text-sm text-gray-400 font-sans">
              Deploying quant systems and process automation that generate measurable financial returns and optimization gains for enterprise-tier operations.
            </p>
          </div>
          <div>
            <span className="text-xs text-gray-400 font-mono">
              ALL PROJECTS SUB-TESTED // COMPLIANT
            </span>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES_DATA.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 hover:border-brand-accent/30 hover:shadow-brand-accent/5 transition-all duration-300 relative group cursor-pointer"
              onClick={() => setSelectedCase(item)}
            >
              <div>
                <span className="text-[10px] text-brand-blue font-mono tracking-widest block uppercase mb-2">
                  {item.industry}
                </span>
                <h3 className="font-display font-semibold text-lg sm:text-xl text-white group-hover:text-brand-accent transition-colors mb-4 leading-snug">
                  {item.title}
                </h3>
                
                {/* Metric grid */}
                <div className="grid grid-cols-3 gap-2 py-4 px-3.5 rounded-xl bg-slate-950/60 border border-slate-900/80 mb-6">
                  {item.metrics.map((met, idx) => (
                    <div key={idx} className="text-center">
                      <div className="font-display font-bold text-sm sm:text-base text-brand-accent text-glow">
                        {met.value}
                      </div>
                      <div className="text-[8px] text-gray-400 font-sans uppercase tracking-tight mt-1">
                        {met.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-gray-400 font-sans line-clamp-3 mb-6">
                  {item.challenge}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-900 flex items-center justify-between text-xs text-brand-accent font-mono group-hover:text-white transition-colors">
                <span>VIEW METHODOLOGY ARCHIVE</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal Drawer */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-deep/90 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="max-w-3xl w-full rounded-2xl glass-card border border-brand-accent/20 bg-brand-dark/95 shadow-2xl relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-6 sm:p-8 bg-slate-950 border-b border-slate-900 flex justify-between items-start">
                <div>
                  <span className="text-xs text-brand-accent font-mono tracking-widest block uppercase mb-1">
                    {selectedCase.client} // {selectedCase.industry}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 rounded-full hover:bg-slate-800 text-gray-400 hover:text-white transition-colors cursor-pointer border border-transparent hover:border-slate-700"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body stats and texts */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto scrollbar">
                {/* Metrics detail row */}
                <div>
                  <h4 className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-3">
                    AUDITED GAIN RATIOS
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {selectedCase.metrics.map((met, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                        <div className="font-display font-extrabold text-lg sm:text-2xl text-brand-accent text-glow">
                          {met.value}
                        </div>
                        <div className="text-[9px] text-gray-400 font-sans uppercase tracking-tight mt-1.5">
                          {met.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenge & Solution details */}
                <div className="space-y-4 text-xs font-sans leading-relaxed text-gray-300">
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                    <strong className="block text-rose-400 font-display font-medium text-xs tracking-wider uppercase mb-1.5">
                      Operational Challenge
                    </strong>
                    <p>{selectedCase.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <strong className="block text-emerald-400 font-display font-medium text-xs tracking-wider uppercase mb-1.5">
                      Systems Solution Implemented
                    </strong>
                    <p>{selectedCase.solution}</p>
                  </div>
                </div>

                {/* Measurable results list */}
                <div>
                  <h4 className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mb-3.5">
                    KEY HISTORIC SYSTEM RESULTS
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-300 font-sans">
                    {selectedCase.results.map((resStr, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <span className="p-0.5 rounded-full bg-brand-accent/20 border border-brand-accent/30 text-brand-accent shrink-0 mt-0.5">
                          <ChevronRight className="w-3 h-3" />
                        </span>
                        <span>{resStr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Close Button Footer */}
              <div className="p-5 bg-slate-950 border-t border-slate-900 flex justify-end">
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs tracking-wide transition-all border border-slate-800 hover:border-slate-700 cursor-pointer"
                >
                  Return to Dashboard
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
