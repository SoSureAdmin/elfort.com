import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Conn Elfort",
  description:
    "Enterprise perspective on AI governance, enterprise architecture, operational resilience and strategic leadership.",
  authors: [{ name: "Daniel Conn Elfort" }],
  creator: "Daniel Conn Elfort",
  openGraph: {
    title: "Daniel Conn Elfort",
    description:
      "Enterprise perspective on AI governance, enterprise architecture, operational resilience and strategic leadership.",
    url: "https://www.elfort.com",
    siteName: "Daniel Conn Elfort",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-1QQMGKJ752"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1QQMGKJ752');
  `}
</Script>
      </body>
    </html>
  );
}