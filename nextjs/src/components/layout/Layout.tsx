"use client";

import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer1 from "./footer/Footer1";
import Header1 from "./header/Header1";
import MobileMenu from "./MobileMenu";

export default function Layout({
  headerStyle,
  footerStyle,
  children,
  backAlt,
}: {
  headerStyle?: number;
  footerStyle?: number;
  children: React.ReactNode;
  backAlt?: boolean;
}) {
  const [scroll, setScroll] = useState(false);
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      // Dynamic import for wowjs to avoid SSR issues
      const loadWOW = async () => {
        try {
          // @ts-expect-error - wowjs module type declaration exists in global.d.ts
          const WOWModule = await import("wowjs");
          // wowjs exports WOW class directly or as default
          const WOW =
            WOWModule.WOW || WOWModule.default?.WOW || WOWModule.default;

          if (WOW) {
            window.wow = new WOW({
              live: false,
            });
            window.wow?.init();
          }
        } catch (err) {
          console.error("Failed to load WOW.js:", err);
        }
      };
      loadWOW();
    }

    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="top" />
      {!headerStyle && (
        <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} />
      )}
      {headerStyle == 1 ? (
        <Header1 scroll={scroll} handleMobileMenu={handleMobileMenu} />
      ) : null}

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      {children}

      {!footerStyle && <Footer1 />}
      {footerStyle == 1 ? <Footer1 /> : null}

      <BackToTop target="#top" backAlt={backAlt} />
    </>
  );
}
