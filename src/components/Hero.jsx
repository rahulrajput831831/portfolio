import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden w-full">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-8 mt-12 lg:mt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-label tracking-widest uppercase text-on-surface-variant">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter leading-tight mt-4">
            Hi, I'm <br />
            <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(129,236,255,0.5)] transition-all duration-300 cursor-default">Rahul Pathania</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-headline font-bold text-on-surface-variant h-12">
            I am a <span className="text-primary border-b-2 border-primary/50 pb-1">
              <Typewriter
                words={['Data Science Enthusiast', 'Machine Learning Engineer', 'Web Developer', 'Problem Solver']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            Specializing in building data-driven solutions and intelligent predictive models that merge robust engineering with technical precision.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-label font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(129,236,255,0.4)] transition-all duration-300 scale-100 active:scale-95 inline-flex items-center gap-2 group">
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/Rahul-Pathania-CV.pdf" download className="px-8 py-4 rounded-full border border-outline-variant/30 text-on-surface font-label font-bold uppercase tracking-widest text-sm hover:bg-surface-bright transition-all duration-300 inline-flex items-center gap-2 group">
              Resume <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative mt-16 md:mt-0 flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm lg:max-w-md aspect-square rounded-2xl overflow-hidden glass-card p-4 hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,229,255,0.15)]">
            <img 
              alt="Rahul Pathania" 
              className="w-full h-full object-cover rounded-xl filter contrast-[1.05] saturate-[1.1] hover:scale-105 transition-all duration-700" 
              src="/profile.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 backdrop-blur-3xl rounded-full -z-10 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}