"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Esports games data
const esportsGames = [
  {
    id: 1,
    title: "Valorant",
    category: "Tactical FPS",
    description:
      "Master the art of tactical combat in Valorant! Our Valorant program focuses on developing strategic thinking, precise aim, and team coordination. Whether you're a beginner learning the basics or an advanced player aiming for competitive play, our expert coaches will help you climb the ranks and dominate the battlefield.",
    features: [
      "Agent Mastery & Strategy",
      "Aim Training & Precision",
      "Team Coordination",
      "Competitive Scrims",
    ],
    image: "/img/sports/2.png",
    color: "#FF4655",
  },
  {
    id: 2,
    title: "FIFA",
    category: "Sports Simulation",
    description:
      "Score your way to victory in FIFA! Our FIFA esports program combines football passion with competitive gaming. Learn advanced techniques, team management, and tournament strategies from professional FIFA players. Perfect your skills and compete in local and international tournaments.",
    features: [
      "Advanced Gameplay Techniques",
      "Team Building Strategies",
      "Tournament Preparation",
      "Pro Player Mentorship",
    ],
    image: "/img/sports/3.png",
    color: "#00A8E8",
  },
  {
    id: 3,
    title: "Robo Wars",
    category: "Strategy & Combat",
    description:
      "Engineer your path to victory in Robo Wars! This unique esports program teaches strategic thinking, resource management, and combat tactics. Build, customize, and battle with your robots while learning valuable skills in engineering, strategy, and competitive gaming.",
    features: [
      "Robot Design & Customization",
      "Strategic Combat Training",
      "Resource Management",
      "Tournament Competitions",
    ],
    image: "/img/sports/4.png",
    color: "#FF6B35",
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    category: "Tactical FPS",
    description:
      "Join the elite ranks in Counter-Strike 2! Our comprehensive CS2 program covers everything from basic mechanics to advanced strategies. Train with experienced players, participate in scrims, and develop the skills needed to compete at the highest level.",
    features: [
      "Weapon Mastery",
      "Map Control & Strategy",
      "Team Communication",
      "Competitive Match Play",
    ],
    image: "/img/sports/5.png",
    color: "#FFB800",
  },
  {
    id: 5,
    title: "League of Legends",
    category: "MOBA",
    description:
      "Dominate the Rift in League of Legends! Our LoL program offers comprehensive training in champion mechanics, map awareness, and team coordination. Whether you're climbing ranked or preparing for tournaments, our coaches will help you reach your full potential.",
    features: [
      "Champion Mastery",
      "Map Awareness & Vision",
      "Team Fight Coordination",
      "Ranked Climb Support",
    ],
    image: "/img/sports/6.png",
    color: "#C89B3C",
  },
  {
    id: 6,
    title: "Rocket League",
    category: "Sports Racing",
    description:
      "Soar to new heights in Rocket League! Combine soccer skills with rocket-powered cars in this unique esports experience. Our program focuses on mechanical skills, positioning, and team play to help you become a champion on the field.",
    features: [
      "Mechanical Skills Training",
      "Positioning & Rotation",
      "Team Play Strategies",
      "Tournament Participation",
    ],
    image: "/img/sports/7.png",
    color: "#FF8C42",
  },
  {
    id: 7,
    title: "Call of Duty",
    category: "FPS",
    description:
      "Lock and load in Call of Duty! Our CoD program trains players in fast-paced combat, map knowledge, and team strategies. From casual play to competitive tournaments, we provide the training you need to excel in this action-packed esports title.",
    features: [
      "Weapon Loadout Optimization",
      "Map Knowledge & Routes",
      "Team Strategy & Communication",
      "Competitive Play Training",
    ],
    image: "/img/sports/8.png",
    color: "#E31837",
  },
  {
    id: 8,
    title: "Dota 2",
    category: "MOBA",
    description:
      "Master the ancient art of Dota 2! Our comprehensive program covers hero mechanics, item builds, and advanced strategies. Learn from experienced players and compete in tournaments while developing critical thinking and teamwork skills.",
    features: [
      "Hero Mechanics & Combos",
      "Item Build Optimization",
      "Advanced Strategy",
      "Team Coordination",
    ],
    image: "/img/sports/3.png",
    color: "#D32CE6",
  },
];

// Gallery images
const galleryImages = [
 "/img/sports/3.png",
  "/img/sports/4.png",
  "/img/sports/5.png",
  "/img/sports/6.png",
  "/img/sports/7.png",
  "/img/sports/8.png",
  "/img/sports/2.png",
];

// Swiper options for gallery slider
const gallerySwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};

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

// Image Gallery Component
const ImageGallery = ({ images }: { images: string[] }) => (
  <div className="row" style={{ marginTop: "60px" }}>
    <div className="col-md-12">
      <div className="event-gallery">
        <h6
          className="wow fadeInUp animated text-uppercase"
          style={{
            color: "var(--primary)",
            fontWeight: "700",
            marginBottom: "30px",
            textAlign: "start",
            fontSize: "24px",
          }}
        >
          Esports Gallery
        </h6>
        <Swiper {...gallerySwiperOptions} className="gallery-swiper">
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="gallery-item"
                style={{
                  width: "100%",
                  aspectRatio: "400 / 340",
                  overflow: "hidden",
                  borderRadius: "12px",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 32px rgba(0, 0, 0, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.15)";
                }}
              >
                <Image
                  src={image}
                  alt={`Esports Gallery ${index + 1}`}
                  width={400}
                  height={340}
                  className="wow fadeInUp animated"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);

export default function EsportsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(esportsGames.map((game) => game.category))),
  ];

  const filteredGames =
    activeFilter === "all"
      ? esportsGames
      : esportsGames.filter((game) => game.category === activeFilter);

  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <Breadcrum
          title="Esports"
          breadcrumbs={[
            { label: "Homepage", href: "/" },
            { label: "Esports" },
          ]}
        />

        <div className="tf-widget-events">
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
              {categories.map((category) => (
                <div key={category} className="button">
                  <button
                    onClick={() => setActiveFilter(category)}
                    className={`flat-button ${
                      activeFilter === category ? "active" : ""
                    }`}
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      backgroundColor:
                        activeFilter === category ? "#fec802" : "#0049be",
                      color: activeFilter === category ? "#0049be" : "#ffffff",
                   
                    }}
                  >
                    {category === "all" ? "All Games" : category}
                  </button>
                </div>
              ))}
            </div>
            <p className="post wow fadeInUp animated" >    Step into the future of competitive gaming! THUNDERBOLTS Esports
                offers world-class training programs for aspiring esports
                athletes. From tactical shooters like Valorant and Counter-Strike
                2 to sports simulations like FIFA and Rocket League, we provide
                comprehensive coaching, state-of-the-art facilities, and
                competitive opportunities. Join us and transform your passion for
                gaming into professional excellence!</p>

            {/* Games Grid */}
            <div className="row">
              {filteredGames.map((game, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={game.id}
                    className="col-md-12"
                    style={{
                      marginBottom: "60px",
                    }}
                  >
                    <div
                      className="row"
                      style={{
                        alignItems: "center",
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        padding: "30px",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 8px 30px rgba(0, 0, 0, 0.15)";
                        e.currentTarget.style.transform = "translateY(-5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 4px 20px rgba(0, 0, 0, 0.08)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {isEven ? (
                        <>
                          {/* Content Section */}
                          <div className="col-md-6">
                            <div
                              className="event-detail-content"
                              style={{
                                padding: "20px 20px 20px 0",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                         
                              <h4
                                className="wow fadeInUp animated text-uppercase"
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  width: "100%",
                                  marginBottom: "20px",
                                  fontSize: "28px",
                                  fontWeight: "700",
                                  lineHeight: "1.3",
                                  color: "var(--primary)",
                                }}
                              >
                                <span
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    width: "50px",
                                    height: "4px",
                                    backgroundColor: game.color || "var(--primary)",
                                    transform: "translateY(-50%)",
                                    borderRadius: "2px",
                                  }}
                                />
                                <span style={{ paddingLeft: "60px" }}>
                                  {game.title}
                                </span>
                              </h4>

                              <p
                                className="post wow fadeInUp animated p-text"
                             
                              >
                                {game.description}
                              </p>

                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  marginBottom: "25px",
                                }}
                              >
                                {game.features.map((feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className="wow fadeInUp animated"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginBottom: "12px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    <span style={{ marginRight: "12px" }}>
                                      <CheckmarkIcon />
                                    </span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>

                              <Link
                                href="/contact"
                                className="flat-button wow fadeInUp animated"
                                style={{
                                  alignSelf: "flex-start",
                                  marginTop: "auto",
                                  backgroundColor: game.color || "var(--primary)",
                                  color: "#ffffff",
                               
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.05)";
                                  e.currentTarget.style.boxShadow =
                                    "0 6px 20px rgba(0, 0, 0, 0.2)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = "scale(1)";
                                  e.currentTarget.style.boxShadow = "none";
                                }}
                              >
                                Join Now
                              </Link>
                            </div>
                          </div>

                          {/* Image Section */}
                          <div className="col-md-6">
                            <div
                              className="image-event-content"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                width: "100%",
                                padding: "0 0 0 20px",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  overflow: "hidden",
                                  borderRadius: "12px",
                                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                                  transition: "transform 0.3s ease",
                                }}
                              >
                                <Image
                                  src={game.image}
                                  alt={game.title}
                                  width={600}
                                  height={400}
                                  className="wow fadeInRight animated"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    transition: "transform 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.08)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Image Section */}
                          <div className="col-md-6">
                            <div
                              className="image-event-content"
                              style={{
                                position: "relative",
                                display: "inline-block",
                                width: "100%",
                                padding: "0 20px 0 0",
                              }}
                            >
                              <div
                                style={{
                                  position: "relative",
                                  overflow: "hidden",
                                  borderRadius: "12px",
                                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                                  transition: "transform 0.3s ease",
                                }}
                              >
                                <Image
                                  src={game.image}
                                  alt={game.title}
                                  width={600}
                                  height={400}
                                  className="wow fadeInLeft animated"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    transition: "transform 0.3s ease",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.08)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                  }}
                                />
                              </div>
                            </div>
                          </div>

                          {/* Content Section */}
                          <div className="col-md-6">
                            <div
                              className="event-detail-content"
                              style={{
                                padding: "20px 0 20px 20px",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              }}
                            >
                          
                              <h4
                                className="wow fadeInUp animated text-uppercase"
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  width: "100%",
                                  marginBottom: "20px",
                                  fontSize: "28px",
                                  fontWeight: "700",
                                  lineHeight: "1.3",
                                  color: "var(--primary)",
                                }}
                              >
                                <span
                                  style={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    width: "50px",
                                    height: "4px",
                                    backgroundColor: game.color || "var(--primary)",
                                    transform: "translateY(-50%)",
                                    borderRadius: "2px",
                                  }}
                                />
                                <span style={{ paddingLeft: "60px" }}>
                                  {game.title}
                                </span>
                              </h4>

                              <p
                                className="post wow fadeInUp animated"
                                style={{
                                  textAlign: "justify",
                               
                                }}
                              >
                                {game.description}
                              </p>

                              <ul
                                style={{
                                  listStyle: "none",
                                  padding: 0,
                                  marginBottom: "25px",
                                }}
                              >
                                {game.features.map((feature, featureIndex) => (
                                  <li
                                    key={featureIndex}
                                    className="wow fadeInUp animated"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      marginBottom: "12px",
                                      fontSize: "15px",
                                    }}
                                  >
                                    <span style={{ marginRight: "12px" }}>
                                      <CheckmarkIcon />
                                    </span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>

                              <Link
                                href="/contact"
                                className="flat-button wow fadeInUp animated"
                                style={{
                                  alignSelf: "flex-start",
                                  marginTop: "auto",
                                  backgroundColor: game.color || "var(--primary)",
                                  color: "#ffffff",
                              
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform =
                                    "scale(1.05)";
                                  e.currentTarget.style.boxShadow =
                                    "0 6px 20px rgba(0, 0, 0, 0.2)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = "scale(1)";
                                  e.currentTarget.style.boxShadow = "none";
                                }}
                              >
                                Join Now
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Image Gallery */}
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
