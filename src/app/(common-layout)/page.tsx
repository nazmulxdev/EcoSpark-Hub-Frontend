export const dynamic = "force-dynamic";

import { FeaturesSection } from "@/components/modules/home/FeaturesSectin";
import { CTASection } from "@/components/modules/home/CTASection";
import { HeroSlider } from "@/components/modules/home/HeroSlider";
import { FeaturedIdeas } from "@/components/modules/home/FeaturedIdeas";
import { getAllIdeasPublic } from "@/actions/client/idea.client";
import { CommunityImpactSection } from "@/components/modules/home/CommunityImpactSection";
import {
  getAllBlogsPublic,
  getAllCategoriesPublic,
} from "@/actions/client/public.client";
import { HowItWorksSection } from "@/components/modules/home/HowItWorksSection";
import { CategoriesSection } from "@/components/modules/home/CategoriesSection";
import { LatestBlogsSection } from "@/components/modules/home/LatestBlogsSection";
import { TestimonialsSection } from "@/components/modules/home/TestimonialsSections";

export const metadata = {
  title: "EcoSpark Hub | Share & Discover Sustainability Ideas",
  description:
    "Join our community to share eco-friendly ideas, vote on solutions, and make a difference for our planet.",
};

export default async function HomePage() {
  const result = await getAllIdeasPublic(1, 8, "", "true");
  const ideas = result.data?.data || [];

  const categoriesResult = await getAllCategoriesPublic();
  const categories = categoriesResult.data?.data || categoriesResult.data || [];
  const blogsResult = await getAllBlogsPublic(1, 3, "", "true");
  const blogs = blogsResult.data?.data || [];
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <FeaturedIdeas ideas={ideas} />
      <HowItWorksSection />
      <CategoriesSection categories={categories} />
      <CommunityImpactSection />
      <FeaturesSection />
      <LatestBlogsSection blogs={blogs} />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
