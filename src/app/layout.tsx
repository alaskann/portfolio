import { inter, vt323 } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";

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
          <div className="w-full max-w-[208px] bg-red-300">
            <div className="w-full h-full sticky top-0 flex">asdasd</div>
          </div>
          <div className="max-w-4xl w-full bg-green-300">{children}</div>
          <div className="w-full max-w-[208px] bg-purple-300">right nav</div>
        </div>
      </body>
    </html>
  );
}
