import "./globals.css";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Download SHOPY Atelier — Android App",
  description:
    "Install the SHOPY Atelier app on Android. Offline-first, instant, and native-feeling — the atelier in your pocket.",
  applicationName: "SHOPY Atelier",
  manifest: "/site-manifest.json",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "SHOPY Atelier — Android App",
    description: "Offline-first, instant, native-feeling shopping for Android.",
    url: "https://download.shopy.app",
    siteName: "SHOPY",
    locale: "en_PK",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#F4F4F2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans bg-shopy-bg text-shopy-dark antialiased selection:bg-shopy-dark selection:text-shopy-light">
        {children}
      </body>
    </html>
  );
}
