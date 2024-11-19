import { inter, vt323 } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { SideNav } from "./_components/side-nav";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: "Jason Procka | Portfolio",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${vt323.variable} antialiased`}>
        <div className="flex justify-center min-h-screen">
          <div className="w-full max-w-[234px]">
            <SideNav />
          </div>
          <div className="max-w-2xl w-full">
            <div className="min-h-screen">{children}</div>
            <Footer />
          </div>
          <div className="w-full max-w-[234px] "></div>
        </div>
      </body>
    </html>
  );
}
