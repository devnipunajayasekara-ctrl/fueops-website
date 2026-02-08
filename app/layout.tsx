import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "FueOps - AI Software Solutions",
  description: "FueOps delivers cutting-edge AI software solutions including intelligent chatbots, e-commerce automation, and financial management systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/assets/css/bootstrap.css" rel="stylesheet" />
        <link href="/assets/css/style.css" rel="stylesheet" />
        <link href="/assets/css/meanmenu.min.css" rel="stylesheet" />
        <link href="/assets/css/responsive.css" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,600;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
      </head>
      <body>
        <div className="page-wrapper">
          {/* Cursor */}
          <div className="cursor"></div>
          <div className="cursor-follower"></div>

          <Header />

          {children}

          <Footer />
        </div>

        {/* Scripts */}
        <Script src="/assets/js/jquery.js" strategy="beforeInteractive" />
        <Script src="/assets/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/appear.js" strategy="lazyOnload" />
        <Script src="/assets/js/parallax.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/tilt.jquery.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.paroller.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/wow.js" strategy="lazyOnload" />
        <Script src="/assets/js/swiper.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/backtotop.js" strategy="lazyOnload" />
        <Script src="/assets/js/odometer.js" strategy="lazyOnload" />
        <Script src="/assets/js/parallax-scroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/SplitText.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollToPlugin.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollSmoother.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/touchspin.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.marquee.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/magnific-popup.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/nav-tool.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery-ui.js" strategy="lazyOnload" />
        <Script src="/assets/js/element-in-view.js" strategy="lazyOnload" />
        <Script src="/assets/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
