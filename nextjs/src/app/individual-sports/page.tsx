"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Form2 from "@/components/sections/Form2";

export default function IndividualSports() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Individual Sports</h1>
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
                        <Link href="/#">Academy</Link>
                      </li>
                      <li>
                        <i className="icon-Arrow---Right-2" />
                      </li>
                      <li>
                        <a>Individual Sports</a>
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
          {/* /.page-title */}
          {/* Individual Sports Content */}
          <section className="main-content">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="content-section wow fadeInUp animated">
                    <h2 className="wow fadeInUp animated">Individual Sports Academy</h2>
                    <p className="post wow fadeInUp animated">
                      Welcome to our Individual Sports Academy. We offer comprehensive training programs for individual sports including running, swimming, cycling, tennis, and more. Our expert coaches provide personalized training to help you achieve your personal best.
                    </p>
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-6">
                        <h3 className="wow fadeInUp animated">Programs Offered</h3>
                        <ul className="wow fadeInUp animated">
                          <li>Running & Track Events</li>
                          <li>Swimming</li>
                          <li>Cycling</li>
                          <li>Tennis</li>
                          <li>Golf</li>
                          <li>Martial Arts</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h3 className="wow fadeInUp animated">Training Benefits</h3>
                        <ul className="wow fadeInUp animated">
                          <li>Personalized coaching</li>
                          <li>Flexible schedules</li>
                          <li>Progress tracking</li>
                          <li>Competition preparation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Widget form contact */}
          <Form2 />
        </div>
      </Layout>
    </>
  );
}

