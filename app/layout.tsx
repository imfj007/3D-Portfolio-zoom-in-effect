import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Muhammad Faizan | Web Developer & SEO Expert',
  description: 'Professional portfolio of Muhammad Faizan - Web Developer & SEO Expert. Specialized in building high-performance web solutions and optimizing for search engines.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#121212] text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
