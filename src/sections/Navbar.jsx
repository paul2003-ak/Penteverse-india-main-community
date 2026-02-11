import { useState } from "react";

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Chapters', href: '#Chapters' },
  { name: 'Members', href: '#teams' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, href) => {
    e.preventDefault(); // Stop the default jump
    setIsOpen(false); // Close mobile menu if open

    // Remove the '#' to find the element by ID
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${targetId}" not found. Check your section IDs!`);
    }
  };

  const NavItems = () => (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.name} className="nav-li">
          <a
            className="nav-link cursor-pointer"
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-black/50 border-b border-white/10 top-0 left-0">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
            onClick={(e) => handleScroll(e, '#hero')}
          >
            Pentaverse India
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`block overflow-hidden sm:hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="p-5 bg-black/90 backdrop-blur-xl border-t border-white/10">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;