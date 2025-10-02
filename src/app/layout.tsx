import { dmSans, syne } from "@/Font/font";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

export const metadata = {
  title: "Best Video Editor and Motion Graphics Artist in Sylhet - Badhan Sen",
  description:
    "Looking for the best video editor and motion graphics artist in Sylhet? Badhan Sen offers professional video editing, motion design, visual effects, and creative storytelling services for businesses, brands, and creators.",
  keywords:
    "Video Editor Sylhet, Motion Graphics Artist Sylhet, Badhan Sen, Freelance Video Editor Bangladesh, VFX, Visual Effects, Video Editing Services, Motion Design, Content Creator, Film Editing, Advertisement Editing",
  metadataBase: new URL("https://www.badhansen.info"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title:
      "Best Video Editor and Motion Graphics Artist in Sylhet - Badhan Sen",
    description:
      "Hire Badhan Sen – a professional video editor and motion graphics artist in Sylhet. Specializing in creative editing, VFX, and high-quality motion design.",
    url: "https://www.badhansen.info",
    siteName: "Badhan Sen",
    images: [
      {
        url: "/assets/Meta/default-blog.png",
        width: 1200,
        height: 630,
        alt: "Badhan Sen - Video Editor and Motion Graphics Artist in Sylhet",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Video Editor and Motion Graphics Artist in Sylhet - Badhan Sen",
    description:
      "Professional video editing & motion graphics artist in Sylhet – Badhan Sen. Creative storytelling, VFX, and editing services for businesses & creators.",
    images: ["/assets/Meta/default-blog.png"],
    site: "@badhansen_info",
  },
  alternates: {
    canonical: "https://www.badhansen.info",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="EDB774340D02F44548EC738538CA1E21" />
        <meta name="yandex-verification" content="17f79236efa3b02e" />
      </head>
      <body
        className={`${dmSans.variable} ${syne.variable} antialiased font-dm-sans`}
      >
        <LayoutWrapper>
          <main>{children}</main>
        </LayoutWrapper>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
