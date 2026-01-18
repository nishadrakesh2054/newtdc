"use client";

import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Icon Components
const CalendarIcon = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 14 14"
    fill="var(--sec)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8333 1.07692H11.0833V0.538462C11.0833 0.395653 11.0219 0.258693 10.9125 0.157712C10.8031 0.0567306 10.6547 0 10.5 0C10.3453 0 10.1969 0.0567306 10.0875 0.157712C9.97812 0.258693 9.91667 0.395653 9.91667 0.538462V1.07692H4.08333V0.538462C4.08333 0.395653 4.02187 0.258693 3.91248 0.157712C3.80308 0.0567306 3.65471 0 3.5 0C3.34529 0 3.19692 0.0567306 3.08752 0.157712C2.97812 0.258693 2.91667 0.395653 2.91667 0.538462V1.07692H1.16667C0.857247 1.07692 0.560501 1.19038 0.341709 1.39235C0.122916 1.59431 0 1.86823 0 2.15385V12.9231C0 13.2087 0.122916 13.4826 0.341709 13.6846C0.560501 13.8865 0.857247 14 1.16667 14H12.8333C13.1428 14 13.4395 13.8865 13.6583 13.6846C13.8771 13.4826 14 13.2087 14 12.9231V2.15385C14 1.86823 13.8771 1.59431 13.6583 1.39235C13.4395 1.19038 13.1428 1.07692 12.8333 1.07692ZM12.8333 4.30769H1.16667V2.15385H2.91667V2.69231C2.91667 2.83512 2.97812 2.97208 3.08752 3.07306C3.19692 3.17404 3.34529 3.23077 3.5 3.23077C3.65471 3.23077 3.80308 3.17404 3.91248 3.07306C4.02187 2.97208 4.08333 2.83512 4.08333 2.69231V2.15385H9.91667V2.69231C9.91667 2.83512 9.97812 2.97208 10.0875 3.07306C10.1969 3.17404 10.3453 3.23077 10.5 3.23077C10.6547 3.23077 10.8031 3.17404 10.9125 3.07306C11.0219 2.97208 11.0833 2.83512 11.0833 2.69231V2.15385H12.8333V4.30769Z"
      fill="var(--sec)"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    width={13}
    height={16}
    viewBox="0 0 13 16"
    fill="var(--sec)"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.28578 0C4.61927 0.00189054 3.02155 0.664747 1.84315 1.84315C0.664747 3.02155 0.00189054 4.61927 0 6.28578C0 11.6644 5.71434 15.7266 5.95792 15.8966C6.054 15.9639 6.16847 16 6.28578 16C6.40309 16 6.51756 15.9639 6.61364 15.8966C6.85721 15.7266 12.5716 11.6644 12.5716 6.28578C12.5697 4.61927 11.9068 3.02155 10.7284 1.84315C9.55 0.664747 7.95229 0.00189054 6.28578 0ZM6.28578 4.00004C6.73785 4.00004 7.17978 4.1341 7.55567 4.38526C7.93155 4.63642 8.22452 4.9934 8.39752 5.41106C8.57053 5.82873 8.61579 6.28831 8.5276 6.7317C8.4394 7.17509 8.2217 7.58237 7.90204 7.90204C7.58237 8.2217 7.17509 8.4394 6.7317 8.5276C6.28831 8.61579 5.82873 8.57053 5.41106 8.39752C4.9934 8.22452 4.63642 7.93155 4.38526 7.55567C4.1341 7.17978 4.00004 6.73785 4.00004 6.28578C4.00004 5.67956 4.24086 5.09818 4.66952 4.66952C5.09818 4.24086 5.67956 4.00004 6.28578 4.00004Z"
      fill="var(--sec)"
    />
  </svg>
);

// Types
interface EventData {
  status: string; // "Upcoming Event", "Running Event", etc.
  title: string;
  date: string;
  location: string;
  image?: string;
  href?: string;
}

interface SlideData {
  id: number;
  image: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  event?: EventData; // Optional event data
}

// Slider data
const slidesData: SlideData[] = [
  {
    id: 1,
    image: "/images/slides/slide1.png",
    title: "Train Strong. Play Better. Grow Together.",
    buttonText: "Join our sports camp",
    buttonHref: "/contact",
    event: {
      status: "Upcoming Event",
      title: "Winter Camp 2026",
      date: "Oct 20, 2026",
      location: "Dhapakhel, Lalitpur | Nepal",
      image: "/images/evtent/new-event.jpg",
      href: "/event-details",
    },
  },
  {
    id: 2,
    image: "/images/slides/slide2.png",
    title: "Play with Heart. Win as One.",
    buttonText: "Join our football club",
    buttonHref: "/contact",
    event: {
      status: "Running Event",
      title: "Football Tournament 2026",
      date: "oct 20, 2026",
      location: "Dhapakhel, Lalitpur | Nepal",
      image: "/images/evtent/new-event.jpg",
      href: "/event-details",
    },
  },
  {
    id: 3,
    image: "/images/slides/slide4.png",
    title: "Find Your Stroke, Find Your Flow",
    buttonText: "Join our swim club",
    buttonHref: "/contact",
    event: {
      status: "Upcoming Event",
      title: "Swimming Championship 2026",
      date: "DEC 20, 2026",
      location: "Biratnagar, Jhapa | Nepal",
      image: "/images/evtent/new-event.jpg",
      href: "/event-details",
    },
  },
];

// Swiper options
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
};

// Event Box Component
const EventBox = ({ event }: { event: EventData }) => (
  <div className="box-events-slide">
    <span className="new-event">{event.status}</span>
    {event.image && (
      <Image
        src={event.image}
        alt={event.title}
        width={414}
        height={300}
        className="new-event"
        style={{ width: "100%", height: "auto" }}
      />
    )}
    <div className="content-event">
      <h2 className="title-event">
        <Link href={event.href || "/event-details"}>{event.title}</Link>
      </h2>
      <ul>
        <li>
          <span className="icon-new">
            <CalendarIcon />
          </span>
          <Link href={event.href || "/event-details"}>{event.date}</Link>
        </li>
        <li>
          <span className="icon-new">
            <LocationIcon />
          </span>
          <Link href={event.href || "/event-details"}>{event.location}</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default function Slider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="tf-slider-widget swiper mySwiper">
        <div className="tf-slider swiper-wrapper">
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="tf-banner swiper-slide">
              <div className="image-slider">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={slide.id === 1}
                  className="object-cover"
                />
                <div className="overlay" />
              </div>
              <div className="themeflat-container">
                <div className={`slide-item ${!slide.event ? 'no-event' : ''}`}>
                  <div className="silde-content">
                    <h1 className="flat-title-slider">{slide.title}</h1>
                    <div className="button ">
                      <Link href={slide.buttonHref} className="flat-button d-flex align-items-center  gap-2">
                        {slide.buttonText} <span className="arrow-right"><Image src="/img/logo/button-img.png" alt="" width={15} height={15} /></span>
                      </Link>
                    </div>
                  </div>
                  {slide.event && <EventBox event={slide.event} />}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
