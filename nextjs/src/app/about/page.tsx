"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Counter from "../../components/sections/Counter";
export default function About() {
  const [isTab, setIsTab] = useState(1);
  const handleTab = (i: number) => {
    setIsTab(i);
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">About Us</h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <Link href="/">Homepage</Link>
                      </li>
                      <li>
                        <i className="icon-Arrow---Right-2" />
                      </li>
                      <li>
                        <a>About Us</a>
                      </li>
                    </ul>
                  </div>
                  {/* /.breadcrumbs */}
                </div>
                {/* /.col-md-12 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>

          <div className="tf-widget-about-intro main-content">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="about-intro-content">
                    <div className="post-content wow fadeInUp animated">
                    <p className="post wow fadeInUp animated">

                        <strong>THUNDERBOLTS DEVELOPMENT CENTER (TDC)</strong>{" "}
                        is Nepal&apos;s premier sports and E-sports academy,
                        dedicated to nurturing talent and fostering athletic
                        excellence.
                      </p>
                      <p className="post wow fadeInUp animated">
                        Located on the GEMS School campus, TDC is equipped with
                        world-class facilities and infrastructure that cater to
                        the sporting aspirations of youth across the country.
                      </p>
                      <p className="post wow fadeInUp animated">
                        At TDC, we provide tailored programs for grassroots,
                        intermediate, and senior athletes, supported by
                        professional coaching, cutting-edge sports science, and
                        international collaborations. Our vision extends beyond
                        national borders, connecting athletes to opportunities
                        globally through partnerships with leading sports
                        academies and clubs. We believe in a holistic approach
                        to training, focusing on both physical and mental
                        development to ensure success on and off the field.
                      </p>
                      <p className="post wow fadeInUp animated">
                        Whether it&apos;s through football, futsal, cricket,
                        swimming, tennis, or esports, TDC is committed to
                        setting new standards in sports education and
                        development in Nepal, helping athletes reach their full
                        potential while instilling values of discipline,
                        teamwork, and perseverance.
                      </p>
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
                        <li
                          className="wow fadeInUp animated"
                          data-wow-delay="0.1s"
                        >
                          <img src="/images/about/1.png" alt="" />
                        </li>
                        <li
                          className="wow fadeInUp animated"
                          data-wow-delay="0.2s"
                        >
                          <img src="/images/about/2.png" alt="" />
                        </li>
                        <li
                          className="wow fadeInUp animated"
                          data-wow-delay="0.3s"
                        >
                          <img src="/images/about/3.png" alt="" />
                        </li>

                        <li
                          className="wow fadeInUp animated"
                          data-wow-delay="0.5s"
                        >
                          <div className="number-m">100K</div>
                        </li>
                      </ul>
                      <span className="wow fadeInUp animated">
                        Trusted by 100K+ People around the globe
                      </span>
                    </div>
                    <div className="mission-tab">
                      <nav>
                        <div
                          className="nav nav-tabs"
                          id="nav-tab"
                          role="tablist"
                        >
                          <button
                            className={
                              isTab == 2 ? "nav-link active" : "nav-link"
                            }
                            id="nav-profile-tab"
                            onClick={() => handleTab(2)}
                          >
                            our Mission
                          </button>
                          <button
                            className={
                              isTab == 1 ? "nav-link active" : "nav-link"
                            }
                            id="nav-home-tab"
                            onClick={() => handleTab(1)}
                          >
                            our Vision
                          </button>
                        </div>
                      </nav>
                      <div className="tab-content" id="nav-tabContent">
                        <div
                          className={
                            isTab == 1
                              ? "tab-pane fade show active"
                              : "tab-pane fade"
                          }
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <p className="post wow fadeInUp animated">
                            THUNDERBOLTS DEVELOPMENT CENTER envisions becoming
                            Nepal &apos;s leading sports and e-sports academy,
                            with multiple centers across the country. We aim to
                            set new standards of excellence and own professional
                            clubs that provide a clear pathway for elite
                            athletes, bringing pride to Nepal on national and
                            international stages.
                          </p>
                        </div>
                        <div
                          className={
                            isTab == 2
                              ? "tab-pane fade show active"
                              : "tab-pane fade"
                          }
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <p className="post wow fadeInUp animated">
                            Our mission is to nurture talent, develop elite
                            athletes, and organize world-class sports and
                            e-sports events. We provide comprehensive training,
                            state-of-the-art facilities, and support for
                            athletes of all ages, fostering excellence,
                            discipline, and sportsmanship. We empower
                            individuals to reach their full potential and
                            positively impact the sports and e-sports industry
                            in Nepal and beyond..
                          </p>
                        </div>
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
    </>
  );
}
