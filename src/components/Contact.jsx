import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // "idle" | "submitting" | "success"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus("submitting");
    
    // Simulate processing
    setTimeout(() => {
      setStatus("success");
      
      const subject = `Portfolio Contact from ${formData.name}`;
      const body = `${formData.message}\n\n---\nName: ${formData.name}\nEmail: ${formData.email}`;
      window.location.href = `mailto:rahulrajput831831831@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
          <a 
            href="mailto:rahulrajput831831831@gmail.com" 
            className="inline-flex items-center gap-2 text-primary font-bold mb-12 tracking-wide text-lg hover:text-secondary transition-colors selection:bg-primary/30 underline decoration-primary/30 hover:decoration-secondary underline-offset-4"
          >
            <Mail className="w-5 h-5" />
            rahulrajput831831831@gmail.com
          </a>
        </motion.div>
        
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 text-left w-full relative z-10 p-8 md:p-12 glass-card rounded-3xl border border-outline-variant/10 overflow-hidden" 
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative">
              <label className="block text-[10px] tracking-widest uppercase font-label text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Name</label>
              <input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-zinc-700 outline-none text-on-surface" 
                placeholder="John Doe" 
                type="text" 
              />
            </div>
            <div className="group relative">
              <label className="block text-[10px] tracking-widest uppercase font-label text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Email</label>
              <input 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-zinc-700 outline-none text-on-surface" 
                placeholder="john@example.com" 
                type="email" 
              />
            </div>
          </div>
          <div className="group relative">
            <label className="block text-[10px] tracking-widest uppercase font-label text-on-surface-variant mb-2 group-focus-within:text-primary transition-colors">Message</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 px-0 focus:ring-0 focus:border-primary transition-colors placeholder-zinc-700 resize-none outline-none text-on-surface" 
              placeholder="Tell me about your vision..." 
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-center pt-8">
            <button 
              type="submit"
              disabled={status !== "idle"}
              className="px-12 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-label font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(129,236,255,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed min-w-[220px] justify-center"
            >
              {status === "idle" && (
                <>Send Message <Send className="w-4 h-4" /></>
              )}
              {status === "submitting" && (
                <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
              )}
              {status === "success" && (
                <>Message Sent <CheckCircle2 className="w-4 h-4" /></>
              )}
            </button>
          </div>
          
          <AnimatePresence>
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-0 bg-surface-container-low/95 backdrop-blur-md z-20 flex flex-col items-center justify-center rounded-3xl border border-primary/20"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold text-on-surface mb-3 font-headline">Message Prepared!</h3>
                <p className="text-on-surface-variant text-center px-6 max-w-sm">
                  Your default email client should open shortly. If it doesn't, please reach out directly at: <br/>
                  <a 
                    href="mailto:rahulrajput831831831@gmail.com" 
                    className="inline-flex items-center gap-2 text-primary font-bold mt-4 text-lg hover:text-secondary transition-colors underline decoration-primary/30 hover:decoration-secondary underline-offset-4"
                  >
                    <Mail className="w-5 h-5 -mt-0.5" />
                    rahulrajput831831831@gmail.com
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}