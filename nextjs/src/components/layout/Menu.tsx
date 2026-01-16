"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  // Scroll to the top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const checkParentActive = (paths: string[]) =>
    paths.some((path) => pathname.startsWith(path)) ? "current-menu-item" : "";

  return (
    <>
      <ul className="menu">
        <li className={`item ${pathname === "/" ? "current-menu-item" : ""}`}>
          <Link href="/">Home</Link>
        </li>

        <li
          className={`item ${pathname === "/about" ? "current-menu-item" : ""}`}
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
          <ul className="submenu">
            <li
              className={`item ${
                pathname === "/individual-sports" ? "current-menu-item" : ""
              }`}
            >
              <Link href="/individual-sports">Individual Sports</Link>
            </li>
            <li
              className={`item ${
                pathname === "/squad-sports" ? "current-menu-item" : ""
              }`}
            >
              <Link href="/squad-sports">Squad Sports</Link>
            </li>
          </ul>
          {/* /.submenu */}
        </li>

        <li
          className={`item ${checkParentActive(["/event", ])}`}
        >
          <Link href="/#">Our Events</Link>
          <ul className="submenu">
            <li
              className={`item ${
                pathname === "/event" ? "current-menu-item" : ""
              }`}
            >
              <Link href="/event">Events</Link>
            </li>
         
            <li
              className={`item ${
                pathname === "/sports-camps" ? "current-menu-item" : ""
              }`}
            >
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
          className={`item ${pathname === "/blog" ? "current-menu-item" : ""}`}
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
    </>
  );
}
