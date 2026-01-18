"use client";

import Link from "next/link";
import Menu from "../Menu";
import Image from "next/image";

interface SocialLink {
  id: number;
  href: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { id: 1, href: "/facebook.com", icon: "icon-facebook" },
  { id: 2, href: "/instagram.com", icon: "icon-instagram" },
  { id: 3, href: "/youtube.com", icon: "icon-youtube" },
];

const contactInfo = {
  email: "info@thunderbolts.com.np",
  address: "Dhapakhel, Lalitpur | Nepal",
};

const logoImage = {
  src: "/images/tdc.png",
  alt: "TDC Logo",
  width: 150,
  height: 50,
};

export default function Header1({
  scroll,
  handleMobileMenu,
}: {
  scroll: boolean;
  handleMobileMenu: () => void;
}) {
  return (
    <>
      <div className="header-top">
        <div className="themeflat-container">
          <div className="header-top-inner">
            <div className="address">
              <Link href={`mailto:${contactInfo.email}`}>
                <i className="icon-Vector" />
                {contactInfo.email}
              </Link>
              <address>
                <i className="icon-Vector-22" />
                {contactInfo.address}
              </address>
            </div>
            <div className="social-icon">
              {socialLinks.map((social) => (
                <Link key={social.id} href={social.href}>
                  <i className={social.icon} />
                </Link>
              ))}
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
                <Image
                  id="a2"
                  src={logoImage.src}
                  alt={logoImage.alt}
                  width={logoImage.width}
                  height={logoImage.height}
                  style={{ width: "auto", height: "auto" }}
                />
              </Link>
            </div>
            <div className="nav-wrap">
              <div className="btn-menu" onClick={handleMobileMenu}>
                <span className="line-1" />
              </div>
              <nav id="mainnav" className="mainnav">
                <div id="logo-mobie" className="logo">
                  <Link href="/" rel="home">
                    <Image
                      src={logoImage.src}
                      alt={logoImage.alt}
                      width={logoImage.width}
                      height={logoImage.height}
                      style={{ width: "auto", height: "auto" }}
                    />
                  </Link>
                </div>
                <Menu />
              </nav>
            </div>
            <div className="header-right d-md-flex align-items-center gap-2 d-none">
              <Link href="/tdc-registration" className="btn-contact">
                Join Us Now{" "}
                <span>
                  <Image
                    src="/img/logo/button-img.png"
                    alt=""
                    width={15}
                    height={15}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

