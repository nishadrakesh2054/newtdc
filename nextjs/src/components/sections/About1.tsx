import Link from "next/link";

export default function About1() {
  return (
    <>
      <div className="tf-widget-about-us main-content">
        <div className="themeflat-container">
          <div className="tf-about-us">
            <div className="row">
              <div className="col-md-6 image-wraper">
                <div className="media">
                  <div className="media-v1 wow fadeInLeft animated">
                    <img
                      className="mask-media"
                      src="/images/about/mask1.png"
                      alt="image"
                    />
                    <img
                      className="shape-media"
                      src="/images/about/graphic.png"
                      alt="image"
                    />
                  </div>
                  <img
                    src="/images/about/mask2.png"
                    alt="image"
                    className="image-gr wow fadeInRight animated"
                  />
                  <img
                    src="/images/about/Intersect.png"
                    alt="image"
                    className="intersect-img"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-box">
                  {/* header style v1 */}
                  <div className="title-box title-small-v2">
                    <span className="sub-title wow fadeInUp animated">
                      Welcome to THUNDERBOLTS DEVELOPMENT CENTER
                    </span>
                    <h2 className="title-section wow fadeInUp animated">
                      HOME OF THE <br />{" "}
                      <span
                        style={{ fontStyle: "italic", color: "var(--primary)" }}
                      >
                        {" "}
                        THUNDERBOLTS
                      </span>
                    </h2>
                  </div>
                  {/* header style v1 */}
                  <p className="post wow fadeInUp animated">
                    THUNDERBOLTS DEVELOPMENT CENTER (TDC) is Nepal&apos;s first
                    international-standard sports and esports academy, dedicated
                    to nurturing talent and fostering excellence. TDC offers a
                    comprehensive range of sports programs across grassroots,
                    intermediate, and senior levels. Our mission is to create a
                    pathway for young athletes to achieve success both on and
                    off the field.
                  </p>
                  <div className="line" />
                  <div className="about-button-group">
                    <div className="button">
                      <Link href="/about" className="flat-button">
                        Find out more
                      </Link>
                    </div>
                    <div className="infor-about">
                      <img src="/images/about/info.png" alt="" />
                      <div className="info">
                        <div className="name wow fadeInUp animated">
                          Barun Khadka
                        </div>
                        <div className="job wow fadeInUp animated">
                          Director of TDC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
