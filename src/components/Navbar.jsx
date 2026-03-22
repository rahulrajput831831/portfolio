import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["about", "experience", "projects", "skills", "certifications", "achievements", "contact"];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-zinc-950/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,229,255,0.05)] py-4" : "bg-transparent py-6"}`}>
      <nav className="flex justify-between items-center px-6 max-w-7xl mx-auto">
        <a href="#hero" className="flex items-center gap-3">
          <Terminal className="text-cyan-400 w-6 h-6" />
          <span className="text-xl md:text-2xl font-black text-cyan-400 tracking-widest font-headline uppercase">
            Rahul Pathania
          </span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`${
                activeSection === item ? "text-cyan-400 border-b-2 border-cyan-400 pb-1" : "text-zinc-400 pb-1 border-b-2 border-transparent"
              } font-manrope tracking-tighter font-extrabold uppercase hover:text-cyan-300 transition-all duration-300 ease-out text-sm xl:text-base`}
            >
              {item === "certifications" ? "Certs" : item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-cyan-400 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-3xl border-b border-zinc-900 shadow-xl py-6 flex flex-col items-center gap-6 pb-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`${
                activeSection === item ? "text-cyan-400" : "text-zinc-400"
              } font-manrope tracking-tighter font-extrabold uppercase text-lg`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
