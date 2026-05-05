"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertCircle } from "lucide-react";

const terms = [
  {
    icon: CheckCircle,
    title: "1. Acceptance of Terms",
    content:
      "By creating an account or using EcoSpark Hub, you agree to be bound by these Terms of Service. If you disagree, please discontinue use immediately.",
  },
  {
    icon: FileText,
    title: "2. User Conduct",
    content:
      "You are solely responsible for the content you post. Ideas must be original, respectful, and related to sustainability. Harassment, spam, hate speech, and illegal material are strictly forbidden.",
  },
  {
    icon: AlertCircle,
    title: "3. Intellectual Property",
    content:
      "You retain ownership of your ideas and content. By posting, you grant EcoSpark Hub a worldwide, non‑exclusive license to display and distribute your content on the platform. You may delete your content at any time.",
  },
  {
    icon: FileText,
    title: "4. Payments and Refunds",
    content:
      "Some ideas require a one‑time fee or membership. All payments are processed via Stripe. Paid ideas are non‑refundable once accessed. Memberships are billed monthly and can be canceled at any time; no refunds for the current billing cycle.",
  },
  {
    icon: AlertCircle,
    title: "5. Limitation of Liability",
    content:
      "EcoSpark Hub is not liable for the accuracy, legality, or quality of user‑generated content. Use the platform at your own risk. We reserve the right to remove content and suspend accounts that violate these terms.",
  },
  {
    icon: CheckCircle,
    title: "6. Changes to Terms",
    content:
      "We may update these terms from time to time. We will notify users via email or a site‑wide announcement. Continued use after changes constitutes acceptance.",
  },
];

export function TermsClient() {
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
              <FileText className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="space-y-6">
          {terms.map((term, idx) => (
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
                  <term.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {term.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {term.content}
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
          Effective date: January 1, 2026
        </motion.p>
      </div>
    </div>
  );
}
