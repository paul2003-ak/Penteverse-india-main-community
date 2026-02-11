import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Calendar, Clock, Users, Mic, Code2, 
  Trophy, Sparkles, ArrowRight, Zap, Target 
} from "lucide-react";

// --- 3D TILT WRAPPER COMPONENT ---
const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
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
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
};

const upcomingEvents = [
  {
    title: "Pentaverse Talks: Cloud Edition",
    date: "Feb 15, 2026",
    time: "6:00 PM IST",
    type: "Monthly Talk",
    domain: "Cloud",
    attendees: 120,
    color: "from-blue-600 to-cyan-400",
    featured: true,
  },
  {
    title: "AI Workshop: LLM Integration",
    date: "Feb 22, 2026",
    time: "3:00 PM IST",
    type: "Workshop",
    domain: "AI",
    attendees: 85,
    color: "from-purple-600 to-pink-400",
    featured: false,
  },
  {
    title: "Web3 Fundamentals",
    date: "Mar 1, 2026",
    time: "10:00 AM IST",
    type: "Bootcamp",
    domain: "Web3",
    attendees: 60,
    color: "from-indigo-600 to-violet-500",
    featured: false,
  },
];

const programs = [
  { icon: Mic, name: "Pentaverse Talks", freq: "Monthly", desc: "Expert speakers & networking.", color: "from-cyan-500 to-blue-600" },
  { icon: Code2, name: "Build Week", freq: "Quarterly", desc: "Cross-domain project bridging.", color: "from-purple-500 to-indigo-600" },
  { icon: Trophy, name: "HackSprint", freq: "Bi-Annual", desc: "48-hour competitive hacking.", color: "from-pink-500 to-rose-600" },
  { icon: Sparkles, name: "Summit", freq: "Annual", desc: "Flagship industry celebration.", color: "from-yellow-400 to-orange-500" },
];

const EventsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black" id="events">
      {/* Background Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Programs</span>
          </h2>
          <p className="text-neutral-400 font-mono text-sm uppercase tracking-widest max-w-lg mx-auto">
            // LIVE_OPERATIONS // SYSTEM_CALENDAR
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* --- UPCOMING EVENTS COLUMN --- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <Zap className="text-cyan-400 animate-pulse" />
              UPCOMING_NODES
            </h3>

            <div className="space-y-6">
              {upcomingEvents.map((event, idx) => (
                <TiltCard 
                  key={event.title} 
                  className={`relative p-1 rounded-[2rem] bg-gradient-to-br transition-all ${event.featured ? "from-cyan-500/50 via-transparent to-purple-500/50" : "from-white/10 to-transparent"}`}
                >
                  <div className="bg-[#0E0C15] rounded-[1.9rem] p-6 h-full border border-white/5">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter bg-gradient-to-r ${event.color} text-white`}>
                        {event.domain}
                      </span>
                      <span className="text-neutral-500 font-mono text-xs">{event.type}</span>
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{event.title}</h4>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <Calendar className="w-4 h-4 text-cyan-400" /> {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <Clock className="w-4 h-4 text-cyan-400" /> {event.time}
                      </div>
                      <div className="flex items-center gap-2 text-neutral-400 text-sm">
                        <Users className="w-4 h-4 text-cyan-400" /> {event.attendees}+
                      </div>
                    </div>

                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-2 group">
                      RESERVE ACCESS
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* --- ROADMAP COLUMN --- */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8">
              <Target className="text-purple-400" />
              SYSTEM_ROADMAP
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {programs.map((program) => (
                <TiltCard key={program.name} className="group cursor-pointer">
                  <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-colors">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform`}>
                      <program.icon className="text-white w-6 h-6" />
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-bold text-white">{program.name}</h4>
                      <span className="text-[10px] font-mono text-purple-400 px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20">{program.freq}</span>
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">{program.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* 3D PROGRESS TIMELINE */}
            <div className="mt-12 bg-white/5 border border-white/10 rounded-[2rem] p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-neutral-600">CYCLE_2026</div>
              <h4 className="text-xs font-black text-neutral-500 uppercase tracking-[0.3em] mb-10">Phase Progression</h4>
              
              <div className="relative flex justify-between">
                {/* Horizontal line */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2" />
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 -translate-y-1/2 shadow-[0_0_10px_#22d3ee]"
                />

                {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
                  <div key={q} className="relative z-10 flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold border-4 border-black transition-all ${i === 0 ? "bg-cyan-500 text-black shadow-[0_0_20px_#22d3ee]" : "bg-neutral-800 text-neutral-500"}`}>
                      {q}
                    </div>
                    <span className={`mt-4 text-[10px] font-bold uppercase transition-colors ${i === 0 ? "text-cyan-400" : "text-neutral-600"}`}>
                      {i === 0 ? "Talks" : i === 1 ? "Build" : i === 2 ? "Hack" : "Summit"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </section>
  );
};

export default EventsSection;