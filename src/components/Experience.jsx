import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "B.Tech in Computer Science",
      institution: "Lovely Professional University",
      date: "2023 - Present",
      desc: "Specializing in Data Science and Machine Learning. Relevant coursework includes Advanced Algorithms, Database Systems, and AI.",
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      title: "Full Stack Development in React and Node.js",
      institution: "LPU",
      date: "Summer 2025",
      desc: "A modern web app for discovering restaurants and exploring food options with a clean, responsive interface and smooth user experience.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative w-full bg-surface-container-low">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase relative inline-block">
            Experience & <span className="text-primary">Education</span>
            <div className="h-1 w-full bg-primary/30 mt-2 rounded-full hidden md:block" />
          </h2>
        </motion.div>

        <div className="relative border-l border-outline-variant/30 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[20px] top-1 w-10 h-10 rounded-full bg-surface-container border border-primary/50 text-primary flex items-center justify-center shadow-[0_0_15px_rgba(129,236,255,0.15)] z-10">
                {exp.icon}
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl border border-outline-variant/10 hover:border-primary/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-headline font-bold text-on-surface">{exp.title}</h3>
                  <span className="text-primary font-label text-xs md:text-sm tracking-widest font-semibold px-4 py-1.5 bg-primary/10 rounded-full w-fit">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-lg text-on-surface-variant font-medium mb-4">{exp.institution}</h4>
                <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
