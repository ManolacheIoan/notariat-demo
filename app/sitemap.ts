import type { MetadataRoute } from "next";
import { servicii } from "@/content/site";
import { SITE_URL } from "@/lib";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", ...servicii.map((s) => `servicii/${s.slug}/`), "confidentialitate/", "cookies/"];
  return pages.map((p) => ({ url: `${SITE_URL}/${p}`, changeFrequency: "monthly", priority: p === "" ? 1 : p.startsWith("servicii") ? 0.8 : 0.3 }));
}
