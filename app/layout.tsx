import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flocommerce by EVOC Labs | Marketplace Growth Partner",
  description:
    "End-to-end marketplace management for ambitious brands across India's leading e-commerce platforms.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
