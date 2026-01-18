"use client";

import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Counter from "../../components/sections/Counter";
import Breadcrum from "@/components/elements/Breadcrum";

interface TrustItem {
  id: number;
  type: "image" | "number";
  src?: string;
  alt?: string;
  number?: string;
  delay: string;
}

interface TabItem {
  id: number;
  label: string;
  content: string;
}

const introParagraphs = [
  {
    id: 1,
    content: (
      <>
        <strong>THUNDERBOLTS DEVELOPMENT CENTER (TDC)</strong> is Nepal&apos;s premier sports and E-sports academy, dedicated to nurturing talent and fostering athletic excellence.
      </>
    ),
  },
  {
    id: 2,
    content:
      "Located on the GEMS School campus, TDC is equipped with world-class facilities and infrastructure that cater to the sporting aspirations of youth across the country.",
  },
  {
    id: 3,
    content:
      "At TDC, we provide tailored programs for grassroots, intermediate, and senior athletes, supported by professional coaching, cutting-edge sports science, and international collaborations. Our vision extends beyond national borders, connecting athletes to opportunities globally through partnerships with leading sports academies and clubs. We believe in a holistic approach to training, focusing on both physical and mental development to ensure success on and off the field.",
  },
  {
    id: 4,
    content:
      "Whether it&apos;s through football, futsal, cricket, swimming, tennis, or esports, TDC is committed to setting new standards in sports education and development in Nepal, helping athletes reach their full potential while instilling values of discipline, teamwork, and perseverance.",
  },
];

const trustItems: TrustItem[] = [
  { id: 1, type: "image", src: "/images/about/1.png", alt: "", delay: "0.1s" },
  { id: 2, type: "image", src: "/images/about/2.png", alt: "", delay: "0.2s" },
  { id: 3, type: "image", src: "/images/about/3.png", alt: "", delay: "0.3s" },
  { id: 4, type: "number", number: "100K", delay: "0.5s" },
];

const tabItems: TabItem[] = [
  {
    id: 1,
    label: "our Vision",
    content:
      "THUNDERBOLTS DEVELOPMENT CENTER envisions becoming Nepal 's leading sports and e-sports academy, with multiple centers across the country. We aim to set new standards of excellence and own professional clubs that provide a clear pathway for elite athletes, bringing pride to Nepal on national and international stages.",
  },
  {
    id: 2,
    label: "our Mission",
    content:
      "Our mission is to nurture talent, develop elite athletes, and organize world-class sports and e-sports events. We provide comprehensive training, state-of-the-art facilities, and support for athletes of all ages, fostering excellence, discipline, and sportsmanship. We empower individuals to reach their full potential and positively impact the sports and e-sports industry in Nepal and beyond..",
  },
];

export default function About() {
  const [isTab, setIsTab] = useState(1);

  const handleTab = (tabId: number) => {
    setIsTab(tabId);
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <Breadcrum title="About Us" />

        <div className="tf-widget-about-intro main-content">
          <div className="themeflat-container">
            <div className="row">
              <div className="col-md-12">
                <div className="about-intro-content">
                  <div className="post-content wow fadeInUp animated">
                    {introParagraphs.map((paragraph) => (
                      <p key={paragraph.id} className="post wow fadeInUp animated">
                        {paragraph.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tf-widget-mission main-content">
          <div className="themeflat-container">
            <div className="row">
              <div className="col-md-12 col-lg-7">
                <div className="image-mission-wrap">
                  <img
                    src="/images/about/abouttab1.png"
                    alt="Image"
                    className="image-v1 wow fadeInRight animated"
                  />
                  <img
                    src="/images/about/abouttab2.png"
                    alt="Image"
                    className="image-v2 wow fadeInLeft animated"
                  />
                </div>
              </div>
              <div className="col-md-12 col-lg-5">
                <div className="mission-content">
                  <div className="mission-trust">
                    <ul>
                      {trustItems.map((item) => (
                        <li
                          key={item.id}
                          className="wow fadeInUp animated"
                          data-wow-delay={item.delay}
                        >
                          {item.type === "image" && item.src ? (
                            <img src={item.src} alt={item.alt || ""} />
                          ) : (
                            <div className="number-m">{item.number}</div>
                          )}
                        </li>
                      ))}
                    </ul>
                    <span className="wow fadeInUp animated">
                      Trusted by 100K+ People around the globe
                    </span>
                  </div>
                  <div className="mission-tab">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        {tabItems.map((tab) => (
                          <button
                            key={tab.id}
                            className={
                              isTab === tab.id ? "nav-link active" : "nav-link"
                            }
                            id={`nav-${tab.id === 1 ? "home" : "profile"}-tab`}
                            onClick={() => handleTab(tab.id)}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      {tabItems.map((tab) => (
                        <div
                          key={tab.id}
                          className={
                            isTab === tab.id
                              ? "tab-pane fade show active"
                              : "tab-pane fade"
                          }
                          role="tabpanel"
                          aria-labelledby={`nav-${tab.id === 1 ? "home" : "profile"}-tab`}
                        >
                          <p className="post wow fadeInUp animated">
                            {tab.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Counter />
      </div>
    </Layout>
  );
}
