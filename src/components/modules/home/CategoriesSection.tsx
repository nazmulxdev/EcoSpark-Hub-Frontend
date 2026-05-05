// components/home/CategoriesSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Tag, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  slug: string;
  ideas?: { id: string }[];
  _count?: { ideas: number };
}

interface CategoriesSectionProps {
  categories: Category[];
}

// Realistic fallback – only used when API returns nothing valid
const fallbackCategories: Category[] = [
  {
    id: "1",
    name: "Renewable Energy",
    slug: "renewable-energy",
    _count: { ideas: 42 },
  },
  {
    id: "2",
    name: "Waste Reduction",
    slug: "waste-reduction",
    _count: { ideas: 38 },
  },
  {
    id: "3",
    name: "Water Conservation",
    slug: "water-conservation",
    _count: { ideas: 22 },
  },
  {
    id: "4",
    name: "Sustainable Agriculture",
    slug: "sustainable-agriculture",
    _count: { ideas: 31 },
  },
  {
    id: "5",
    name: "Green Transportation",
    slug: "green-transportation",
    _count: { ideas: 19 },
  },
  { id: "6", name: "Eco‑Fashion", slug: "eco-fashion", _count: { ideas: 15 } },
];

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  // Filter out any invalid entries
  const safeCategories = (categories || []).filter(
    (cat) => cat && typeof cat.name === "string" && cat.slug && cat.id,
  );
  const displayCategories =
    safeCategories.length > 0 ? safeCategories : fallbackCategories;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 dark:bg-amber-950/50 rounded-2xl mb-4">
              <Tag className="w-7 h-7 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Explore Idea Categories
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Browse ideas by topic and find the ones that inspire you most
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {displayCategories.map((cat, idx) => {
            const ideaCount = cat.ideas?.length ?? cat._count?.ideas ?? 0;
            const hasMany = ideaCount > 20;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/ideas?categoryId=${cat.id}`}
                  className="group flex flex-col items-center justify-center bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-5 h-full hover:shadow-xl hover:border-green-400 dark:hover:border-green-700 transition-all duration-300 text-center"
                >
                  {/* Icon container */}
                  <div className="relative mb-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        hasMany
                          ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white"
                          : "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    {hasMany && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white dark:border-zinc-900" />
                    )}
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-1">
                    {cat.name}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-green-600 dark:text-green-400">
                      {ideaCount}
                    </span>
                    <span>idea{ideaCount !== 1 ? "s" : ""}</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link href="/ideas">
            <Button className="bg-green-600 text-white hover:bg-green-700 gap-2">
              Browse All Categories
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
