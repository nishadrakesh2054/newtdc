"use client";

import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import { useState, useMemo } from "react";
import Image from "next/image";

interface Athlete {
  id: number;
  name: string;
  role: string;
  image: string;
  branch: string;
  delay: string;
}

const COLORS = {
  primary: "#0049be",
  secondary: "#fec802",
  white: "#ffffff",
  text: "#5e6267",
} as const;

const STYLES = {
  filtersContainer: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap" as const,
    justifyContent: "start" as const,
    marginBottom: "40px",
  },
  filterButton: (isActive: boolean) => ({
    cursor: "pointer" as const,
    textDecoration: "none" as const,
    backgroundColor: isActive ? COLORS.secondary : COLORS.primary,
    color: isActive ? COLORS.primary : COLORS.white,
  }),
  emptyState: {
    textAlign: "center" as const,
    marginTop: "40px",
    color: COLORS.text,
  },
} as const;

const BRANCHES = ["All", "TDC's Athletes", "LFES Athletes"] as const;

const athletesData: Athlete[] = [
  {
    id: 1,
    name: "Bikash Thapa",
    role: "Forward",
    image: "/images/member/team1.jpg",
    branch: "TDC's Athletes",
    delay: "0.1s",
  },
  {
    id: 2,
    name: "Rajan Shrestha",
    role: "Midfielder",
    image: "/images/member/team2.jpg",
    branch: "TDC's Athletes",
    delay: "0.3s",
  },
  {
    id: 3,
    name: "Suman Tamang",
    role: "Defender",
    image: "/images/member/team3.jpg",
    branch: "TDC's Athletes",
    delay: "0.5s",
  },
  {
    id: 4,
    name: "Niraj Gurung",
    role: "Goalkeeper",
    image: "/images/member/team4.png",
    branch: "TDC's Athletes",
    delay: "0.7s",
  },
  {
    id: 5,
    name: "Anil Rai",
    role: "Striker",
    image: "/images/member/team4.png",
    branch: "LFES Athletes",
    delay: "0.7s",
  },
  {
    id: 6,
    name: "Sandeep Limbu",
    role: "Winger",
    image: "/images/member/team3.jpg",
    branch: "LFES Athletes",
    delay: "0.5s",
  },
  {
    id: 7,
    name: "Prakash Magar",
    role: "Defender",
    image: "/images/member/team1.jpg",
    branch: "LFES Athletes",
    delay: "0.1s",
  },
  {
    id: 8,
    name: "Dipesh Basnet",
    role: "Midfielder",
    image: "/images/member/team2.jpg",
    branch: "LFES Athletes",
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
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <Breadcrum title="Active  Athletes" />
        <div className="tf-widget-team main-content">
          <div className="themeflat-container">
            <div className="athletes-filters" style={STYLES.filtersContainer}>
              {BRANCHES.map((branch) => {
                const isActive = selectedBranch === branch;
                return (
                  <div key={branch} className="button">
                    <button
                      onClick={() => setSelectedBranch(branch)}
                      className={`flat-button ${isActive ? "active" : ""}`}
                      style={STYLES.filterButton(isActive)}
                    >
                      {branch}
                    </button>
                  </div>
                );
              })}
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
                        <Image
                          src={athlete.image}
                          alt={athlete.name}
                          width={270}
                          height={300}
                          style={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                        <div className="team-social">
                          <ul>
                            <li>
                              <h3 className="name-member text-light text-uppercase">
                                {athlete.name}
                              </h3>
                              <h4 className="job text-light">{athlete.role}</h4>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredAthletes.length === 0 && (
                  <div className="col-12">
                    <p style={STYLES.emptyState}>
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
  );
}
