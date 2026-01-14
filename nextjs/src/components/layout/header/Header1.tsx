'use client'

import { useState } from "react";
import Link from "next/link";
import Menu from "../Menu";

export default function Header1({
  scroll,
  handleMobileMenu,
}: {
  scroll: boolean;
  handleMobileMenu: () => void;
}) {
  const [isToggled, setToggled] = useState(false);
  const handleToggled = () => setToggled(!isToggled);
  
  return (
    <>
      <div className="header-top">
        <div className="themeflat-container">
          <div className="header-top-inner">
            <div className="address">
              <Link href="/mailto:">
                <i className="icon-Vector" />
                info@thunderbolts.com.np
              </Link>
              <address>
                <i className="icon-Vector-22" />
                Dhapakhel, Lalitpur | Nepal
              </address>
            </div>
            <div className="social-icon">
              <Link href="/facebook.com">
                <i className="icon-facebook" />
              </Link>
              <Link href="/instagram.com">
                <i className="icon-instagram" />
              </Link>
              <Link href="/youtube.com">
                <i className="icon-youtube" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header
        id="header"
        className={`header style1 clearfix ${scroll ? "downscrolled" : ""}`}
      >
        <div className="themeflat-container">
          <div className="header-inner">
            <div id="logo" className="logo">
              <Link href="/" rel="home">
                <img id="a2" src="/images/tdc.png" alt="image" />
              </Link>
            </div>
            {/* /.logo */}
            <div className="nav-wrap">
              <div className="btn-menu" onClick={handleMobileMenu}>
                <span className="line-1" />
              </div>
              {/* //mobile menu button */}
              <nav id="mainnav" className="mainnav">
                <div id="logo-mobie" className="logo">
                  <Link href="/" rel="home">
                    <img src="/images/tdc.png" alt="image" />
                  </Link>
                </div>
                {/* /.logo */}
                <Menu />
              </nav>
            </div>
            {/* /.nav-wrap */}
            <div className="header-right">
              <button className="btn-contact">Join Us Now</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

