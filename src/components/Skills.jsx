import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

export default function Skills() {
  const skillsList = [
    "Java", "C++", "Python", "JavaScript", 
    "React", "HTML", "CSS", "Scikit-Learn", 
    "Power BI", "Excel", "Jupyter Note...", "VS Code"
  ];

  const stats = [
    { label: "Data Science & Machine Learning", percent: "95%" },
    { label: "Full-Stack Web Development", percent: "88%" },
    { label: "Algorithms & Problem Solving", percent: "92%" }
  ];

  return (
    <section id="skills" className="py-32 px-6 w-full bg-surface-container-low">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase mb-8 relative inline-block text-center md:text-left w-full">
            Technical <span className="text-primary">Mastery</span>
            <div className="h-1 w-[80%] bg-primary/30 mt-2 rounded-full hidden md:block" />
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-12 text-center md:text-left">
            Leveraging a modern tech stack encompassing robust programming languages, dynamic web tools, and advanced ML frameworks.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {skillsList.map((skill, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-5 py-3 rounded-xl bg-surface-container border border-outline-variant/10 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(129,236,255,0.15)] transition-all flex items-center gap-2 cursor-default group"
              >
                <Code2 className="text-primary w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-headline font-bold text-sm tracking-wide text-on-surface">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12 bg-surface-container-highest/20 p-8 rounded-3xl border border-outline-variant/5 shadow-xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="space-y-3">
              <div className="flex justify-between font-label text-sm tracking-widest uppercase text-on-surface font-semibold">
                <span>{stat.label}</span>
                <span className="text-primary">{stat.percent}</span>
              </div>
              <div className="h-3 w-full bg-surface-container-highest relative rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.percent }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}