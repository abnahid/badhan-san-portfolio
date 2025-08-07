import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { dmSans, syne } from "@/Font/font";
import "./globals.css";

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
        <Navbar />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
