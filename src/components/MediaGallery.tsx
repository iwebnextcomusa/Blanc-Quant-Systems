import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Maximize2, X, FileVideo, Layers, Eye } from "lucide-react";
import { MEDIA_DATA } from "../data";
import { MediaItem } from "../types";

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  // Derive unique categories from media data
  const categories = ["All", ...Array.from(new Set(MEDIA_DATA.map((item) => item.category)))];

  const filteredMedia = activeCategory === "All"
    ? MEDIA_DATA
    : MEDIA_DATA.filter((item) => item.category === activeCategory);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-accent/5 overflow-hidden" id="media-gallery">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none opacity-50 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            VISUAL TELEMETRY GALLERY
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Intellectual Assets & Systems In Action
          </h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-400 font-sans">
            A visual register showcasing our high-throughput software installations, active telemetry monitors, custom-engineered server racks, and advisory sessions.
          </p>
        </div>

        {/* Video Feature Board (Autoplay Muted Video Representation) */}
        <div className="mb-14 rounded-2xl overflow-hidden glass-card border border-slate-800 p-2 sm:p-4 max-w-5xl mx-auto shadow-2xl relative group">
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-950">
            {/* Embedded stock loop with overlay */}
            <video
              className="w-full h-full object-cover opacity-60 mix-blend-screen"
              autoPlay
              loop
              muted
              playsInline
              src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-hologram-hud-digital-world-map-41711-large.mp4"
              referrerPolicy="no-referrer"
            />
            {/* Video overlay decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40 flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
              <div className="flex justify-between items-start">
                <span className="bg-brand-accent/20 text-brand-accent text-[9px] font-mono py-1 px-2.5 rounded border border-brand-accent/30 tracking-widest uppercase">
                  LIVE TELEMETRY STREAM
                </span>
                <span className="text-[9px] text-gray-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  REC // SH-800
                </span>
              </div>
              <div className="max-w-md">
                <h3 className="font-display font-semibold text-lg sm:text-2xl text-white mb-2 text-glow">
                  Engineered Automation Backplane
                </h3>
                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  Trillions of sub-microsecond algorithmic points of financial indices analyzed instantly. Our predictive automated modules align computing priority securely.
                </p>
              </div>
            </div>
            {/* Play Button Simulation overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-slate-950/20">
              <div className="p-4 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent backdrop-blur hover:scale-110 transition-transform">
                <FileVideo className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-brand-accent/10 text-brand-accent border border-brand-accent/30 shadow-md"
                  : "bg-slate-900/60 hover:bg-slate-800/80 text-gray-400 hover:text-white border border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative h-72 rounded-xl overflow-hidden glass-card border border-slate-800 cursor-pointer shadow-lg hover:shadow-brand-accent/5 hover:border-brand-accent/20 transition-all duration-300"
                onClick={() => setSelectedMedia(item)}
              >
                {/* Image element with lazy loading */}
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500 ease-out"
                />

                {/* Cyber grid overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-dark/20 to-transparent p-5 flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="text-[9px] font-mono text-brand-accent bg-brand-accent/10 border border-brand-accent/20 py-0.5 px-2.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="font-display font-medium text-sm text-white group-hover:text-brand-accent transition-colors duration-200">
                    {item.title}
                  </h4>
                  <div className="mt-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-gray-300 font-mono">
                    <Eye className="w-3.5 h-3.5 text-brand-accent" />
                    ACTIVATE MAGNIFICATION
                  </div>
                </div>

                <div className="absolute top-4 right-4 p-2 rounded bg-slate-900/60 border border-slate-800 text-gray-400 group-hover:text-white transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal Dialogue */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-deep/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="max-w-5xl w-full rounded-2xl glass-card border border-brand-accent/20 overflow-hidden relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                maxLength={44}
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 hover:bg-rose-500 border border-slate-800 text-white cursor-pointer transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-slate-950 relative flex items-center justify-center">
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] max-w-full object-contain"
                />
              </div>

              <div className="p-6 bg-slate-950 border-t border-slate-900">
                <div className="flex flex-wrap justify-between items-center gap-3">
                  <div>
                    <span className="text-xs text-brand-accent font-mono tracking-widest uppercase">
                      {selectedMedia.category} // ARCHIVE SKU
                    </span>
                    <h3 className="font-display font-semibold text-lg text-white mt-1">
                      {selectedMedia.title}
                    </h3>
                  </div>
                  <div className="text-[10px] text-gray-500 font-mono">
                    SECURITY SYSTEM CLASSIFIED
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
