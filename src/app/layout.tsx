import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mallipeddi Harish | AI & ML Engineer Portfolio",
  description: "Personal portfolio of Mallipeddi Harish, a Computer Science student specializing in AI & ML, showcasing machine learning models, data analytics, and software applications.",
  keywords: ["Mallipeddi Harish", "AI", "Machine Learning", "Data Science", "Python Developer", "Portfolio", "Software Engineer"],
  authors: [{ name: "Mallipeddi Harish" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
