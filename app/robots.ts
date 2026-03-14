import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog",
          "/labs",
          "/pricing",
          "/about",
          "/ContactUs",
          "/help-center",
          "/privacy-policy",
          "/terms-and-conditions",
          "/refund-policy",
          "/cancellation-policy",
          "/shipping-and-delivery",
          "/legal-information",
          "/team-devs",
        ],
        disallow: [
          "/admin",
          "/admin/",
          "/lawyer",
          "/lawyer/",
          "/onboarding",
          "/cases",
          "/legal-advice",
          "/video-call",
          "/lawyers/",
        ],
      },
    ],
    sitemap: "https://www.Justifi.co.in/sitemap.xml",
  };
}