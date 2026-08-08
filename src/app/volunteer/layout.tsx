import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Volunteer | Tysan for Oregon Senate District 3",
  description: "Volunteer with Tysan McClusky's Oregon State Senate District 3 campaign in Southern Oregon.",
  path: "/volunteer",
});

export default function VolunteerLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
