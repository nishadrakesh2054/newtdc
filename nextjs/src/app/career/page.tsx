"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";

const CheckmarkIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="var(--primary)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.48438 0 0 4.48438 0 10C0 15.5156 4.48438 20 10 20C15.5156 20 20 15.5156 20 10C20 4.48438 15.5156 0 10 0Z"
      fill="var(--sec)"
    />
    <path
      d="M14.4776 6.9806L14.4776 6.98061L14.4804 6.98344C14.5274 7.03036 14.5274 7.11222 14.4804 7.15914L8.62106 13.0185C8.59595 13.0436 8.56393 13.0557 8.5332 13.0557C8.50248 13.0557 8.47045 13.0436 8.44535 13.0185L5.51566 10.0888C5.46874 10.0419 5.46874 9.96005 5.51566 9.91312C5.56259 9.8662 5.64444 9.8662 5.69137 9.91312L8.17965 12.4014L8.5332 12.755L8.88676 12.4014L14.3047 6.98344L14.3047 6.98345L14.3075 6.9806C14.3538 6.93355 14.4313 6.93355 14.4776 6.9806Z"
      fill="var(--primary)"
      stroke="var(--primary)"
    />
  </svg>
);

// Job vacancies data
const jobVacancies = [
  {
    id: 1,
    title: "Football Coach",
    department: "Sports Training",
    type: "Full-time",
    location: "Dhapakhel, Lalitpur",
    experience: "3-5 years",
    salary: "Competitive",
    postedDate: "2024-01-15",
    description:
      "We are seeking an experienced and passionate Football Coach to join our dynamic sports academy. The ideal candidate will be responsible for developing and implementing training programs for youth football teams, fostering a positive learning environment.",
    responsibilities: [
      "Plan and conduct football training sessions for various age groups",
      "Develop individual and team skills through structured practice",
      "Monitor player progress and provide constructive feedback",
      "Organize and participate in competitive matches and tournaments",
      "Maintain training equipment and ensure safety protocols",
      "Collaborate with other coaches and staff members",
      "Attend coaching workshops and stay updated with latest techniques",
    ],
    requirements: [
      "Bachelor's degree in Sports Science or related field (preferred)",
      "Minimum 3 years of coaching experience in football",
      "Valid coaching certification (FIFA, AFC, or equivalent)",
      "Strong knowledge of football tactics and training methodologies",
      "Excellent communication and leadership skills",
      "Ability to work with children and young adults",
      "First Aid and CPR certification",
      "Passion for sports and youth development",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Professional development opportunities",
      "Access to modern sports facilities",
      "Flexible working hours",
      "Annual performance bonuses",
    ],
  },
  {
    id: 2,
    title: "Sports Program Coordinator",
    department: "Administration",
    type: "part-time",
    location: "Birtamod, Morang,Jhapa",
    experience: "2-4 years",
    salary: "Competitive",
    postedDate: "2024-01-20",
    description:
      "We are looking for a dedicated Sports Program Coordinator to manage and coordinate various sports programs and events at our academy. The successful candidate will work closely with coaches, athletes, and parents to ensure smooth operations and exceptional program delivery.",
    responsibilities: [
      "Coordinate and schedule sports programs and training sessions",
      "Manage event planning and execution for tournaments and competitions",
      "Liaise with coaches, athletes, and parents regarding program updates",
      "Maintain accurate records of participants and program attendance",
      "Handle registration and enrollment processes",
      "Assist in budget planning and resource allocation",
      "Promote programs through various marketing channels",
      "Ensure compliance with safety and regulatory standards",
    ],
    requirements: [
      "Bachelor's degree in Sports Management, Business Administration, or related field",
      "Minimum 2 years of experience in sports program coordination",
      "Strong organizational and multitasking abilities",
      "Excellent communication and interpersonal skills",
      "Proficiency in MS Office and database management",
      "Knowledge of sports industry and youth development",
      "Ability to work flexible hours including weekends",
      "Detail-oriented with strong problem-solving skills",
    ],
    benefits: [
      "Competitive salary package",
      "Health insurance coverage",
      "Professional development opportunities",
      "Work in a dynamic sports environment",
      "Flexible working arrangements",
      "Annual performance bonuses",
      "Opportunity to work with talented athletes",
    ],
  },
];

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState<string>("");

  const toggleJobDetails = (jobId: number) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  const openApplicationModal = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJobTitle("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    alert("Application submitted successfully!");
    closeModal();
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <Breadcrum title="Careers" />

          {/* Job Vacancies Section */}
          <div
            className="tf-widget-job-vacancies"
            style={{ padding: "60px 0 100px" }}
          >
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <h3
                    className="wow fadeInUp animated text-uppercase"
                    style={{
                      color: "var(--primary)",
                      fontWeight: "700",
                      marginBottom: "50px",
                      textAlign: "center",
                      fontSize: "36px",
                    }}
                  >
                    Current Openings
                  </h3>
                </div>
              </div>

              <div className="row">
                {jobVacancies.map((job) => (
                  <div
                    key={job.id}
                    className="col-md-6"
                    style={{ marginBottom: "30px" }}
                  >
                    <div
                      className="job-card wow fadeInUp animated"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "12px",
                        padding: "30px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                        border: "1px solid #e8e8e8",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        height: "100%",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-5px)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 30px rgba(0,0,0,0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(0,0,0,0.08)";
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          marginBottom: "20px",
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              color: "var(--primary)",
                              fontWeight: "700",
                              fontSize: "24px",
                              marginBottom: "10px",
                            }}
                          >
                            {job.title}
                          </h4>
                          <p
                            style={{
                              color: "#666",
                              fontSize: "14px",
                              marginBottom: "5px",
                            }}
                          >
                            {job.department}
                          </p>
                        </div>
                        <span
                          style={{
                            backgroundColor: "var(--primary)",
                            color: "#fff",
                            padding: "5px 15px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                          }}
                        >
                          {job.type}
                        </span>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "15px",
                          marginBottom: "20px",
                          paddingBottom: "20px",
                          borderBottom: "1px solid #e8e8e8",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14Z"
                              fill="var(--primary)"
                            />
                            <path
                              d="M8 4C7.45 4 7 4.45 7 5V8C7 8.55 7.45 9 8 9C8.55 9 9 8.55 9 8V5C9 4.45 8.55 4 8 4ZM8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10Z"
                              fill="var(--primary)"
                            />
                          </svg>
                          <span style={{ fontSize: "14px", color: "#666" }}>
                            {job.location}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0L10.5 5.5L16 6L12 10L13 16L8 13L3 16L4 10L0 6L5.5 5.5L8 0Z"
                              fill="var(--primary)"
                            />
                          </svg>
                          <span style={{ fontSize: "14px", color: "#666" }}>
                            {job.experience}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 0C3.58 0 0 3.58 0 8C0 12.42 3.58 16 8 16C12.42 16 16 12.42 16 8C16 3.58 12.42 0 8 0ZM8 14C4.69 14 2 11.31 2 8C2 4.69 4.69 2 8 2C11.31 2 14 4.69 14 8C14 11.31 11.31 14 8 14ZM9 4H7V9H9V4ZM9 10H7V12H9V10Z"
                              fill="var(--primary)"
                            />
                          </svg>
                          <span style={{ fontSize: "14px", color: "#666" }}>
                            {job.salary}
                          </span>
                        </div>
                      </div>

                      <p
                        style={{
                          color: "#666",
                          fontSize: "15px",
                          lineHeight: "1.6",
                          marginBottom: "25px",
                        }}
                      >
                        {job.description}
                      </p>

                      <button
                        onClick={() => toggleJobDetails(job.id)}
                        style={{
                          width: "100%",
                          padding: "12px 24px",
                          backgroundColor:
                            selectedJob === job.id
                              ? "var(--primary)"
                              : "transparent",
                          color:
                            selectedJob === job.id ? "#fff" : "var(--primary)",
                          border: "2px solid var(--primary)",
                          borderRadius: "6px",
                          fontWeight: "600",
                          fontSize: "15px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {selectedJob === job.id
                          ? "Hide Details"
                          : "View Details & Apply"}
                      </button>

                      {selectedJob === job.id && (
                        <div
                          style={{
                            marginTop: "30px",
                            paddingTop: "30px",
                            borderTop: "2px solid #e8e8e8",
                          }}
                        >
                          <div style={{ marginBottom: "30px" }}>
                            <h5
                              style={{
                                color: "var(--primary)",
                                fontWeight: "700",
                                marginBottom: "15px",
                                fontSize: "18px",
                              }}
                            >
                              Key Responsibilities
                            </h5>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                              {job.responsibilities.map((resp, index) => (
                                <li
                                  key={index}
                                  style={{
                                    marginBottom: "12px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                  }}
                                >
                                  <span style={{ marginTop: "5px" }}>
                                    <CheckmarkIcon />
                                  </span>
                                  <span
                                    style={{ color: "#666", fontSize: "15px" }}
                                  >
                                    {resp}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div style={{ marginBottom: "30px" }}>
                            <h5
                              style={{
                                color: "var(--primary)",
                                fontWeight: "700",
                                marginBottom: "15px",
                                fontSize: "18px",
                              }}
                            >
                              Requirements
                            </h5>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                              {job.requirements.map((req, index) => (
                                <li
                                  key={index}
                                  style={{
                                    marginBottom: "12px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                  }}
                                >
                                  <span style={{ marginTop: "5px" }}>
                                    <CheckmarkIcon />
                                  </span>
                                  <span
                                    style={{ color: "#666", fontSize: "15px" }}
                                  >
                                    {req}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div style={{ marginBottom: "30px" }}>
                            <h5
                              style={{
                                color: "var(--primary)",
                                fontWeight: "700",
                                marginBottom: "15px",
                                fontSize: "18px",
                              }}
                            >
                              Benefits
                            </h5>
                            <ul style={{ listStyle: "none", padding: 0 }}>
                              {job.benefits.map((benefit, index) => (
                                <li
                                  key={index}
                                  style={{
                                    marginBottom: "12px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                  }}
                                >
                                  <span style={{ marginTop: "5px" }}>
                                    <CheckmarkIcon />
                                  </span>
                                  <span
                                    style={{ color: "#666", fontSize: "15px" }}
                                  >
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              gap: "15px",
                              marginTop: "30px",
                            }}
                          >
                            <button
                              onClick={() => openApplicationModal(job.title)}
                              className="flat-button"
                              style={{
                                flex: 1,
                                textAlign: "center",
                                padding: "14px 24px",
                                backgroundColor: "var(--primary)",
                                color: "#fff",
                                borderRadius: "6px",
                                fontWeight: "600",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                              }}
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div
            className="tf-widget-career-cta"
            style={{
              padding: "80px 0",
              backgroundColor: "#f8f9fa",
            }}
          >
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3
                    className="wow fadeInUp animated"
                    style={{
                      color: "var(--primary)",
                      fontWeight: "700",
                      marginBottom: "20px",
                      fontSize: "32px",
                    }}
                  >
                    Don&apos;t See a Role That Fits?
                  </h3>
                  <p
                    className="wow fadeInUp animated"
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      marginBottom: "30px",
                      maxWidth: "600px",
                      margin: "0 auto 30px",
                    }}
                  >
                    We&apos;re always looking for talented individuals to join
                    our team. Send us your resume and we&apos;ll keep you in
                    mind for future opportunities.
                  </p>
                  <Link
                    href="/contact"
                    className="flat-button wow fadeInUp animated"
                    style={{
                      display: "inline-block",
                      padding: "14px 40px",
                      backgroundColor: "var(--primary)",
                      color: "#fff",
                      borderRadius: "6px",
                      fontWeight: "600",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    Send Your Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Application Modal */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
            }}
            onClick={closeModal}
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "40px",
                maxWidth: "600px",
                width: "100%",
                maxHeight: "90vh",
                overflowY: "auto",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "15px",
                  right: "15px",
                  background: "transparent",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                  color: "#666",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ×
              </button>

              <div
                className="heading-register"
                style={{ marginBottom: "30px" }}
              >
                <h2
                  className="title-register"
                  style={{
                    color: "var(--primary)",
                    fontWeight: "700",
                    fontSize: "28px",
                    marginBottom: "10px",
                  }}
                >
                  Apply for {selectedJobTitle}
                </h2>
                <p style={{ color: "#666", fontSize: "14px" }}>
                  Please fill out the form below to submit your application
                </p>
              </div>

              <div className="form-register">
                <form
                  id="applicationForm"
                  className="register-form"
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <fieldset className="name-container">
                    <input
                      type="text"
                      id="applicantName"
                      placeholder="Your name*"
                      className="tb-my-input"
                      name="name"
                      tabIndex={1}
                      size={32}
                      aria-required="true"
                      required
                    />
                  </fieldset>

                  <fieldset className="email-container">
                    <input
                      type="email"
                      id="applicantEmail"
                      placeholder="Your email*"
                      className="tb-my-input"
                      name="email"
                      tabIndex={2}
                      size={32}
                      aria-required="true"
                      required
                    />
                  </fieldset>

                  <fieldset className="telephone-container">
                    <input
                      type="tel"
                      id="applicantPhone"
                      placeholder="Phone number*"
                      className="tb-my-input"
                      name="phone"
                      tabIndex={3}
                      size={32}
                      aria-required="true"
                      required
                    />
                  </fieldset>

                  <fieldset
                    className="email-container"
                    style={{ marginBottom: "20px" }}
                  >
                    <label
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "#666",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Upload Resume (PDF, DOC, DOCX)*
                    </label>
                    <input
                      type="file"
                      id="resume"
                      className="tb-my-input"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      tabIndex={4}
                      aria-required="true"
                      required
                      style={{
                        padding: "12px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        width: "100%",
                        fontSize: "14px",
                      }}
                    />
                  </fieldset>

                  <div className="form-submit">
                    <button
                      type="submit"
                      className="flat-button btn-submit-comment"
                    >
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
