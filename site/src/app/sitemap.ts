import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maxgorin.com";

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/scholarship`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog/proven-ways-to-get-admitted-into-college`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/7-ways-to-improve-your-decision-making-process`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/blog/top-10-ways-to-run-your-business`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
