import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Default font import

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Damn July', // Minimal title
  description: 'The future of software solutions.', // Minimal description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}