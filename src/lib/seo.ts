import type { Metadata } from "next";

export const SITE_URL = "https://voteor3.com";
export const SITE_NAME = "Tysan for Oregon State Senate District 3";
export const CANDIDATE_NAME = "Tysan McClusky";
export const SEO_REVIEW_DATE = "2026-08-08";
export const ISSUE_PUBLISHED_DATE = "2026-06-04";

const issueTitleOverrides: Record<string, string> = {
  "housing-homelessness-affordability": "Housing & Homelessness in Jackson County | District 3",
  "cost-of-living-taxes": "Oregon Cost of Living & Taxes | Senate District 3",
  "healthcare-mental-health-addiction": "Healthcare, Mental Health & Addiction in Southern Oregon | District 3",
  "public-safety-justice": "Public Safety & Justice in Jackson County | District 3",
  "education-youth-workforce": "Education & Workforce in Southern Oregon | District 3",
  "transportation-infrastructure": "Southern Oregon Roads & Transportation | Senate District 3",
  "wildfire-drought-water": "Southern Oregon Wildfire, Water & Drought | District 3",
  "urban-growth-boundary": "Urban Growth Boundaries & Housing in Southern Oregon | District 3",
  "emergency-shelters-housing": "Homeless Shelters & Housing in Jackson County | District 3",
  "property-taxes": "Jackson County Oregon Property Taxes & Local Levies | District 3",
  "small-business-regulations": "Oregon Small Business Taxes & Regulations | District 3",
  "addiction-services": "Fentanyl & Addiction Services in Jackson County | District 3",
  "rural-healthcare-access": "Rural Healthcare in Southern Oregon | Senate District 3",
  "retail-theft-crime": "Retail Theft & Crime in Medford & Jackson County | District 3",
  "career-technical-education": "Career & Technical Education in Southern Oregon | District 3",
  "road-funding-gas-tax": "Oregon Gas Tax & Road Funding: 2026 Update | District 3",
  wildfires: "Southern Oregon Wildfire & Forest Management | District 3",
  "water-rights-drought": "Jackson County Drought & Oregon Water Rights | District 3",
};

export function issueSeoTitle(id: string, fallback: string): string {
  return issueTitleOverrides[id] ?? `${fallback} | Oregon Senate District 3`;
}

export function issueDescription(title: string): string {
  return `A balanced, sourced guide to ${title.toLowerCase()} for Oregon Senate District 3, with Southern Oregon context, community perspectives, related legislation, and a way for residents to weigh in.`;
}

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}/candidate_hero.jpg`,
          width: 400,
          height: 400,
          alt: `${CANDIDATE_NAME}, candidate for Oregon State Senate District 3`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/candidate_hero.jpg`],
    },
  };
}

export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
