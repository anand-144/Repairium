import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Snowflake, Tv, WashingMachine, Refrigerator, ArrowRight } from "lucide-react";

const previewServices = [
  { title: "AC Repair", icon: Snowflake, desc: "Cooling issues, gas refill & maintenance" },
  { title: "Washing Machine", icon: WashingMachine, desc: "Drum, motor & drainage fixes" },
  { title: "Refrigerator", icon: Refrigerator, desc: "Compressor, thermostat & leak repair" },
  { title: "TV Repair", icon: Tv, desc: "Screen, sound & display issues" },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
            What We Fix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3">
            Our Popular Services
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewServices.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="relative bg-slate-100 rounded-2xl p-7 cursor-pointer group overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300"
              >

                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/10 via-transparent to-primary/10 blur-xl" />

                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition" />

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gray-500 text-white flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 text-lg font-display font-bold text-foreground mb-2 group-hover:text-primary transition">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-sm text-muted-foreground mb-4">
                  {s.desc}
                </p>

                {/* Hover CTA */}
                <div className="relative z-10 flex items-center text-primary text-sm font-medium transition-all duration-300">
                  Explore
                  <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.div className="text-center mt-14">
          <button
            onClick={() => navigate("/services")}
            className="group inline-flex items-center gap-2 
                       bg-gradient-to-r from-white/80 to-slate-400 
                       text-black px-7 py-3 rounded-xl font-semibold 
                       hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            View All Services
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;