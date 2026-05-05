// components/home/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "EcoSpark Hub gave me the perfect platform to share my rainwater harvesting idea. The feedback from the community helped me refine it into a real project.",
    name: "Priya Sharma",
    title: "Environmental Scientist",
    avatar: null,
    rating: 5,
  },
  {
    quote:
      "I found affordable, actionable sustainability ideas from experts and was even able to purchase a detailed plan for my home garden. Highly recommended!",
    name: "Marcus Thompson",
    title: "Homeowner & Gardener",
    avatar: null,
    rating: 5,
  },
  {
    quote:
      "The voting system is brilliant — the best ideas naturally rise to the top. It’s a model that truly encourages innovation.",
    name: "Dr. James Wilson",
    title: "Green Tech Consultant",
    avatar: null,
    rating: 5,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 dark:bg-purple-950/50 rounded-2xl mb-4">
              <Quote className="w-7 h-7 text-purple-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              What Our Community Says
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Real stories from people making real change
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <StarRating count={testimonial.rating} />
              <blockquote className="mt-4 text-gray-700 dark:text-gray-300 italic leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
