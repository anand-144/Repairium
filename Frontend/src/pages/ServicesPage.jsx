import React from "react";
import { motion } from "framer-motion";
import {
  Snowflake, Tv, WashingMachine, Refrigerator, Microwave,
  Droplets, Flame, Wind, UtensilsCrossed, Sparkles, Shield,
} from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

const allServices = [
  { title: "Refrigerator", icon: Refrigerator, desc: "Compressor, thermostat, leaks & cooling" },
  { title: "Washing Machine", icon: WashingMachine, desc: "Drum, motor, drainage & spin" },
  { title: "Air Conditioner", icon: Snowflake, desc: "Gas refill, cooling & compressor" },
  { title: "Microwave Oven", icon: Microwave, desc: "Heating, turntable & magnetron" },
  { title: "Television", icon: Tv, desc: "Screen, sound & display issues" },
  { title: "Water Purifier", icon: Droplets, desc: "Filter, RO membrane & leaks" },
  { title: "Geyser", icon: Flame, desc: "Heating element & thermostat" },
  { title: "Kitchen Chimney & Hob", icon: Wind, desc: "Suction, motor & auto-clean" },
  { title: "Dishwasher", icon: UtensilsCrossed, desc: "Spray arm, drainage & cycles" },
  { title: "Vacuum Cleaner", icon: Sparkles, desc: "Suction power, filter & motor" },
  { title: "Smart Home Devices", icon: Shield, desc: "Cameras, locks, plugs & switches" },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <Navbar />

      {/* Hero */}
      <section
        className="pt-28 pb-20 relative overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(160 84% 39%) 1px, transparent 1px), linear-gradient(90deg, hsl(160 84% 39%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 right-[10%] w-64 h-64 rounded-full blur-[120px] opacity-20"
          style={{ background: "hsl(160 84% 39%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            All <span className="text-gradient">Services</span>
          </motion.h1>

          <motion.p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Expert repair for every appliance in your home
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Increased gap for premium feel */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {allServices.map((s, i) => {
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
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;