"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw, Home, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const pathname = usePathname();
  const dashboardRoot = pathname.includes("/admin")
    ? "/admin/dashboard"
    : pathname.includes("/member")
      ? "/member/dashboard"
      : "/dashboard";

  useEffect(() => {
    console.error("Profile page error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-950/50 rounded-2xl mb-6"
        >
          <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-500" />
        </motion.div>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          Failed to Load Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {error.message ||
            "An unexpected error occurred while loading your profile."}
        </p>

        <div className="bg-red-50 dark:bg-red-950/30 rounded-xl p-4 mb-6">
          <p className="text-sm text-red-700 dark:text-red-400 font-mono break-all">
            {error.stack?.split("\n")[0] || "Unknown error"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-md"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href={dashboardRoot}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-zinc-700 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          <User className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-400">Profile Management</span>
        </div>
      </motion.div>
    </div>
  );
}
