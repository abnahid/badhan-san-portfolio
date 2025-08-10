import { dmSans, syne } from "@/Font/font";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${syne.variable} antialiased font-dm-sans`}
      >
        <LayoutWrapper>
          <main>{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
