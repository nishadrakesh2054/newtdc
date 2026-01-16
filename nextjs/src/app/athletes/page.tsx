"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { useState, useMemo } from "react";

// Athlete data with branch information
const athletesData = [
  {
    id: 1,
    name: "Bikash Thapa",
    role: "Forward",
    image: "/images/member/team1.jpg",
    branch: "Main Branch",
    delay: "0.1s",
  },
  {
    id: 2,
    name: "Rajan Shrestha",
    role: "Midfielder",
    image: "/images/member/team2.jpg",
    branch: "Main Branch",
    delay: "0.3s",
  },
  {
    id: 3,
    name: "Suman Tamang",
    role: "Defender",
    image: "/images/member/team3.jpg",
    branch: "Main Branch",
    delay: "0.5s",
  },
  {
    id: 4,
    name: "Niraj Gurung",
    role: "Goalkeeper",
    image: "/images/member/team4.png",
    branch: "Main Branch",
    delay: "0.7s",
  },
  {
    id: 5,
    name: "Anil Rai",
    role: "Striker",
    image: "/images/member/team4.png",
    branch: "Branch Office",
    delay: "0.7s",
  },
  {
    id: 6,
    name: "Sandeep Limbu",
    role: "Winger",
    image: "/images/member/team3.jpg",
    branch: "Branch Office",
    delay: "0.5s",
  },
  {
    id: 7,
    name: "Prakash Magar",
    role: "Defender",
    image: "/images/member/team1.jpg",
    branch: "Branch Office",
    delay: "0.1s",
  },
  {
    id: 8,
    name: "Dipesh Basnet",
    role: "Midfielder",
    image: "/images/member/team2.jpg",
    branch: "Branch Office",
    delay: "0.3s",
  },
];

export default function Athletes() {
  const [selectedBranch, setSelectedBranch] = useState<string>("All");

  // Filter athletes based on selected branch
  const filteredAthletes = useMemo(() => {
    if (selectedBranch === "All") {
      return athletesData;
    }
    return athletesData.filter((athlete) => athlete.branch === selectedBranch);
  }, [selectedBranch]);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Athletes</h1>
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
                        <a>Athletes</a>
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
          {/* Athletes Content */}
          <div className="tf-widget-team main-content">
            <div className="themeflat-container">
              {/* Filter Buttons */}
              <div
                className="athletes-filters"
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  justifyContent: "start",
                  marginBottom: "40px",
                }}
              >
                {["All", "Main Branch", "Branch Office"].map((branch) => (
                  <div key={branch} className="button">
                    <button
                      onClick={() => setSelectedBranch(branch)}
                      className={`flat-button ${
                        selectedBranch === branch ? "active" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        backgroundColor:
                          selectedBranch === branch ? "#fec802" : "#0049be",
                        color:
                          selectedBranch === branch ? "#0049be" : "#ffffff",
                      }}
                    >
                      {branch}
                    </button>
                  </div>
                ))}
              </div>

              <div className="team-member">
                <div className="row team">
                  {filteredAthletes.map((athlete) => (
                    <div
                      key={athlete.id}
                      className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3"
                    >
                      <div
                        className="team-item wow fadeInUp animated"
                        data-wow-delay={athlete.delay}
                      >
                        <div className="team-image">
                          <img src={athlete.image} alt="Team member" />
                          <div className="team-social">
                            <ul>
                              <li>
                                <h3 className="name-member text-light text-uppercase">
                                  {athlete.name}
                                </h3>
                                <h4 className="job text-light">
                                  {athlete.role}
                                </h4>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {filteredAthletes.length === 0 && (
                    <div className="col-12">
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "40px",
                          color: "#5e6267",
                        }}
                      >
                        No athletes found for this branch.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
