import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Farhan Khan - Cloud & DevOps Engineer",
  description: "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and AI-driven solutions. Building scalable infrastructure for modern applications.",
  keywords: ["Cloud Engineer", "DevOps", "AWS", "Docker", "Kubernetes", "Terraform", "Python", "AI", "LLMs"],
  authors: [{ name: "Farhan Khan" }],
  creator: "Farhan Khan",
  metadataBase: new URL("https://farhankhan.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farhankhan.dev",
    title: "Farhan Khan - Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and AI-driven solutions.",
    siteName: "Farhan Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Khan - Cloud & DevOps Engineer",
    description: "Cloud & DevOps Engineer specializing in AWS, Docker, Kubernetes, Terraform, and AI-driven solutions.",
    creator: "@farhankhandev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
