import { NextResponse } from "next/server";

export function GET() {
  const robotsTxt = `User-agent: *
Allow: /
Allow: /about
Allow: /portfolio
Allow: /contact

# Block private/admin areas
Disallow: /dashboard
Disallow: /dashboard/*
Disallow: /auth
Disallow: /auth/*
Disallow: /api/*

# Block common files that shouldn't be indexed
Disallow: /_next/
Disallow: /public/
Disallow: *.json$

# Sitemap location
Sitemap: https://www.badhansen.info/sitemap.xml

# Crawl delay (optional - helps prevent overwhelming the server)
Crawl-delay: 1`;

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
