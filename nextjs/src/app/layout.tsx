import type { Metadata } from "next";
import "../stylesheets/bootstrap.min.css";
import "../stylesheets/bootstrap.rtl.min.css";
import "../stylesheets/bootstrap-grid.min.css";
import "../stylesheets/bootstrap-reboot.min.css";
import "../stylesheets/bootstrap-utilities.rtl.min.css";
import "../stylesheets/bootstrap-utilities.min.css";
import "../stylesheets/bootstrap-reboot.rtl.min.css";
import "../stylesheets/bootstrap-grid.rtl.min.css";
import "../stylesheets/style.css";
import "../stylesheets/responsive.css";
import "../stylesheets/owl.carousel.css";
import "../stylesheets/animate.css";
import "../stylesheets/animate.min.css";
import "../stylesheets/swiper-bundle.min.css";
import "../stylesheets/magnific-popup.min.css";
import "../stylesheets/map.min.css";
import "../stylesheets/icon-style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thunder - Running Community",
  description:
    "Welcome to our running community! Discover the joy of running, connect with fellow enthusiasts, and unlock your full potential.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
