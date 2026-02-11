import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight,} from "lucide-react";
import { mySocials } from "../constants";

const FOOTER_LINKS = [
  {
    title: "Community",
    links: [
      { name: "About Us", href: "#" },
      { name: "Domains", href: "#" },
      { name: "Core Team", href: "#" },
      { name: "Chapters", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Events", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Projects", href: "#" },
      { name: "Hall of Fame", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Partner With Us", href: "#" },
      { name: "Code of Conduct", href: "#" },
      { name: "Sponsor Events", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#06060E] pt-24 pb-12 border-t border-white/5 overflow-hidden text-sm">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="c-space mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
                  <div className="relative w-12 h-12 rounded-xl bg-black border border-white/10 flex items-center justify-center text-white font-black text-2xl">
                    P
                  </div>
                </div>
                <h2 className="text-3xl font-black text-white tracking-tighter uppercase">
                  Penta<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">verse</span>
                </h2>
              </div>

              <p className="text-neutral-400 leading-relaxed max-w-sm font-mono text-xs uppercase tracking-widest opacity-80">
                // Empowering the next generation of builders through Cloud, AI, and Web3 infrastructure.
              </p>
            </div>

            {/* Contact Intel */}
            <div className="space-y-4">
              <a href="mailto:indiapentaverse@gmail.com" className="flex items-center gap-3 text-neutral-400 hover:text-cyan-400 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-400/10 border border-white/5 group-hover:border-cyan-400/50">
                  <Mail size={16} />
                </div>
                <span className="font-medium">indiapentaverse@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
                  <MapPin size={16} />
                </div>
                <span className="font-medium">Pan-India Tech Ecosystem</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Links Matrix */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="space-y-6">
                <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] opacity-50">{section.title}</h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-neutral-400 hover:text-white flex items-center gap-1 group transition-all">
                        {link.name}
                        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- ENHANCED NEWSLETTER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 p-8 md:p-12 overflow-hidden"
        >
          {/* Animated Background Pulse */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left space-y-3">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">Stay Synchronized</h3>
              <p className="text-neutral-400 max-w-md">Get exclusive access to early-bird workshops, project leaks, and community chapters.</p>
            </div>

            <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
               <div className="relative flex-grow group">
                 <input 
                   type="email" 
                   placeholder="Enter neural link (email)" 
                   className="w-full sm:w-80 px-6 py-4 rounded-xl bg-black/60 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                 />
               </div>
               <button 
                 type="submit" 
                 className="relative px-8 py-4 rounded-xl bg-cyan-500 text-black font-black uppercase tracking-widest hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300 active:scale-95"
               >
                 Initialize
               </button>
            </form>
          </div>
        </motion.div>

        {/* --- SOCIAL & LEGAL --- */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-neutral-500 font-mono text-[10px] uppercase tracking-widest">
            <p>© 2025 Pentaverse Hub. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors">T&C</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Shield</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {mySocials.map((social, index) => (
              <motion.a 
                key={index} 
                href={social.href} 
                whileHover={{ y: -5 }}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-cyan-500/50 transition-all group"
              >
                <img src={social.icon} className="w-5 h-5 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all" alt={social.name} />
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;