import type { MetadataRoute } from "next";
import { SOLUTION_SLUGS } from "@/lib/solutionDetails";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lsmcompanyp.co.mz";

export default function sitemap(): MetadataRoute.Sitemap {
  const solutionPages = SOLUTION_SLUGS.map((slug) => ({
    url: `${siteUrl}/solucoes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...solutionPages,
  ];
}
