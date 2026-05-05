"use client";

import { motion } from "framer-motion";

export default function ProfileLoading() {
  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-8 space-y-6">
      {/* Header Skeleton */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse" />
        <div>
          <div className="h-8 w-32 bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
          <div className="h-4 w-48 bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse mt-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info Card Skeleton */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse mb-4" />
            <div className="h-6 w-24 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
            <div className="h-5 w-20 bg-gray-200 dark:bg-zinc-800 rounded-full animate-pulse" />
          </div>
          <div className="mt-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-zinc-800 animate-pulse" />
                <div>
                  <div className="h-3 w-16 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-1" />
                  <div className="h-4 w-32 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Skeleton */}
        <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm">
          <div className="h-6 w-24 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-6" />
          <div className="space-y-6">
            <div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
              <div className="h-12 w-full bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            </div>
            <div>
              <div className="h-4 w-20 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse mb-2" />
              <div className="h-12 w-full bg-gray-200 dark:bg-zinc-800 rounded-lg animate-pulse" />
            </div>
            <div className="h-12 w-32 bg-gray-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <div className="bg-white dark:bg-zinc-900 rounded-full shadow-lg p-3 flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-5 h-5 border-2 border-green-500 border-t-transparent rounded-full" />
          </motion.div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Loading profile...
          </span>
        </div>
      </motion.div>
    </div>
  );
}
