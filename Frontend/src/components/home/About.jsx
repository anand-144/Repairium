import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-20 h-20 rounded-2xl 
             bg-gradient-to-br from-yellow-300 via-amber-200 to-amber-500 
             flex items-center justify-center mx-auto mb-6 
             shadow-lg shadow-[0_0_20px_rgba(255,215,0,0.4)]"
          >
            <Heart
              size={30}
              className="text-white fill-red-500 stroke-[1.5]"
            />
          </motion.div>

          {/* Heading */}
          <span className="text-primary font-semibold text-sm uppercase tracking-[0.2em]">
            About
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6">
            About Repairium
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Repairium connects you with skilled, verified technicians for all your home appliance needs.
            We ensure quality service, fast response, and 100% customer satisfaction — every single time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;