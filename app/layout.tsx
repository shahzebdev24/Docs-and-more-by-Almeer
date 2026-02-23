import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import FramerBackground from "../components/FramerBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://docsandmore.com.pk'),
  title: {
    default: "Docs & More by Almeer | MOFA, Embassy & Document Attestation Pakistan",
    template: "%s | Docs & More by Almeer"
  },
  description: "Official MOFA attestation, Apostille, and Embassy services in Pakistan. Fast & reliable document legalisation, HEC degree verification, and IBCC services. Trusted since 2010.",
  keywords: ["MOFA attestation", "document attestation Pakistan", "Apostille services Pakistan", "Embassy attestation", "HEC verification", "IBCC attestation", "degree attestation", "marriage certificate attestation", "birth certificate attestation", "moffa attestation", "legalization services", "attestation for UAE visa", "attestation for Saudi visa", "attestation services Karachi"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Docs & More by Almeer | Trusted Attestation Services",
    description: "Reliable MOFA, Apostille & Embassy Attestation Services in Pakistan.",
    url: "https://docsandmore.com.pk",
    siteName: "Docs & More by Almeer",
    images: [{ url: "/Docsandmore.png" }],
    locale: "en_PK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/Docsandmore.png",
    apple: "/Docsandmore.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Docs & More by Almeer",
              "image": "https://docsandmore.com.pk/Docsandmore.png",
              "@id": "https://docsandmore.com.pk",
              "url": "https://docsandmore.com.pk",
              "telephone": "0312-2373233",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No. 6/7, S.M.C.H.S., Block-B, Shahrah-e-Faisal",
                "addressLocality": "Karachi",
                "addressRegion": "Sindh",
                "postalCode": "75400",
                "addressCountry": "PK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.8617,
                "longitude": 67.0494
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://facebook.com/docsandmore",
                "https://instagram.com/docsandmore",
                "https://linkedin.com/company/docsandmore"
              ]
            })
          }}
        />
        <Navbar />
        <FramerBackground />
        {children}
      </body>
    </html>
  );
}

