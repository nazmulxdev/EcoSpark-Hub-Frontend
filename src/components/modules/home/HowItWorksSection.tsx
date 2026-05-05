// components/home/HowItWorksSection.tsx
"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Share Your Idea",
    description:
      "Have a sustainability concept? Post it on EcoSpark Hub in minutes. Add details, images, and set your preferred access level.",
    icon: Lightbulb,
  },
  {
    step: "02",
    title: "Community Votes & Feedback",
    description:
      "The community reviews your idea, votes, and leaves constructive comments to help refine and improve it.",
    icon: Users,
  },
  {
    step: "03",
    title: "Make Real Impact",
    description:
      "Top ideas gain visibility, attract supporters, and can even be monetized. Together we turn ideas into action.",
    icon: TrendingUp,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 dark:bg-green-950/50 rounded-2xl mb-4">
              <TrendingUp className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              How It Works
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Three simple steps to start making a difference
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {step.step}
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg mb-5 mt-2">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
