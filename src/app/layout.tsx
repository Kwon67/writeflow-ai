import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://writeflow.ai'),
  title: {
    default: "WriteFlow AI - Write 10x Faster with AI | AI Writing Tool",
    template: "%s | WriteFlow AI"
  },
  description: "Generate high-quality content in seconds with WriteFlow AI. Create blogs, emails, social media posts, and more. Join 50,000+ writers. Start your 14-day free trial today.",
  keywords: [
    "AI writing tool",
    "content generator",
    "blog writer",
    "AI copywriting",
    "email writing",
    "social media content",
    "GPT-4",
    "Claude AI",
    "content creation",
    "writing assistant",
    "automated content",
    "AI writer",
    "copywriter AI",
    "blog generator",
    "article writer"
  ],
  authors: [{ name: "WriteFlow AI" }],
  creator: "WriteFlow AI",
  publisher: "WriteFlow AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://writeflow.ai",
    title: "WriteFlow AI - Write 10x Faster with AI",
    description: "Generate high-quality content in seconds with WriteFlow AI. Create blogs, emails, social media posts, and more. Join 50,000+ writers. Start your 14-day free trial today.",
    siteName: "WriteFlow AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WriteFlow AI - AI-Powered Content Generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WriteFlow AI - Write 10x Faster with AI",
    description: "Generate high-quality content in seconds with AI-powered writing",
    creator: "@writeflowai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ]
  },
  alternates: {
    canonical: "https://writeflow.ai",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: "#10b981",
                secondary: "#fff",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
