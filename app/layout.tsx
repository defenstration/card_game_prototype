import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Card Game Prototype",
  description: "Card game prototype using React and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
