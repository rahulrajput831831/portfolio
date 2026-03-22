import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-surface-container-low w-full relative">
      <div className="max-w-3xl mx-auto text-center w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase mb-6">Let's Connect</h2>
          <p className="text-on-surface-variant mb-4">Have a project in mind or just want to say hello? Drop a message below.</p>
          <p className="text-primary font-bold mb-12 tracking-wide text-lg selection:bg-primary/30">
            rahulrajput831831831@gmail.com
          </p>
        </motion.div>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 text-left w-full relative z-10 p-8 md:p-12 glass-card rounded-3xl border border-outline-variant/10" 
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <label className="block text-[10px] tracking-widest uppercase font-label text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Name</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-zinc-700 outline-none text-on-surface" placeholder="John Doe" type="text" />
            </div>
            <div className="group relative">
              <label className="block text-[10px] tracking-widest uppercase font-label text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Email</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-zinc-700 outline-none text-on-surface" placeholder="john@example.com" type="email" />
            </div>
          </div>
          <div className="group relative">
            <label className="block text-[10px] tracking-widest uppercase font-label text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Message</label>
            <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-zinc-700 resize-none outline-none text-on-surface" placeholder="Tell me about your vision..." rows="4"></textarea>
          </div>
          <div className="flex justify-center pt-8">
            <button 
              type="submit"
              className="px-12 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-label font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(129,236,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}