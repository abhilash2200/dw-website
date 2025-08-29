import { Inter } from "next/font/google";
import "./globals.css";
import '@splidejs/react-splide/css';
import Header from "./common/Header";
import Footer from "./common/Footer";
import PopupForm from "./common/Popup";
import { ContextProvider } from "./context/MyContext";
import Script from "next/script";
import { AnalyticsTracker } from "./AnalyticsTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Best Digital Marketing Company in Kolkata | SEO, Ads & Branding | Digital Wolf",
  description: "Boost your brand with Digital Wolf, the best digital marketing company in Kolkata. Expert SEO, ads & branding services to grow your business online!",
  other: {
    "google-site-verification": "yCjSOAa8NxJROGg_LJ3U-sLWPcequZTu-qy7rF2x7ss",
  },
  metadataBase: new URL(`https://www.digitalwolf.co.in/`),
  alternates: {
    canonical: `./`,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital Wolf",
  "alternateName": "DW",
  "url": "https://www.digitalwolf.co.in/",
  "logo": "https://www.digitalwolf.co.in/assets/images/resources/logo-1.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+918697306015",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.facebook.com/digitalwolfindia/",
    "https://twitter.com/DigitalWolf12",
    "https://www.linkedin.com/company/digitalwolf1/",
    "https://www.digitalwolf.co.in/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ContextProvider>
          <Header />
          <AnalyticsTracker />
          {children}
          <Footer />
          <PopupForm />
        </ContextProvider>
      </body>
    </html>
  );
}
