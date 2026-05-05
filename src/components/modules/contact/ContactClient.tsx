"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl backdrop-blur-md mb-6">
              <MessageSquare className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let&apos;s Talk
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We&apos;re here to help. Reach out for support, partnerships, or
              just to say hello.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 md:p-10 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name
                </label>
                <Input placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <Input type="email" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <Input placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition outline-none"
                />
              </div>
              <Button className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg shadow-green-500/25">
                <Send className="w-4 h-4 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email",
                detail: "support@ecosparkhub.com",
                desc: "We reply within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "+1 (555) 123-4567",
                desc: "Mon-Fri 9am-6pm EST",
              },
              {
                icon: MapPin,
                title: "Office",
                detail: "123 Green Street, Eco City",
                desc: "Visit by appointment",
              },
              {
                icon: Clock,
                title: "Working Hours",
                detail: "Monday - Friday",
                desc: "9:00 AM - 6:00 PM EST",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 flex items-center gap-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-950 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {item.detail}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
