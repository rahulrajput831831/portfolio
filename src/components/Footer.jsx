import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-20 mt-auto bg-zinc-950 border-t border-zinc-900 relative z-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 max-w-7xl mx-auto gap-8">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <span className="font-manrope font-bold text-cyan-400 tracking-widest uppercase">RAHUL PATHANIA</span>
          <p className="font-inter text-xs tracking-widest uppercase text-zinc-500">
            © {new Date().getFullYear()} RAHUL PATHANIA. BUILT WITH PRECISION.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/rahulrajput831831" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300 hover:-translate-y-1 transform">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/rahulrajput831/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-colors duration-300 hover:-translate-y-1 transform">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:rahulrajput831831831@gmail.com" className="text-zinc-600 hover:text-white transition-colors duration-300 hover:-translate-y-1 transform">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
