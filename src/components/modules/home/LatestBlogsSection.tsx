// components/home/LatestBlogsSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: string | null;
}

interface LatestBlogsProps {
  blogs: Blog[];
}

const fallbackBlogs: Blog[] = [
  {
    id: "1",
    title: "Top 10 Simple Swaps for a Zero‑Waste Kitchen",
    slug: "zero-waste-kitchen-swaps",
    excerpt:
      "Transform your kitchen with these easy, plastic‑free swaps that save money and the planet.",
    coverImage: null,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "How Community Solar Gardens Are Powering Neighborhoods",
    slug: "community-solar-gardens",
    excerpt:
      "A deep dive into how shared solar projects are democratizing clean energy access.",
    coverImage: null,
    publishedAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "The Rise of Circular Fashion: Brands to Watch in 2026",
    slug: "circular-fashion-2026",
    excerpt:
      "Discover the fashion brands turning waste into wearable art and leading the circular economy.",
    coverImage: null,
    publishedAt: new Date().toISOString(),
  },
];

export function LatestBlogsSection({ blogs }: LatestBlogsProps) {
  // Filter out invalid entries
  const safeBlogs = (blogs || []).filter((b) => b && b.id && b.title);
  const displayBlogs =
    safeBlogs.length > 0 ? safeBlogs.slice(0, 3) : fallbackBlogs;

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 dark:bg-blue-950/50 rounded-2xl mb-4">
              <BookOpen className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Latest from Our Blog
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insights, tips, and stories from the sustainability community
            </p>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayBlogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              {/* Cover Image */}
              <Link
                href={`/blogs/${blog.slug}`}
                className="block relative h-48 overflow-hidden"
                aria-label={blog.title}
              >
                {blog.coverImage ? (
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 flex items-center justify-center">
                    <BookOpen className="w-10 h-10 text-blue-500" />
                  </div>
                )}
              </Link>

              {/* Text Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.publishedAt
                      ? format(new Date(blog.publishedAt), "MMM d, yyyy")
                      : "Recent"}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    EcoSpark Team
                  </span>
                </div>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="group-hover:text-green-600 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                </Link>
                {blog.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                    {blog.excerpt}
                  </p>
                )}
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 mt-auto"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/blogs">
            <Button className="bg-green-600 text-white hover:bg-green-700 gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
