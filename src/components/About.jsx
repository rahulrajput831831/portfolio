import { motion } from "framer-motion";
import { User, Code, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative w-full bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase relative inline-block">
            About <span className="text-primary">Me</span>
            <div className="h-1 w-full bg-primary mt-2 rounded-full hidden md:block" />
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-on-surface-variant leading-relaxed">
              I am a 3rd-year Computer Science student at Lovely Professional University with a strong focus on Data Science and Machine Learning. I specialize in building data-driven solutions, predictive models, and analytics dashboards.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              I have hands-on experience with machine learning pipelines, feature engineering, and data visualization using tools like Python, Scikit-Learn, and Power BI. I'm deeply passionate about how algorithms can decode complex problems into actionable insights.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start group">
                <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/10 text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">Data Science</h4>
                  <p className="text-sm text-on-surface-variant mt-1">Predictive modeling & analytics.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start group">
                <div className="p-3 rounded-xl bg-surface-container border border-outline-variant/10 text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-on-surface">Web Engineering</h4>
                  <p className="text-sm text-on-surface-variant mt-1">Modern scalable software.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="glass-card p-8 rounded-2xl border border-outline-variant/10 max-w-sm w-full space-y-6 relative overflow-hidden group hover:border-primary/30 hover:shadow-[0_10px_30px_-15px_rgba(0,229,255,0.1)] transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[50px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
              
              <User className="w-12 h-12 text-primary" />
              <div>
                <h3 className="text-xl font-headline font-bold text-on-surface">Profile Highlights</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex justify-between items-center text-sm border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Degree</span>
                    <span className="font-medium text-right">B.Tech CSE</span>
                  </li>
                  <li className="flex justify-between items-center text-sm border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">University</span>
                    <span className="font-medium text-right">Lovely Professional Univ.</span>
                  </li>
                  <li className="flex justify-between items-center text-sm border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Location</span>
                    <span className="font-medium text-right">India</span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="text-on-surface-variant">Interest</span>
                    <span className="font-medium text-right">AI & Data Science</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}