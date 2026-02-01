import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef(null);
  
  return (
    <section className="c-space section-spacing py-20" id="about">
      <div className="flex flex-col gap-2 mb-12 px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Pentaverse</span>
        </h2>
        <p className="text-neutral-400 font-mono text-sm md:text-base max-w-xl">
          // SYSTEM STATUS: OPERATIONAL
          <br/>
          Building the next generation of tech leaders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 grid-rows-none md:auto-rows-[18rem]">
        
        {/* --- GRID 1: MISSION (With 3D Terminal Visual) --- */}
        <div className="col-span-1 md:col-span-4 row-span-1 relative overflow-hidden rounded-3xl bg-[#0E0C15] border border-white/10 group">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* DECORATIVE: Floating Terminal Window (CSS Only - No Image Needed) */}
          <div className="absolute -right-12 -top-8 w-[60%] h-[80%] bg-[#1E1E2E] rounded-xl border border-white/10 shadow-2xl transform rotate-[-10deg] opacity-60 group-hover:scale-105 group-hover:rotate-[-5deg] group-hover:opacity-100 transition-all duration-700 hidden md:block">
             <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
             </div>
             <div className="p-4 font-mono text-xs text-green-400 leading-relaxed">
                <p>&gt; initializing_mission...</p>
                <p>&gt; loading_modules: [learning, building, community]</p>
                <p className="text-blue-400">&gt; status: 100% READY</p>
                <p className="animate-pulse">_</p>
             </div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            {/* Icon: Target */}
            <div className="w-12 h-12 mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Mission</h3>
            <p className="text-neutral-400 leading-relaxed max-w-md">
              To empower individuals through collaborative learning, hands-on building, and community-driven mentorship.
            </p>
          </div>
        </div>

        {/* --- GRID 2: INTERACTIVE CARDS --- */}
        <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 relative overflow-hidden rounded-3xl bg-[#0E0C15] border border-white/10">
           <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
           
           <div ref={grid2Container} className="relative w-full h-full min-h-[300px] cursor-crosshair overflow-hidden">
             {/* Background Text */}
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="text-4xl md:text-6xl font-black text-white/5 uppercase text-center leading-none select-none">
                  Code<br/>Is<br/>Craft
                </h3>
             </div>

             {/* Draggable Cards */}
             <Card containerRef={grid2Container} text="People First" rotate="12deg" top="20%" left="10%" />
             <Card containerRef={grid2Container} text="No Silos" rotate="-5deg" top="40%" left="40%" />
             <Card containerRef={grid2Container} text="Zero Gatekeeping" rotate="8deg" top="60%" left="15%" />
             <Card containerRef={grid2Container} text="Hands-On" rotate="-10deg" top="75%" left="45%" />
           </div>
        </div>

        {/* --- GRID 3: GLOBE --- */}
        <div className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl bg-[#0E0C15] border border-white/10 flex flex-col justify-between">
          <div className="p-6 z-10">
            <h3 className="text-xl font-bold text-white mb-1">Global Scale</h3>
            <p className="text-neutral-400 text-sm">Learners to Leaders.</p>
          </div>
          <div className="absolute top-10 left-0 w-full h-full flex items-center justify-center opacity-80 pointer-events-none">
             <Globe className="scale-125 translate-y-10" />
          </div>
        </div>

        {/* --- GRID 4: CONTACT --- */}
        <div className="col-span-1 md:col-span-2 row-span-1 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 to-[#0E0C15] border border-white/10 flex flex-col items-center justify-center p-6 text-center">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />
           <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
             Ready to start a project?
           </h3>
           <CopyEmailButton />
        </div>

        {/* --- GRID 5: VISION (With Animated Radar Visual) --- */}
        <div className="col-span-1 md:col-span-4 row-span-1 relative overflow-hidden rounded-3xl bg-[#0E0C15] border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center gap-8 group">
           {/* Background Glow */}
           <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500" />

           <div className="flex-1 z-10">
             {/* Icon: Vision/Eye */}
             <div className="w-12 h-12 mb-4 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Our Vision</h3>
             <p className="text-neutral-400 leading-relaxed">
               To become one of India's most impactful cross-domain technology communities, bridging the gap between academia and industry.
             </p>
           </div>
           
           {/* DECORATIVE: Animated Tech Stack Grid */}
           <div className="flex-1 w-full h-full min-h-[120px] relative overflow-hidden border border-white/10 rounded-xl bg-black/40 flex items-center justify-center">
              {/* Scanline Effect */}
              <div className="absolute top-0 w-full h-[2px] bg-cyan-500/50 shadow-[0_0_10px_#22d3ee] animate-[scan_3s_linear_infinite]" />
              
              <div className="grid grid-cols-3 gap-4 opacity-50">
                 {/* Tech Icons (CSS Circles) */}
                 {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                       <div className="w-2 h-2 rounded-full bg-neutral-600 group-hover:bg-cyan-400 transition-colors" />
                    </div>
                 ))}
              </div>
              <p className="absolute bottom-2 right-3 font-mono text-[10px] text-cyan-500/50">
                 SYS_V.2.0.4
              </p>
           </div>
        </div>

      </div>
      
      {/* Required style for the scanline animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;