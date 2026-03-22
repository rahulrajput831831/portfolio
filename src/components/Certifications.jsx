import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Stock Market for Beginners",
      platform: "Udemy",
      link: "https://www.udemy.com/certificate/UC-95a0fb49-4563-4377-8e23-dbead777bcd7/"
    },
    {
      title: "Privacy and Security in Online Social Media",
      platform: "NPTEL",
      link: "https://github.com/rahulrajput831/Certificate/blob/main/Privacy%20and%20Security%20in%20Online%20Social%20Media%20(3).pdf"
    },
    {
      title: "Responsive Web Design",
      platform: "FreeCodeCamp",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-6 w-full">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter uppercase relative inline-block">
            Certifications
            <div className="h-1 w-20 bg-primary mt-2 mx-auto rounded-full text-center" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-surface-container rounded-3xl border border-outline-variant/10 hover:border-primary/50 transition-all duration-300 flex flex-col items-center group hover:-translate-y-2 hover:shadow-[0_15px_30px_-15px_rgba(0,229,255,0.15)] content-between text-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              
              <div className="flex-1 w-full flex flex-col items-center">
                <h3 className="text-xl font-headline font-bold mb-2 text-on-surface">{cert.title}</h3>
                <p className="text-on-surface-variant mb-8 text-sm">{cert.platform}</p>
              </div>
              
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-2.5 text-xs font-label font-bold uppercase tracking-widest bg-surface-container-highest border border-outline-variant/20 rounded-full text-on-surface hover:bg-primary hover:text-surface transition-colors flex items-center gap-2"
              >
                View <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
