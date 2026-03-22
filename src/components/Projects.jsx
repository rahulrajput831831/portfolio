import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "FORKFINDR – Food Discovery",
      desc: "A full-stack food discovery platform where users can explore restaurants, apply filters, and place orders powered by a dynamic React-based frontend for fast and interactive performance.",
      tech: ["React", "Node.js", "MongoDB"],
      img: "/projects/forkfindr.jpeg",
      github: "https://github.com/rahulrajput831831/FORK-FINDR",

      span: "md:col-span-8",
      aspect: "aspect-video"
    },
    {
      title: "ChurnSense – Prediction",
      desc: "An end-to-end machine learning project predicting customer churn. Integrated Explainable AI (SHAP) to identify key factors influencing churn.",
      tech: ["Python", "ML", "Scikit"],
      img: "/projects/churn.jpeg",
      github: "https://github.com/rahulrajput831831/CUSTOMER-CHURN-PREDICTION",

      span: "md:col-span-4",
      aspect: "aspect-square"
    },
    {
      title: "StockPrediction – Forecasting",
      desc: "Developed a Python-based ETL pipeline to process stock market data and applied ML + ARIMA models for price forecasting. Built an interactive Power BI dashboard to visualize trends, predictions, and insights for decision-making.",
      tech: ["Python", "Power BI"],
      img: "/projects/stock.jpeg",
      github: "https://github.com/rahulrajput831831/Stock-Market-ETL-Pipeline-with-Forecasting-Analytics",

      span: "md:col-span-12",
      aspect: "aspect-[21/9] md:aspect-[21/7]"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-surface-container-lowest w-full relative">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-4 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase relative inline-block">
            Selected <span className="text-primary">Works</span>
            <div className="h-1 w-full bg-primary/30 mt-2 rounded-full hidden md:block" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full relative">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`${p.span} group relative overflow-hidden rounded-2xl glass-card border border-outline-variant/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_15px_40px_-15px_rgba(129,236,255,0.2)] flex flex-col`}
            >
              <div className={`${p.aspect} w-full overflow-hidden bg-surface-dim relative`}>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  alt={p.title}
                  src={p.img}
                />
              </div>
              <div className="p-8 space-y-4 relative z-10 bg-surface-container/95 backdrop-blur flex-grow flex flex-col justify-between border-t border-outline-variant/10 group-hover:bg-surface-container-highest transition-colors duration-500">
                <div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface">{p.title}</h3>
                  <p className="text-on-surface-variant mt-3 text-sm leading-relaxed">{p.desc}</p>
                </div>

                <div className="space-y-6 pt-4">
                  <div className="flex gap-2 flex-wrap">
                    {p.tech.map((t, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-surface-container border border-outline-variant/20 text-[10px] tracking-widest uppercase font-label text-primary shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-on-surface text-surface font-label text-sm uppercase tracking-wide font-bold hover:bg-primary transition-colors hover:scale-105 active:scale-95 shadow-md"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 text-on-surface font-label text-sm uppercase tracking-wide font-bold hover:border-primary/50 transition-colors hover:scale-105 active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}