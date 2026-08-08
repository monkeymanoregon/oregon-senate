import type { MetadataRoute } from "next";
import { issuesData } from "@/data/issues";
import { communitiesData } from "@/data/communities";
import { SEO_REVIEW_DATE, SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/about",
    "/platform",
    "/issues",
    "/bills",
    "/how-it-works",
    "/volunteer",
    "/donate",
    "/oregon-senate-district-3",
    "/district-3-updates",
    "/communities",
  ];

  const communityPaths = communitiesData.map((c) => `/communities/${c.id}`);

  const issuePaths = issuesData.flatMap((issue) => [
    `/issues/${issue.id}`,
    ...(issue.spokes?.map((spoke) => `/issues/${issue.id}/${spoke.id}`) ?? []),
  ]);

  return [...staticPaths, ...communityPaths, ...issuePaths].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: SEO_REVIEW_DATE,
    changeFrequency: path === "/district-3-updates" || path.startsWith("/issues/") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/issues" || path === "/oregon-senate-district-3" || path === "/communities" ? 0.9 : 0.7,
  }));
}
