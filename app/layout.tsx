import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Header } from "@/components/layout/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RARP | Rwanda Academic Research Portal",
  description:
    "Discover and access academic papers from universities and research institutions in Rwanda",
  keywords: ["RARP", "Rwanda Academic Research Portal", "Academic Research"],
  openGraph: {
    title: "RARP | Rwanda Academic Research Portal",
    description:
      "Discover and access academic papers from universities and research institutions in Rwanda",
    type: "website",
    url: "https://rarp.vercel.app",
    siteName: "RARP | Rwanda Academic Research Portal",
    images: [
      {
        url: "https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEIyHzxoRXdEKaUNDPVSW9zJCkG1t7F60R2joT5",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "RARP | Rwanda Academic Research Portal",
    description:
      "Discover and access academic papers from universities and research institutions in Rwanda",
    card: "summary_large_image",
    site: "rarp.vercel.app",
    images: [
      {
        url: "https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEIyHzxoRXdEKaUNDPVSW9zJCkG1t7F60R2joT5",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} ${geistMono.className} ${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
