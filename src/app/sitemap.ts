import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const routes = [
  "/",
  "/about",
  "/apply",
  "/blog",
  "/contact",
  "/conversations",
  "/events",
  "/gallery",
  "/mentorship",
  "/partners",
  "/referral",
  "/sponsor",
  "/terms",
  "/privacy",
  "/volunteer",
  "/workshops",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/events" || route === "/about" ? 0.9 : 0.8,
  }));
}
