"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly: name, email address, and any content you submit (ideas, comments). We also automatically collect usage data like IP address, browser type, and pages visited to improve our service.",
  },
  {
    icon: Lock,
    title: "2. How We Use Your Information",
    content:
      "Your data is used to provide and personalize our platform, process transactions, send relevant notifications, and ensure community safety. We do not sell your personal information to third parties.",
  },
  {
    icon: Shield,
    title: "3. Data Security",
    content:
      "We employ industry‑standard security measures including encryption at rest and in transit, regular audits, and strict access controls. Your credentials are hashed and never stored in plain text.",
  },
  {
    icon: FileText,
    title: "4. Third‑Party Services",
    content:
      "We use trusted providers such as Stripe for payments and Google for authentication. Each has its own privacy policy. We encourage you to review them.",
  },
  {
    icon: Shield,
    title: "5. Changes to This Policy",
    content:
      "We may update this policy periodically. We will notify users of significant changes via email and a prominent notice on our website. Continued use implies acceptance.",
  },
];

export function PrivacyClient() {
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
              <Shield className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Your privacy is our priority. Learn how we handle your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center">
                  <section.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10"
        >
          Last updated: January 2026
        </motion.p>
      </div>
    </div>
  );
}
