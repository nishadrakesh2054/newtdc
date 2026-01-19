"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileMenu({
  isMobileMenu,
  handleMobileMenu,
}: {
  isMobileMenu: boolean;
  handleMobileMenu: () => void;
}) {
  const pathname = usePathname();
  const [isAccordion, setIsAccordion] = useState<number | null>(0);

  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  const checkCurrentMenuItem = (path: string) =>
    pathname === path ? "current-menu-item" : "";
  const checkParentActive = (paths: string[]) =>
    paths.some((path) => pathname.startsWith(path)) ? "current-menu-item" : "";

  return (
    <>
      <nav
        id="mainnav-mobi"
        className={`mainnav style1 ${isMobileMenu ? "active" : ""}`}
      >
        <div id="logo-mobie" className="logo">
          <Link href="/" rel="home">
            <img src="/images/tdclogo.png" alt="image" />
          </Link>
        </div>
        <ul className="menu">
          <li className={`item ${pathname === "/" ? "current-menu-item" : ""}`}>
            <Link href="/">Home</Link>
          </li>

          <li
            className={`item ${
              pathname === "/about" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/about">About us</Link>
          </li>

          <li
            className={`item ${checkParentActive([
              "/individual-sports",
              "/squad-sports",
            ])}`}
          >
            <Link href="/#">Academy</Link>
            <span className="btn-submenu" onClick={() => handleAccordion(1)} />
            <ul
              className="submenu"
              style={{ display: `${isAccordion === 1 ? "block" : "none"}` }}
            >
              <li
                className={`item ${checkCurrentMenuItem("/individual-sports")}`}
              >
                <Link href="/individual-sports">Individual Sports</Link>
              </li>
              <li className={`item ${checkCurrentMenuItem("/squad-sports")}`}>
                <Link href="/squad-sports">Squad Sports</Link>
              </li>
            </ul>
            {/* /.submenu */}
          </li>
          <li
            className={`item ${pathname === "/esports" ? "current-menu-item" : ""}`}
          >
            <Link href="/esports">Esports</Link>
          </li>

          <li
            className={`item ${checkParentActive([
              "/event",
          
              "/sports-camps",
            ])}`}
          >
            <Link href="/#">Our Events</Link>
            <span className="btn-submenu" onClick={() => handleAccordion(2)} />
            <ul
              className="submenu"
              style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}
            >
              <li className={`item ${checkCurrentMenuItem("/event")}`}>
                <Link href="/event">Events</Link>
              </li>
          
              <li className={`item ${checkCurrentMenuItem("/sports-camps")}`}>
                <Link href="/sports-camps">Special Camps</Link>
              </li>
            </ul>
            {/* /.submenu */}
          </li>

          <li
            className={`item ${
              pathname === "/athletes" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/athletes">Athletes</Link>
          </li>

          <li
            className={`item ${
              pathname === "/gallery" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/gallery">Gallery</Link>
          </li>

          <li
            className={`item ${
              pathname === "/blog" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/blog">News</Link>
          </li>

          <li
            className={`item ${
              pathname === "/contact" ? "current-menu-item" : ""
            }`}
          >
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
        {/* /.menu */}
      </nav>
      <div
        className={`overlay-menu-mobie ${isMobileMenu ? "active" : ""}`}
        onClick={handleMobileMenu}
      >
        <div className="close-btn">
          <span className="close-menus" />
        </div>
      </div>
    </>
  );
}
