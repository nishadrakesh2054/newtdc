"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Form2 from "@/components/sections/Form2";

export default function SquadSports() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Squad Sports</h1>
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
                        <a>Squad Sports</a>
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
          {/* Squad Sports Content */}
          <section className="main-content">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="content-section wow fadeInUp animated">
                    <h2 className="wow fadeInUp animated">Squad Sports Academy</h2>
                    <p className="post wow fadeInUp animated">
                      Welcome to our Squad Sports Academy. We provide team-based training programs for various squad sports including football, basketball, volleyball, soccer, and more. Join a team, build camaraderie, and develop your skills in a collaborative environment.
                    </p>
                    <div className="row" style={{ marginTop: "30px" }}>
                      <div className="col-md-6">
                        <h3 className="wow fadeInUp animated">Programs Offered</h3>
                        <ul className="wow fadeInUp animated">
                          <li>Football</li>
                          <li>Basketball</li>
                          <li>Volleyball</li>
                          <li>Soccer</li>
                          <li>Baseball</li>
                          <li>Rugby</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h3 className="wow fadeInUp animated">Training Benefits</h3>
                        <ul className="wow fadeInUp animated">
                          <li>Team building skills</li>
                          <li>Strategic gameplay</li>
                          <li>Regular team practices</li>
                          <li>League participation</li>
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

