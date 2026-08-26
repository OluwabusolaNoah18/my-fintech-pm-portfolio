import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1n-zSivRDoh9bTf2yBeR4TpGJuzrqbtXZ/view";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between border-b border-border pb-10 md:pb-14 mb-16 md:mb-20 gap-8"
        >
          <div className="space-y-5 max-w-3xl">
            <p className="editorial-eyebrow">Product Portfolio · 2026</p>
            <h1 className="font-serif italic leading-[0.9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary">
              Product Manager
            </h1>
          </div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.08] mb-10">
            I used to study cells under a microscope.{" "}
            <span className="text-accent italic">Now I study how money moves</span> and build the products that move it.
          </h2>

          <div className="flex flex-wrap gap-4 mt-12">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-accent transition-colors"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 border border-border px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" /> Contact
            </button>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" /> Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
