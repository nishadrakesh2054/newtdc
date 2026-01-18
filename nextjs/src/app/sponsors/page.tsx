"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";

export default function Sponsors() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    alert(
      "Thank you for your interest in becoming a sponsor! We will contact you soon."
    );
    // Reset form
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <Breadcrum title="Become a Sponsor" />

          {/* Sponsorship Form Section */}

          <div className="themeflat-container">
            <div className="row">
              <div className="col-md-12">
                <div className="form-contact ">
                  <div className="heading-register">
                    <h2 className="title-register text-dark">
                      Become a Sponsor
                    </h2>
                    <p
                      style={{
                        color: "var(--secondary)",
                        fontSize: "14px",
                        marginTop: "10px",
                      }}
                    >
                      Fill out the form below and our team will get back to you
                      within 24 hours.
                    </p>
                  </div>

                  <div className="contact-page-form">
                    <form
                      id="sponsorform-page"
                      className="contact-page form-submit"
                      action="/"
                      acceptCharset="utf-8"
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="text-wrap clearfix">
                        <fieldset className="name-wrap">
                          <input
                            type="text"
                            id="companyName"
                            className="tb-my-input"
                            name="companyName"
                            tabIndex={1}
                            placeholder="Company/Organization Name*"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="email-wrap">
                          <input
                            type="text"
                            id="contactName"
                            className="tb-my-input"
                            name="contactName"
                            tabIndex={2}
                            placeholder="Contact Person Name*"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="phone-wrap">
                          <input
                            type="email"
                            id="email"
                            className="tb-my-input"
                            name="email"
                            tabIndex={3}
                            placeholder="Email Address*"
                            size={32}
                            aria-required="true"
                            required
                          />
                        </fieldset>
                        <fieldset className="age-wrap">
                          <input
                            type="tel"
                            id="phone"
                            className="tb-my-input"
                            name="phone"
                            tabIndex={4}
                            placeholder="Phone Number*"
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
                          tabIndex={5}
                          placeholder="Message (Optional)"
                          aria-required="false"
                          defaultValue={""}
                        />
                      </fieldset>
                      <button
                        name="submit"
                        type="submit"
                        id="comment-reply"
                        className="flat-button btn-submit-comment"
                      >
                        <span>Submit Application</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div
            className="tf-widget-sponsor-benefits"
            style={{
              padding: "80px 0",
              backgroundColor: "#f8f9fa",
            }}
          >
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <h3
                    className="wow fadeInUp animated text-center"
                    style={{
                      color: "var(--primary)",
                      fontWeight: "700",
                      marginBottom: "50px",
                      fontSize: "36px",
                    }}
                  >
                    Why Sponsor With Us?
                  </h3>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4" style={{ marginBottom: "30px" }}>
                  <div
                    className="benefit-card wow fadeInUp animated text-center"
                    style={{
                      backgroundColor: "#fff",
                      padding: "30px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "48px",
                        marginBottom: "20px",
                        color: "var(--primary)",
                      }}
                    >
                      🎯
                    </div>
                    <h4
                      style={{
                        color: "var(--primary)",
                        fontWeight: "700",
                        marginBottom: "15px",
                        fontSize: "20px",
                      }}
                    >
                      Brand Visibility
                    </h4>
                    <p style={{ color: "#666", lineHeight: "1.6" }}>
                      Reach thousands of sports enthusiasts and families through
                      our events, programs, and digital platforms.
                    </p>
                  </div>
                </div>
                <div className="col-md-4" style={{ marginBottom: "30px" }}>
                  <div
                    className="benefit-card wow fadeInUp animated text-center"
                    style={{
                      backgroundColor: "#fff",
                      padding: "30px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "48px",
                        marginBottom: "20px",
                        color: "var(--primary)",
                      }}
                    >
                      🤝
                    </div>
                    <h4
                      style={{
                        color: "var(--primary)",
                        fontWeight: "700",
                        marginBottom: "15px",
                        fontSize: "20px",
                      }}
                    >
                      Community Impact
                    </h4>
                    <p style={{ color: "#666", lineHeight: "1.6" }}>
                      Make a meaningful difference in youth development &
                      contribute to building a stronger sports culture in Nepal.
                    </p>
                  </div>
                </div>
                <div className="col-md-4" style={{ marginBottom: "30px" }}>
                  <div
                    className="benefit-card wow fadeInUp animated text-center"
                    style={{
                      backgroundColor: "#fff",
                      padding: "30px",
                      borderRadius: "8px",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "48px",
                        marginBottom: "20px",
                        color: "var(--primary)",
                      }}
                    >
                      ⭐
                    </div>
                    <h4
                      style={{
                        color: "var(--primary)",
                        fontWeight: "700",
                        marginBottom: "15px",
                        fontSize: "20px",
                      }}
                    >
                      Custom Packages
                    </h4>
                    <p style={{ color: "#666", lineHeight: "1.6" }}>
                      Flexible sponsorship packages tailored to your business
                      goals and budget requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
