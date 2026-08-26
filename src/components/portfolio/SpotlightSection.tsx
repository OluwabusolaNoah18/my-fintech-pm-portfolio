import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Download } from "lucide-react";

const CV_URL = "https://drive.google.com/file/d/1ocDuxu-2kcxNvZtrjkEhbGY_iHiuR01E/view?usp=drive_link";

const SpotlightSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding pt-0" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="md:col-span-8"
          >
            <div className="flex flex-wrap gap-10 mb-12">
              {[
                { v: "32.5%", l: "Merchant Base Growth" },
                { v: "40%", l: "Blocker Reduction / Sprint" },
                { v: "2,000+", l: "Learners Mentored" },
              ].map((m) => (
                <div key={m.l} className="border-l border-primary pl-5">
                  <p className="font-serif text-3xl md:text-4xl text-foreground">{m.v}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1.5">{m.l}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4"
          >
            <div className="bg-card border border-border/70 p-8 h-full flex flex-col justify-between">
              <div>
                <p className="editorial-eyebrow mb-8">Recent Spotlight</p>
                <p className="font-serif italic text-2xl md:text-3xl mb-4 leading-tight text-foreground">
                  Pay with Transfer & Wallet Infrastructure
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Hypothesis: cutting card dependency and giving merchants native transfer visibility grows the acquiring base faster than any single UX fix.
                </p>
              </div>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-accent mt-10 self-start"
              >
                Read Case Study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
