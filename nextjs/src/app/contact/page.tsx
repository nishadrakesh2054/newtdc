"use client";

import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import Link from "next/link";

interface MapLocation {
  id: number;
  src: string;
  title: string;
}

interface ContactInfo {
  id: number;
  label: string;
  value: string;
  href?: string;
}

interface SocialLink {
  id: number;
  href: string;
  icon: string;
}

const STYLES = {
  mapTitle: {
    marginTop: "20px",
    color: "var(--primary)",
  },
  mapTitleBranch: {
    marginTop: "20px",
    fontWeight: "600",
    color: "var(--primary)",
  },
  iframe: {
    border: 0,
    width: "100%",
  },
} as const;

const mapLocations: MapLocation[] = [
  {
    id: 1,
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4274419317535!2d85.32312107611213!3d27.642244128358538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17005434cb05%3A0xa7dc16fb1af01d1!2sThunderbolts%20Development%20Center!5e0!3m2!1sen!2snp!4v1724835834200!5m2!1sen!2snp",
    title: "TDC Main Office - Dhapakhel, Lalitpur",
  },
  {
    id: 2,
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.5188597555093!2d87.9875100760875!3d26.631864872102224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5baf2f96b471b%3A0x7cd8929eb75daa0c!2sLittle%20Flowers%27%20English%20School!5e0!3m2!1sen!2snp!4v1764143323648!5m2!1sen!2snp",
    title: "LFES Branch Office - Birtamod, Jhapa",
  },
];

const contactInfo: ContactInfo[] = [
  {
    id: 1,
    label: "Phone: ",
    value: "+977 9801973967/85/86",
  },
  {
    id: 2,
    label: "Email:",
    value: "info@thunderbolts.com.np",
    href: "#",
  },
  {
    id: 3,
    label: "Main Branch:",
    value: "Dhapakhel, Lalitpur, Nepal",
  },
  {
    id: 4,
    label: "Branch Office:",
    value: "Birtamod, Jhapa, Nepal",
  },
];

const socialLinks: SocialLink[] = [
  { id: 1, href: "/facebook.com", icon: "icon-facebook" },
  { id: 2, href: "/instagram.com", icon: "icon-instagram" },
  { id: 3, href: "/behance.com", icon: "icon-youtube" },
  { id: 4, href: "/linkedin.com", icon: "icon-linkedin2" },
];

export default function Contact() {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <Breadcrum title="Contact Us" />
        <div className="map-contact-us">
          <div className="themeflat-container">
            <div className="row">
              {mapLocations.map((location, index) => (
                <div key={location.id} className="col-md-6">
                  <div className="map-contact relative">
                    <iframe
                      src={location.src}
                      height={570}
                      style={STYLES.iframe}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <h5
                      className="text-center text-uppercase"
                      style={index === 1 ? STYLES.mapTitleBranch : STYLES.mapTitle}
                    >
                      {location.title}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tf-contact-page main-content">
          <div className="themeflat-container">
            <div className="row contact-page">
              <div className="col-md-5">
                <div className="contact-page-content">
                  <div className="content-page-title">
                    <span className="wow fadeInUp animated">Contact us</span>
                    <h2 className="wow fadeInUp animated">Get it touch</h2>
                    <p className="post wow fadeInUp animated">
                      Located on the GEMS School campus, TDC is equipped with
                      world-class facilities and infrastructure that cater to
                      the sporting aspirations of youth across the country.
                    </p>
                  </div>
                  <div className="list-contact-us">
                    {contactInfo.map((info) => (
                      <div key={info.id} className="inner">
                        <span className="wow fadeInUp animated">{info.label}</span>
                        {info.href ? (
                          <Link href={info.href} className="wow fadeInUp animated">
                            <h6>{info.value}</h6>
                          </Link>
                        ) : (
                          <h6 className="wow fadeInUp animated">{info.value}</h6>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="social-contact">
                    <ul className="social-media wow fadeInUp animated">
                      {socialLinks.map((social) => (
                        <li key={social.id}>
                          <Link href={social.href}>
                            <i className={social.icon} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
                <div className="col-md-7">
                  <div className="contact-page-form">
                    <form
                      id="contactform-page"
                      className="contact-page form-submit"
                      action="/"
                      acceptCharset="utf-8"
                      noValidate
                    >
                      <div className="text-wrap clearfix">
                        <fieldset className="name-wrap">
                          <input
                            type="text"
                            id="name"
                            className="tb-my-input"
                            name="name"
                            tabIndex={1}
                            placeholder="Your name"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="email-wrap">
                          <input
                            type="email"
                            id="email"
                            className="tb-my-input"
                            name="email"
                            tabIndex={2}
                            placeholder="Your email"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="phone-wrap">
                          <input
                            type="tel"
                            id="phone"
                            className="tb-my-input"
                            name="phone"
                            tabIndex={1}
                            placeholder="Telephone"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="age-wrap">
                          <input
                            type="text"
                            id="age"
                            className="tb-my-input"
                            name="site"
                            tabIndex={1}
                            placeholder="Age"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                      </div>
                      <fieldset className="message-wrap">
                        <textarea
                          id="comment-message"
                          name="message"
                          rows={3}
                          tabIndex={4}
                          placeholder="Message"
                          aria-required="true"
                          defaultValue={""}
                        />
                      </fieldset>
                      <button
                        name="submit"
                        type="submit"
                        id="comment-reply"
                        className="flat-button btn-submit-comment"
                      >
                        <span>Join now</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
  );
}
