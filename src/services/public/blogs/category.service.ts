import { env } from "@/config/env";

export const categoryServicePublic = {
  getAllCategories: async function (queryParams?: string) {
    try {
      const url = `${env.API_URL}/category${queryParams ? `?${queryParams}` : ""}`;
      const res = await fetch(url, {
        next: { revalidate: 3600 },
      });
      const data = await res.json();

      if (!data.success) {
        return { data: null, error: data.error };
      }

      return { data: data.data, error: null };
    } catch (error) {
      console.error(error);
      return { data: null, error };
    }
  },
};
