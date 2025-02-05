import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const raleway = Raleway({ subsets: ['latin'], variable: '--font-sans' });
const monserrat = Montserrat({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "ConscientementeBA",
  description: "Fomentando el hábito de habitarte",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/logo.jpeg",
        href: "/images/logo.jpeg"
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/logo.jpeg",
        href: "/images/logo.jpeg"
      },
    ]
  },
  openGraph: {
    title: "ConscientementeBA",
    description: "Fomentando el hábito de habitarte",
    url: "https://www.conscientementeba.com/",
    type: "website",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 600,
        alt: "ConscientementeBA Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@conscientementeBA",
    title: "ConscientementeBA",
    description: "Fomentando el hábito de habitarte",
    images: ["/images/logo.jpeg"],
  },
  alternates: {
    canonical: "https://www.conscientementeba.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(raleway.variable, monserrat.variable, "antialiased font-sans bg-white text-gray-800 flex flex-col min-h-screen")}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
