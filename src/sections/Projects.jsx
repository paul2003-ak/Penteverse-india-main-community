// import { useRef, useState } from "react";
// import { Icon } from "@iconify/react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const TRACKS_DATA = [
//   { id: "01", title: "Community First", subtitle: "Community First", description: "Connect with 10,000+ tech enthusiasts across India. Build lasting friendships and professional networks." },
//   { id: "02", title: "Launch Projects", subtitle: "Launch Projects", description: "Build real-world projects with mentorship from industry experts." },
//   { id: "03", title: "Skill Development", subtitle: "Skill Development", description: "Master cutting-edge technologies through hands-on learning." },
//   { id: "04", title: "Innovation Hub", subtitle: "Innovation Hub", description: "Turn your ideas into reality with our startup incubation support." },
//   { id: "05", title: "Earn Badges", subtitle: "Earn Badges", description: "Get recognized for your contributions and achievements." },
//   { id: "06", title: "Career Prep", subtitle: "Career Prep", description: "Resume reviews, mock interviews, and job referrals." },
// ];



// const Projects = () => {
//   const containerRef = useRef(null);
//   const overlayRefs = useRef([]);
//   const previewRef = useRef(null);
//   const [currentIndex, setCurrentIndex] = useState(null);
  
//   const moveX = useRef(null);
//   const moveY = useRef(null);

//   useGSAP(() => {
//     // 1. Setup Floating Card QuickTo (Fixed Bug: initialized inside hook)
//     moveX.current = gsap.quickTo(previewRef.current, "x", { duration: 0.4, ease: "power3" });
//     moveY.current = gsap.quickTo(previewRef.current, "y", { duration: 0.4, ease: "power3" });

//     // 2. Animate Header Text (Classic GSAP)
//     const headerTl = gsap.timeline({
//       scrollTrigger: { trigger: "#tracks-header", start: "top 85%" }
//     });
//     headerTl.from(".header-reveal", { y: 30, opacity: 0, stagger: 0.2, duration: 0.8 });

//     // 3. Animate Tracks List
//     gsap.from(".track-row", {
//       x: -50,
//       opacity: 0,
//       duration: 0.8,
//       stagger: 0.1,
//       scrollTrigger: { trigger: "#tracks-list", start: "top 85%" }
//     });

//     // 4. Animate Highlights Grid
//     gsap.from(".highlight-card", {
//       opacity: 0,
//       y: 40,
//       stagger: 0.1,
//       scrollTrigger: { trigger: "#highlights-grid", start: "top 90%" }
//     });
//   }, { scope: containerRef });

//   const handleMouseEnter = (index) => {
//     if (window.innerWidth < 768) return;
//     setCurrentIndex(index);
//     gsap.to(overlayRefs.current[index], { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", duration: 0.3 });
//     gsap.to(previewRef.current, { autoAlpha: 1, scale: 1, duration: 0.3 });
//   };

//   const handleMouseLeave = (index) => {
//     if (window.innerWidth < 768) return;
//     gsap.to(overlayRefs.current[index], { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", duration: 0.3 });
//     gsap.to(previewRef.current, { autoAlpha: 0, scale: 0.8, duration: 0.3 });
//     setCurrentIndex(null);
//   };

//   const handleMouseMove = (e) => {
//     if (window.innerWidth < 768 || !moveX.current) return;
//     moveX.current(e.clientX + 20); 
//     moveY.current(e.clientY + 20);
//   };

//   return (
//     <section id="work" ref={containerRef} className="relative flex flex-col min-h-screen bg-line-dark pb-20 overflow-hidden" onMouseMove={handleMouseMove}>
//       <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

//       {/* --- CLASSIC INLINED HEADER --- */}
//       <div id="tracks-header" className="relative z-10 px-6 md:px-12 pt-16">
//         <div className="flex items-center gap-4 mb-4 header-reveal">
        
          
//         </div>
//         <h1 className="text-6xl md:text-8xl font-black text-white uppercase leading-none header-reveal">
//           Why Pentaverse?
//         </h1>
        
//       </div>

//       {/* --- TRACKS LIST --- */}
//       <div id="tracks-list" className="relative flex flex-col mt-16 border-t border-white/10">
//         {TRACKS_DATA.map((track, index) => (
//           <div
//             key={track.id}
//             className="track-row relative flex flex-col gap-2 py-8 cursor-pointer group md:py-10 border-b border-white/10 overflow-hidden"
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={() => handleMouseLeave(index)}
//           >
//             <div ref={(el) => (overlayRefs.current[index] = el)} className="absolute inset-0 bg-iron-red/10 pointer-events-none" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }} />
//             <div className="absolute inset-0 bg-gradient-to-r from-iron-red/20 to-transparent opacity-0 group-active:opacity-100 group-hover:opacity-100 md:group-hover:opacity-0 transition-opacity duration-300 md:hidden border-l-4 border-iron-red" />
//             <div className="relative px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between z-10">
//               <div>
//                 <span className="font-mono text-iron-red text-sm opacity-60">// SECTOR_{track.id}</span>
//                 <h2 className="text-3xl md:text-5xl font-black text-white uppercase group-hover:text-glow transition-all">{track.title}</h2>
//               </div>
//               <div className="hidden md:block text-white opacity-20 group-hover:opacity-100 group-hover:text-iron-red group-hover:translate-x-4 transition-all duration-300">
//                 <Icon icon="lucide:chevron-right" width="40" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* --- FLOATING PREVIEW (Desktop) --- */}
//       <div ref={previewRef} className="fixed top-0 left-0 z-50 pointer-events-none opacity-0 invisible hidden md:block">
//         {currentIndex !== null && (
//           <div className="w-[400px] bg-black/90 backdrop-blur-xl border border-iron-red p-6 shadow-[0_0_30px_rgba(255,31,31,0.3)] rounded-br-3xl">
//             <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
//                <h3 className="font-mono text-white text-lg font-bold uppercase">DATA_{TRACKS_DATA[currentIndex].id}</h3>
//                <Icon icon="lucide:cpu" className="text-iron-red animate-pulse" width="20" />
//             </div>
//             <h4 className="font-mono text-iron-red text-xs mb-2">{TRACKS_DATA[currentIndex].subtitle}</h4>
//             <p className="text-gray-300 text-base leading-relaxed">{TRACKS_DATA[currentIndex].description}</p>
//           </div>
//         )}
//       </div>

      
//     </section>
//   );
// };

// export default Projects;