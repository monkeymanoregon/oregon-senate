import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Support the Campaign | Tysan for Oregon Senate District 3",
  description: "Support Tysan McClusky's Oregon State Senate District 3 campaign and local community engagement efforts.",
  path: "/donate",
});

export default function DonateLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
