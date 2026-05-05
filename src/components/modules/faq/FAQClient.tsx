"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is EcoSpark Hub?",
    a: "EcoSpark Hub is a community‑driven platform where individuals share, discover, and vote on sustainability ideas. Anyone can explore, and members can publish and even monetize their ideas.",
  },
  {
    q: "How do I create an idea?",
    a: "Sign up for a free member account, go to your dashboard, and click 'New Idea'. Add a description, images, category, and set the access level (free, paid, or member‑only).",
  },
  {
    q: "Is there a cost to use the platform?",
    a: "Browsing and basic participation are free. Premium access (publishing paid ideas and unlocking member‑only content) requires a membership at $20/month. You can also buy individual paid ideas.",
  },
  {
    q: "Can I sell my sustainability ideas?",
    a: "Absolutely! When you publish a paid idea, you set a price. Members can purchase it, and you earn revenue (minus a small platform fee). Payments are handled securely through Stripe.",
  },
  {
    q: "How does the voting system work?",
    a: "Each user can upvote ideas they like. Votes help rank ideas on the Explore page. The most upvoted ideas gain visibility and can even earn featured status.",
  },
  {
    q: "What if I find inappropriate content?",
    a: "You can report any idea or comment. Our admin team reviews reports promptly and takes action according to our community guidelines.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes, you can cancel anytime from your account settings. Your access will continue until the end of the current billing period.",
  },
];

export function FAQClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-95" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl backdrop-blur-md mb-6">
              <HelpCircle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">FAQ</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Quick answers to the most common questions about EcoSpark Hub.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
