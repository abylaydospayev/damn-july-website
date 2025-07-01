import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/SplashCursor"; // Import the cursor

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Damn Labs",
  description: "Innovating the Future of Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {/* SplashCursor renders here to cover the whole screen */}
        <SplashCursor /> 
        {children}
      </body>
    </html>
  );
}