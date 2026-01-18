"use client";

import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
};

// Partner/Sponsor data
interface PartnerData {
  id: number;
  image: string;
  alt: string;
  href: string;
}

const partnersData: PartnerData[] = [
  { id: 1, image: "/img/collab/1.png", alt: "Partner 1", href: "https://www.thunderboltsfc.com" },
  { id: 3, image: "/img/collab/6.png", alt: "Partner 3", href: "https://www.gems.edu.np" },
  { id: 5, image: "/img/collab/8.png", alt: "Partner 5", href: "https://www.oneoreight.co" },
  { id: 2, image: "/img/collab/10.png", alt: "Partner 2", href: "https://www.nepalschoolfootballleague.com " },
  { id: 6, image: "/img/collab/9.png", alt: "Partner 6", href: "https://www.heliosnepal.com" },
  { id: 7, image: "/img/collab/7.png", alt: "Partner 7", href: "https://www.avya.club" },
  { id: 8, image: "/img/collab/2.png", alt: "Partner 8", href: "#" },
  { id: 9, image: "/img/collab/3.png", alt: "Partner 9", href: "#" },
  { id: 10, image: "/img/collab/4.png", alt: "Partner 10", href: "#" },
  { id: 11, image: "/img/collab/5.png", alt: "Partner 11", href: "#" },
  { id: 4, image: "/img/collab/11.png", alt: "Partner 4", href: "#" },
];

export default function Partner() {
  return (
    <div className="tf-widget-partner background-black">
      <div className="themeflat-container">
        <div className="tf-partner">
          <Swiper {...swiperOptions} className="sologan-logo">
            {partnersData.map((partner) => (
              <SwiperSlide key={partner.id}>
                <Link href={partner.href}>
                  <Image
                    className="image-logo"
                    src={partner.image}
                    alt={partner.alt}
                    width={150}
                    height={80}
                    style={{ width: "auto", height: "auto" }}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
