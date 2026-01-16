"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";

// Checkmark SVG Component
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

// Camp data
const campsData = [
  {
    id: 1,
    title: "Winter Camps",
    description:
      "Stay in peak form this winter with THUNDERBOLTS Winter Camps. Intensive training, expert coaching, and skill development to keep you sharp during the off-season.",
    image: "/images/camp/wintercmp.jpg",
    features: [
      "Off-Season Training",
      "Indoor Facility Access",
      "Expert Coaching",
      "Fitness Maintenance",
    ],
  },
  {
    id: 2,
    title: "Springs Camps",
    description:
      "Kickstart your season with THUNDERBOLTS Spring Camps! Enjoy focused training and skill enhancement to boost your performance.",
    image: "/images/camp/spring.jpg",
    features: [
      "Season Preparation",
      "Endurance Building",
      "Skill Refinement",
      "Competition Ready",
    ],
  },
  {
    id: 3,
    title: "Athletic Development Workshops/Clinics",
    description:
      "Enhance your skills with our Workshops and Clinics! Get expert guidance and focused training to refine techniques and improve performance.",
    image: "/images/camp/athlete.jpg",
    features: [
      "Technique Training",
      "Strength & Conditioning",
      "Speed Development",
      "Performance Analysis",
    ],
  },
  {
    id: 4,
    title: "Precision Skill Mastery Camps",
    description:
      "Target your skills with our Specific Training Camps! Receive personalized coaching and focused practice to master key techniques and advance your game.",
    image: "/images/camp/precision.jpg",
    features: [
      "Advanced Techniques",
      "Personalized Coaching",
      "Intensive Practice",
      "Skill Mastery",
    ],
  },
  {
    id: 5,
    title: "Adventure Camps",
    description:
      "Unleash your adventurous spirit! Our Thrill Seekers Adventure Camp offers exciting activities designed to challenge your endurance and teamwork, perfect for those looking to engage with nature and push their personal limits.",
    image: "/images/camp/adventure.jpg",
    features: [
      "Outdoor Activities",
      "Team Building",
      "Mental Resilience",
      "Adventure Sports",
    ],
  },
  {
    id: 6,
    title: "Corporate League",
    description:
      "Promote team spirit and healthy competition with our Corporate Leagues! Engage your employees in exciting sports events designed to foster collaboration, fitness, and workplace camaraderie.",
    image: "/images/camp/corporate.jpg",
    features: [
      "Team Building",
      "Employee Wellness",
      "Healthy Competition",
      "Corporate Networking",
    ],
  },
];

export default function SportsCamps() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Special Camps</h1>
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
                        <a>Special Camps</a>
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
          {/* Widget form contact */}
          <div className="tf-widget-events">
            <div className="themeflat-container">
              {campsData.map((camp, index) => {
                const isEven = index % 2 === 0;
                const contentSection = (
                  <div className="col-md-6">
                    <div className="event-detail-content">
                      <h4
                        className="wow fadeInUp animated text-uppercase"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          width: "100%",
                        
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            top: "50%",
                            width: "30px",
                            height: "3px",
                            backgroundColor: "var(--primary)",
                            transform: "translateY(-50%)",
                          }}
                        />
                        <span
                          style={{ paddingLeft: "35px" }}
                        >
                          {camp.title}
                        </span>
                      </h4>
                      <p className="post wow fadeInUp animated">
                        {camp.description}
                      </p>
                      <ul>
                        {camp.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="wow fadeInUp animated"
                          >
                            <span>
                              <CheckmarkIcon />
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="post regis-now wow fadeInUp animated">
                        Register now, and don&apos;t miss out on this incredible
                        opportunity!
                      </p>
                      <Link
                        href="/contact"
                        className="flat-button wow fadeInUp animated"
                      >
                        Register now
                      </Link>
                    </div>
                  </div>
                );
                const imageSection = (
                  <div className="col-md-6">
                    <div className="image-event-content">
                      <img
                        src={camp.image}
                        alt={camp.title}
                        className={
                          isEven
                            ? "wow fadeInRight animated"
                            : "wow fadeInLeft animated"
                        }
                      />
                    </div>
                  </div>
                );

                return (
                  <div
                    key={camp.id}
                    className="row"
                    style={{
                      marginBottom: index < campsData.length - 1 ? "80px" : "0",
                    }}
                  >
                    {isEven ? (
                      <>
                        {contentSection}
                        {imageSection}
                      </>
                    ) : (
                      <>
                        {imageSection}
                        {contentSection}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
