"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Camp data
const tennisData = [
  {
    id: 1,
    title: "Grassroots",
    age: "6 – 10 years old",
    description:
      "Our Grassroots program is designed to introduce young athletes to the fundamentals of sports in a fun and engaging environment. Through age-appropriate training and activities, we nurture their passion for sports while building essential skills. Athletes in this category will have the opportunity to participate in beginner and non-beginner groups, ensuring tailored coaching that caters to their individual needs and abilities.",
    image: "/img/academy/tennis2.png",
  },
  {
    id: 2,
    title: "Intermediate",
    age: "11 – 15 years old",
    description:
      "The Intermediate program focuses on refining skills and enhancing performance for young athletes ready to take their game to the next level. With a more structured approach, this level emphasizes skill development, teamwork, and competition. Athletes can choose between beginner and non-beginner groups to ensure they receive the right support and challenge, preparing them for future sporting endeavors.",
    image: "/img/academy/tennis3.png",
  },
  {
    id: 3,
    title: "Senior",
    age: "16 – 19 years old",
    description:
      "Our Senior program is tailored for aspiring athletes looking to excel in their chosen sport. At this level, we focus on advanced training techniques, performance optimization, and competitive readiness. Athletes will benefit from specialized coaching in either beginner or non-beginner groups, allowing for personalized development that meets their individual goals and aspirations.",
    image: "/images/camp/athlete.jpg",
  },
];

const thunderboltsDataAquatic = [
  {
    id: 1,
    title: "Grassroots",
    age: "6 – 10 years old",
    description:
      "Our Grassroots program is designed to introduce young athletes to the fundamentals of sports in a fun and engaging environment. Through age-appropriate training and activities, we nurture their passion for sports while building essential skills. Athletes in this category will have the opportunity to participate in beginner and non-beginner groups, ensuring tailored coaching that caters to their individual needs and abilities.",
    image: "/images/camp/3.png",
  },
  {
    id: 2,
    title: "Intermediate",
    age: "11 – 15 years old",
    description:
      "The Intermediate program focuses on refining skills and enhancing performance for young athletes ready to take their game to the next level. With a more structured approach, this level emphasizes skill development, teamwork, and competition. Athletes can choose between beginner and non-beginner groups to ensure they receive the right support and challenge, preparing them for future sporting endeavors.",
    image: "/images/camp/2.png",
  },
  {
    id: 3,
    title: "Senior",
    age: "16 – 19 years old",
    description:
      "Our Senior program is tailored for aspiring athletes looking to excel in their chosen sport. At this level, we focus on advanced training techniques, performance optimization, and competitive readiness. Athletes will benefit from specialized coaching in either beginner or non-beginner groups, allowing for personalized development that meets their individual goals and aspirations.",
    image: "/images/camp/1.png",
  },
];

const introTexts = {
  tennis:
    "Our Tennis Academy Program offers comprehensive training for players of all levels, from beginners to advanced athletes. With expert coaching and a focus on developing technique, agility, and strategic play, we help participants enhance their skills and enjoy the game. Whether you are picking up a racket for the first time or aiming to compete at a higher level, our program provides the perfect environment for growth and success. Join us and elevate your tennis game!",
  aquatic:
    "Dive into excellence at THUNDERBOLTS! We offer top-notch training with expert coaches and state-of-the-art facilities, designed to help swimmers of all levels improve their technique and achieve their goals. Whether you're just starting out or aiming for competitive success, our programs provide a supportive and effective environment for every swimmer. Join us and make a splash in your swimming journey!",
};

// Gallery images for each category
const galleryImages = {
  tennis: [
    "/images/ev/1.png",
    "/images/ev/2.png",
    "/images/ev/3.png",
    "/images/ev/4.png",
    "/images/ev/5.png",
    "/images/ev/6.png",
    "/images/ev/7.png",
    "/images/ev/8.png",
  ],
  aquatic: [
    "/images/ev/5.png",
    "/images/ev/6.png",
    "/images/ev/7.png",
    "/images/ev/8.png",
    "/images/ev/1.png",
    "/images/ev/2.png",
    "/images/ev/3.png",
    "/images/ev/4.png",
  ],
};

// Swiper options for gallery slider
const gallerySwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
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
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
};

// Image Gallery Component with Slider
const ImageGallery = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => (
  <div className="row" style={{ marginTop: "40px" }}>
    <div className="col-md-12">
      <div className="event-gallery">
        <h6
          className="wow fadeInUp animated text-uppercase"
          style={{
            color: "var(--primary)",
            fontWeight: "700",
            marginBottom: "30px",
            textAlign: "start",
          }}
        >
          {title}
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
                }}
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
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

export default function IndividualSports() {
  const [activeFilter, setActiveFilter] = useState<"tennis" | "aquatic">(
    "tennis"
  );

  const currentData =
    activeFilter === "tennis" ? tennisData : thunderboltsDataAquatic;
  const currentIntroText = introTexts[activeFilter];
  const currentGalleryImages = galleryImages[activeFilter];
  const galleryTitle =
    activeFilter === "tennis"
      ? "Some Glimpse Of Our Tennis Programs"
      : "Some Glimpse Of Our Aquatic Programs";

  const renderContent = (data: typeof tennisData) => {
    return data.map((item, index) => {
      const isEven = index % 2 === 0;
      const contentSection = (
        <div className="col-md-6">
          <div
            className="event-detail-content"
            style={{
              padding: isEven ? "20px 20px 20px 0" : "20px 0 20px 20px",
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
                marginBottom: "15px",
                fontSize: "22px",
                fontWeight: "700",
                lineHeight: "1.3",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "50%",
                  width: "40px",
                  height: "4px",
                  backgroundColor: "var(--primary)",
                  transform: "translateY(-50%)",
                  borderRadius: "2px",
                }}
              />
              <span style={{ paddingLeft: "50px" }}>{item.title}</span>
            </h4>

            <p
              className="post wow fadeInUp animated p-text"
           
            >
              {item.description}
            </p>

            <Link
              href="/contact"
              className="flat-button wow fadeInUp animated"
              style={{
                alignSelf: "flex-start",
                marginTop: "auto",
              }}
            >
              Register now
            </Link>
          </div>
        </div>
      );
      const imageSection = (
        <div className="col-md-6">
          <div
            className="image-event-content"
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
              padding: isEven ? "0 0 0 20px" : "0 20px 0 0",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.15)";
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className={
                  isEven
                    ? "wow fadeInRight animated"
                    : "wow fadeInLeft animated"
                }
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <div
                className="wow fadeInUp animated"
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  zIndex: 10,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 20px",
                    backgroundColor: "var(--sec)",
                    color: "var(--black)",
                    fontSize: "15px",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.25)",
                    textTransform: "uppercase",
                  }}
                >
                  {item.age}
                </span>
              </div>
            </div>
          </div>
        </div>
      );

      return (
        <div
          key={item.id}
          className="row"
          style={{
            marginBottom: index < data.length - 1 ? "60px" : "0",
            alignItems: "center",
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
    });
  };

  return (
    <Layout headerStyle={1} footerStyle={1}>
        <div>
          <Breadcrum 
            title="Individual Sports"
            breadcrumbs={[
              { label: "Homepage", href: "/" },
              { label: "Academy", href: "/#" },
              { label: "Individual Sports" }
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
                  marginBottom: "30px",
                }}
              >
                {[
                  { label: "Tennis Academy", value: "tennis" },
                  { label: "Thunderbolts Aquatic", value: "aquatic" },
                ].map((filter) => (
                  <div key={filter.value} className="button">
                    <button
                      onClick={() =>
                        setActiveFilter(filter.value as "tennis" | "aquatic")
                      }
                      className={`flat-button ${
                        activeFilter === filter.value ? "active" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        backgroundColor:
                          activeFilter === filter.value ? "#fec802" : "#0049be",
                        color:
                          activeFilter === filter.value ? "#0049be" : "#ffffff",
                      }}
                    >
                      {filter.label}
                    </button>
                  </div>
                ))}
              </div>

              {/* Intro Text */}
              <div
                className="intro-section wow fadeInUp animated"
                style={{
                  marginBottom: "40px",
                  padding: "30px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <p className="post wow fadeInUp animated p-text"
                 
                >
                  {currentIntroText}
                </p>
              </div>

              {/* Render Content */}
              {renderContent(currentData)}

              {/* Image Gallery */}
              <ImageGallery images={currentGalleryImages} title={galleryTitle} />
            </div>
          </div>
        </div>
      </Layout>
  );
}
