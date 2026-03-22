import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    { value: "100+", label: "Problems Solved on LeetCode" },
    { value: "3+", label: "Major Projects Completed" },
    { value: "10+", label: "Certifications Earned" }
  ];

  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto text-center w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase relative inline-block">
          Achievements
          <div className="h-1 w-20 bg-primary mt-2 mx-auto rounded-full" />
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 glass-card rounded-3xl border border-outline-variant/10 hover:border-primary/30 transition-all hover:bg-surface-container-low"
          >
            <h3 className="text-5xl md:text-6xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-[0_0_15px_rgba(129,236,255,0.3)] mb-4">{item.value}</h3>
            <p className="text-on-surface-variant text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
