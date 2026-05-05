// components/home/NewsletterSection.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with your newsletter API
    console.log("Subscribe:", email);
    setSubscribed(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get monthly updates on trending ideas, new sustainability tips, and
            community stories delivered to your inbox.
          </p>

          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white"
                required
              />
              <Button
                type="submit"
                className="h-12 px-6 bg-white text-green-600 hover:bg-gray-100 gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-medium">
                Thanks for subscribing!
              </span>
            </div>
          )}

          <p className="text-sm text-white/70 mt-4">
            No spam, unsubscribe anytime. Read our&nbsp;
            <a href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
