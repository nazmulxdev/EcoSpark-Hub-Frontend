"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Shield,
  Calendar,
  CheckCircle,
  Save,
  Loader2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { authClientService } from "@/services/auth/auth.service.client";
import { format } from "date-fns";

interface ProfileClientProps {
  user: {
    name: string;
    email: string;
    role: string;
    image?: string | null;
    createdAt?: string;
  } | null;
}

export function ProfileClient({ user }: ProfileClientProps) {
  const [name, setName] = useState(user?.name || "");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    setIsSaving(true);
    try {
      // ✅ Call the client service, not the server one
      await authClientService.updateProfile({ name: name.trim() });
    } catch (error) {
      console.error(error);
      toast.error("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  const formatRole = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "Administrator";
      case "MEMBER":
        return "Premium Member";
      default:
        return "User";
    }
  };

  return (
    <div className="max-w-full mx-auto px-3 sm:px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
            {user?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              My Profile
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your personal information
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="lg:col-span-1 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 shadow-sm"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-3xl mb-4">
                {user?.name?.[0]?.toUpperCase() || "U"}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                {user?.name || "User"}
              </h2>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-400">
                <Shield className="w-3 h-3" />
                {formatRole(user?.role || "USER")}
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user?.email || "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Member since
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {user?.createdAt
                      ? format(new Date(user.createdAt), "MMMM yyyy")
                      : "N/A"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-gray-500 dark:text-gray-400">
                    Account status
                  </p>
                  <p className="font-medium text-green-600 dark:text-green-400">
                    Active
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Edit Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 p-6 sm:p-8 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Edit Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Display Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your display name"
                    className="pl-10 h-12"
                    aria-label="Display name"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  This name will be shown on your ideas, comments, and public
                  profile.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    value={user?.email || ""}
                    disabled
                    className="pl-10 h-12 bg-gray-50 dark:bg-zinc-800 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Email cannot be changed directly. Contact support for updates.
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSaving || !name.trim()}
                className="w-full sm:w-auto px-8 h-12 bg-green-600 hover:bg-green-700 text-white font-medium disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
