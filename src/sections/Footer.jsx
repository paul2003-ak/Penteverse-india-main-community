import { mySocials } from "../constants";

// Footer Link Data (You can move this to constants/index.js if you prefer)
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
    <footer className="relative bg-[#0E0C15] pt-16 pb-8 border-t border-white/10 overflow-hidden text-sm">
      <div className="c-space mx-auto px-6 md:px-12">
        
        {/* --- TOP SECTION: Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Contact (Span 4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">
                Penta<span className="text-purple-400">verse</span>
              </h2>
            </div>

            <p className="text-neutral-400 leading-relaxed max-w-sm">
              A community-driven tech ecosystem empowering builders across Cloud, AI, Web, App, and Web3 to learn, build, and grow together.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mt-2">
              <a href="mailto:indiapentaverse@gmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-cyan-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <span>indiapentaverse@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Pan-India Community</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-2">
              {mySocials.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500 transition-all duration-300 group"
                >
                  <img src={social.icon} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" alt={social.name} />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer Column (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Columns 2, 3, 4: Links (Span remaining cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="text-white font-bold text-lg">{section.title}</h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-neutral-400 hover:text-cyan-400 transition-colors duration-200">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- NEWSLETTER CARD --- */}
        <div className="relative rounded-2xl bg-white/5 border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-2">Stay in the Loop</h3>
            <p className="text-neutral-400">Get the latest updates on events, workshops, and opportunities.</p>
          </div>

          <form className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
             <input 
               type="email" 
               placeholder="Enter your email" 
               className="w-full sm:w-80 px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 transition-colors"
             />
             <button 
               type="submit" 
               className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-emerald-400 text-black font-bold hover:scale-105 transition-transform duration-200 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
             >
               SUBSCRIBE
             </button>
          </form>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2025 Pentaverse. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;