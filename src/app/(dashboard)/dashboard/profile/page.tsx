import { ProfileClient } from "@/components/modules/profile/ProfileClient";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/actions/client/auth.client";

export const metadata = {
  title: "My Profile | EcoSpark Hub",
  description: "View and update your profile information",
};

export default async function ProfilePage() {
  const result = await getAuthSession();

  if (result.error || !result.data) {
    return redirect("/login");
  }

  const user = result.data?.user;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <ProfileClient
        user={{
          name: user.name || "User",
          email: user.email,
          role: user.role,
          image: user.image,
          createdAt: user.createdAt,
        }}
      />
    </div>
  );
}
