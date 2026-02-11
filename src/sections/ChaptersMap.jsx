import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { MapPin, Users, Calendar, ChevronRight, Activity, Globe } from "lucide-react";

const chapters = [
  { id: "kolkata", name: "Kolkata", x: 75, y: 45, members: 1200, events: 24, lead: "Sourav Das", status: "active" },
  { id: "delhi", name: "Delhi NCR", x: 48, y: 28, members: 2500, events: 45, lead: "Vikram Singh", status: "active" },
  { id: "mumbai", name: "Mumbai", x: 35, y: 52, members: 1800, events: 32, lead: "Sneha Patil", status: "active" },
  { id: "bangalore", name: "Bangalore", x: 48, y: 72, members: 2200, events: 38, lead: "Arun Kumar", status: "active" },
  { id: "chennai", name: "Chennai", x: 55, y: 78, members: 950, events: 18, lead: "Priya Raman", status: "active" },
  { id: "hyderabad", name: "Hyderabad", x: 50, y: 60, members: 1500, events: 28, lead: "Raj Reddy", status: "active" },
  { id: "pune", name: "Pune", x: 38, y: 55, members: 800, events: 15, lead: "Amit Shah", status: "active" },
  { id: "jaipur", name: "Jaipur", x: 40, y: 35, members: 450, events: 8, lead: "Meera Sharma", status: "growing" },
];

const ChaptersMap = () => {
  const [selectedChapter, setSelectedChapter] = useState(chapters[0]);
  const [hoveredChapter, setHoveredChapter] = useState(null);
  
  // --- 3D TILT LOGIC ---
  const mapRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHoveredChapter(null);
  };

  return (
    <section id="Chapters" className="py-24 relative overflow-hidden bg-black selection:bg-cyan-500/30">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-4"
          >
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Network Status: Live</span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Chapter <span className="text-stroke-cyan text-transparent">Nexus</span>
          </h2>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* --- 3D HOLOGRAPHIC MAP --- */}
          <div className="lg:col-span-7 perspective-1000">
            <motion.div
              ref={mapRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative aspect-[4/5] md:aspect-square bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl group overflow-hidden"
            >
              {/* Internal Grid Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

              <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                {/* 3D "Shadow" Layer of the map */}
                <path
                  d="M45,15 L55,12 L65,15 L75,20 L80,28 L82,35 L80,45 L78,55 L75,65 L70,75 L60,85 L50,90 L45,85 L40,80 L35,70 L30,60 L28,50 L30,40 L32,30 L38,20 Z"
                  fill="none"
                  stroke="rgba(34,211,238,0.1)"
                  strokeWidth="2"
                  transform="translate(1, 1)"
                />
                {/* Main Map Outline */}
                <path
                  d="M45,15 L55,12 L65,15 L75,20 L80,28 L82,35 L80,45 L78,55 L75,65 L70,75 L60,85 L50,90 L45,85 L40,80 L35,70 L30,60 L28,50 L30,40 L32,30 L38,20 Z"
                  fill="rgba(255,255,255,0.02)"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="0.5"
                />
                
                {/* Data Connection Lines */}
                {chapters.map((chapter, i) => 
                  chapters.slice(i + 1).map((other) => {
                    const distance = Math.sqrt(Math.pow(chapter.x - other.x, 2) + Math.pow(chapter.y - other.y, 2));
                    if (distance < 30) {
                      return (
                        <motion.line
                          key={`${chapter.id}-${other.id}`}
                          x1={chapter.x} y1={chapter.y} x2={other.x} y2={other.y}
                          stroke="url(#lineGradient)"
                          strokeWidth="0.2"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.3 }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      );
                    }
                    return null;
                  })
                )}

                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>

                {/* Chapter Points */}
                {chapters.map((chapter) => (
                  <g key={chapter.id} className="cursor-pointer" onClick={() => setSelectedChapter(chapter)}>
                    <circle
                      cx={chapter.x} cy={chapter.y}
                      r={selectedChapter.id === chapter.id ? 4 : 1.5}
                      fill={selectedChapter.id === chapter.id ? "#22d3ee" : "#ffffff"}
                      className="transition-all duration-500"
                    />
                    {selectedChapter.id === chapter.id && (
                      <circle cx={chapter.x} cy={chapter.y} r="6" fill="none" stroke="#22d3ee" strokeWidth="0.2">
                        <animate attributeName="r" from="2" to="10" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    )}
                  </g>
                ))}
              </svg>
            </motion.div>
          </div>

          {/* --- CHAPTER DATA PANEL --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedChapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-8 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 relative overflow-hidden group"
              >
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                   <Globe className="w-32 h-32" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                      <MapPin className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black text-white uppercase">{selectedChapter.name}</h3>
                      <p className="text-cyan-400/60 font-mono text-xs uppercase tracking-tighter">Sector {selectedChapter.id}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-neutral-500 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold">Active Units</span>
                      </div>
                      <div className="text-2xl font-black text-white">{selectedChapter.members.toLocaleString()}</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="flex items-center gap-2 text-neutral-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[10px] uppercase font-bold">Total Operations</span>
                      </div>
                      <div className="text-2xl font-black text-white">{selectedChapter.events}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 mb-8">
                    <p className="text-xs text-neutral-500 uppercase font-bold mb-1 tracking-widest">Chapter Command</p>
                    <p className="text-xl font-bold text-white">{selectedChapter.lead}</p>
                  </div>

                  <button className="w-full py-4 rounded-xl bg-cyan-500 text-black font-black uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2 group/btn">
                    Deploy to {selectedChapter.name}
                    <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* QUICK SELECTOR */}
            <div className="flex flex-wrap gap-2">
              {chapters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedChapter(c)}
                  className={`px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-tighter transition-all ${
                    selectedChapter.id === c.id 
                    ? "bg-white text-black border-white" 
                    : "bg-transparent text-neutral-500 border-white/10 hover:border-white/30"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .text-stroke-cyan { -webkit-text-stroke: 1px #22d3ee; }
      `}</style>
    </section>
  );
};

export default ChaptersMap;