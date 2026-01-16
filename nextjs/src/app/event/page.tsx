"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

// Reusable styles
const headingStyle = {
  color: "var(--primary)",
  fontWeight: "700",
};

const categoryHeadingStyle = {
  ...headingStyle,
  marginBottom: "10px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  marginLeft: "20px",
};

const listItemStyle = {
  marginBottom: "15px",
};

// Reusable Event List Item Component
const EventListItem = ({ event }: { event: string }) => (
  <li className="wow fadeInUp animated" style={listItemStyle}>
    <span>
      <CheckmarkIcon />
      &nbsp;&nbsp;{event}
    </span>
  </li>
);

// Reusable Event List Component
const EventList = ({ events, title }: { events: string[]; title: string }) => (
  <div className="event-category-section">
    <h5
      className="wow fadeInUp animated text-uppercase"
      style={categoryHeadingStyle}
    >
      {title}
    </h5>
    <ul style={listStyle}>
      {events.map((event, index) => (
        <EventListItem key={index} event={event} />
      ))}
    </ul>
  </div>
);

// Reusable Feature List Component
const FeatureList = ({ features }: { features: string[] }) => (
  <ul>
    {features.map((feature, index) => (
      <li key={index} className="wow fadeInUp animated">
        <span>
          <CheckmarkIcon />
          {feature}
        </span>
      </li>
    ))}
  </ul>
);

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
// Images are 400x340px (aspect ratio: 1.176:1 or 20:17)
const ImageGallery = ({ images }: { images: string[] }) => (
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
          Some Glimpse Of Our Events
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
                  borderRadius: "8px",
                }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
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

// Reusable Event Card Component
const EventCard = ({ event }: { event: (typeof eventsData)[0] }) => (
  <div className="row py-5">
    <div className="row">
      <div className="col-md-7">
        <div className="event-detail-content">
          <h3
            className="wow fadeInUp animated text-uppercase"
            style={headingStyle}
          >
            {event.title}
          </h3>
          <p className="post wow fadeInUp animated">{event.description}</p>
          {event.features && <FeatureList features={event.features} />}
          <p className="post regis-now wow fadeInUp animated">
            Get ready to showcase your skills and compete with the best in the{" "}
            {event.title}!
            {event.seasonStart && (
              <span className="badge bg-primary">
                NEXT SEASON STARTS IN {event.seasonStart}
              </span>
            )}
          </p>
          {event.link && event.linkText && (
            <Link
              href={event.link}
              target="_blank"
              className="flat-button wow fadeInUp animated"
            >
              {event.linkText}
            </Link>
          )}
        </div>
      </div>
      <div className="col-md-5">
        <div className="image-event-content">
          <img
            src={event.image}
            alt={event.title}
            className="wow fadeInRight animated"
          />
        </div>
      </div>
    </div>
    {event.gallery && <ImageGallery images={event.gallery} />}
  </div>
);

// Event data
const squadEvents = [
  "Basketball U-16 Boys",
  "Basketball U-18 Boys",
  "Basketball U-18 Girls",
  "Cricket U-12 Boys",
  "Cricket U-16 Boys",
  "Cricket U-18 Boys",
  "Football U-12 Boys",
  "Football U-16 Boys",
  "Futsal U-13 Girls",
  "Futsal U-18 Boys",
  "Futsal U-18 Girls",
  "Volleyball U-18 Boys",
  "Volleyball U-18 Girls",
];

const individualEvents = [
  "Archery Boys",
  "Archery Girls",
  "Chess U-14 Boys",
  "Chess U-14 Girls",
  "Chess U-18 Boys",
  "Chess U-18 Girls",
  "E-Sports",
  "Judo Boys",
  "Judo Girls",
  "Swimming",
  "Table Tennis U-12 Boys",
  "Table Tennis U-12 Girls",
  "Table Tennis U-15 Boys",
  "Table Tennis U-15 Girls",
  "Table Tennis U-18 Boys",
  "Taekwondo",
];

const eventsData = [
  {
    id: 1,
    title: "THUNDERBOLTS CUP",
    description:
      "At GEMS, the Thunderbolt is taken as a symbol that exhibits the attributes of its members, never losing heart, even if defeated, but reflecting on where they went wrong and mending the weaknesses to become more goal- oriented, determined, and focused on their destination. The THUNDERBOLTS work relentlessly in order to achieve victory, not letting any setbacks deter their aim and desire to win. The THUNDERBOLTS Cup has been conceptualised to bring together those schools in Nepal which aim to develop, upgrade and promote a progressive sporting culture in the country. The competition comprises numerous wide ranging disciplines through which shared values of sportsmanship, comradeship and love for sports can be created for a holistic sporting environment.",
    image: "/images/event/g4.jpg",
    seasonStart: "DECEMBER 2026",
    gallery: [
      "/images/ev/5.png",
      "/images/ev/6.png",
      "/images/ev/7.png",
      "/images/ev/8.png",
      "/images/ev/1.png",
      "/images/ev/2.png",
      "/images/ev/3.png",
      "/images/ev/4.png",
    ],
  },
  {
    id: 2,
    title: "Nepal School Football League",
    description:
      "The Nepal School Football League is a Football has always been a sport that unites communities, fosters teamwork, and promotes physical fitness. To further cultivate these values among students, we are thrilled to propose the Nepal School Football League. This league is designed to bring together schools under their unique club names, creating a competitive yet friendly environment where young talents can showcase their skills. By adhering to professional standards and FIFA rules, this event aims to inspire the next generation of footballers while celebrating the spirit of sportsmanship.",
    image: "/images/nsfl/trophy.png",
    link: "https://nepalschoolfootballleague.com",
    linkText: "Visit Website",
    seasonStart: "MARCH 2026",
    features: [
      "League-based school football competition",
      "Grand trophy & prize distribution ceremony",
      "Golden Boot (Top Goal Scorer)",
      "Golden Glove (Best Goalkeeper)",
      "Best Player of the Tournament",
      "Fair Play Award",
      "Matches conducted under FIFA rules",
      "Professional referees & officials",
      "Live points table & match statistics",
      "Talent recognition and scouting platform",
    ],
    gallery: [
      "/images/ev/1.png",
      "/images/ev/2.png",
      "/images/ev/3.png",
      "/images/ev/4.png",
      "/images/ev/5.png",
      "/images/ev/6.png",
      "/images/ev/7.png",
      "/images/ev/8.png",
    ],
  },
];

export default function Event() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title page-title-blog">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Events</h1>
                  </div>
                  {/* /.page-title-captions */}
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <Link href="/">Homepage</Link>
                      </li>
                      <li>
                        {" "}
                        <i className="icon-Arrow---Right-2" />
                      </li>
                      <li>
                        <Link href="/event">Events</Link>
                      </li>
                    </ul>
                  </div>
                  {/* /.breadcrumbs */}
                </div>
                {/* /.col-md-12 */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.page-title */}

          <div className="tf-widget-events ">
            <div className="themeflat-container">
              {eventsData
                .filter((event) => event.id === 1)
                .map((event) => (
                  <div key={event.id}>
                    <EventCard event={event} />
                    <div className="row">
                      <div className="col-md-6">
                        <EventList events={squadEvents} title="Squad Events" />
                      </div>
                      <div className="col-md-6">
                        <EventList
                          events={individualEvents}
                          title="Individual Events"
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Widget form contact*/}
          <div className="tf-widget-form-contact form-contact-v2 ">
            <div className="themeflat-container">
              {eventsData
                .filter((event) => event.id !== 1)
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
