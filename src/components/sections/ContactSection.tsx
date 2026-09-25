import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden px-4 md:px-0">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-sm mb-6 uppercase tracking-widest"
        >
          03. What's Next?
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <a
            href="mailto:victorzion1@gmail.com"
            className="group relative inline-block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black text-foreground hover:text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary transition-all duration-500 mb-8 max-w-full"
          >
            <span className="relative">
              Let's Talk
              <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2 md:group-hover:translate-x-4 md:group-hover:-translate-y-4 transition-all duration-500 absolute -right-8 sm:-right-12 md:-right-20 top-0 sm:top-2 md:top-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 hidden sm:block" />
            </span>
          </a>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 md:mb-12"
        >
          I'm always open to new opportunities, collaborations, or just a good conversation about AI, backend systems, or navigating a tech career.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="mailto:victorzion1@gmail.com"
            className="inline-block bg-primary text-primary-foreground px-8 md:px-10 py-4 md:py-5 rounded-full font-heading font-bold text-base md:text-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(56,189,248,0.5)] md:shadow-[0_0_30px_-10px_rgba(56,189,248,0.5)]"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
