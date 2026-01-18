"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

interface BenefitItem {
  id: number;
  number: string;
  title: string;
  description: string;
  animation: "fadeInLeft" | "fadeInRight";
  numberPosition: "left" | "right";
}

const benefitsData: BenefitItem[] = [
  {
    id: 1,
    number: "01",
    title: "International Collaborations",
    description:
      "We have tie-ups and partnerships with various international sporting companies and clubs, providing unique opportunities for our members to engage in global sporting experiences.",
    animation: "fadeInLeft",
    numberPosition: "left",
  },
  {
    id: 2,
    number: "02",
    title: "World-Class Facilities",
    description:
      "Our international-standard facilities provide top-tier equipment and spaces for football, tennis, swimming, and esports, ensuring a professional environment for athletes at all levels.",
    animation: "fadeInLeft",
    numberPosition: "left",
  },
  {
    id: 3,
    number: "03",
    title: "Expert Coaching",
    description:
      "Our licensed coaches offer personalized training programs, helping athletes of all skill levels reach their potential with expert guidance and support.",
    animation: "fadeInRight",
    numberPosition: "right",
  },
  {
    id: 4,
    number: "04",
    title: "Holistic Development",
    description:
      "From sports science to nutrition and mental health, we focus on every aspect of athlete development.",
    animation: "fadeInRight",
    numberPosition: "right",
  },
];

const videoShapes = [
  { className: "shape-video-1", src: "/images/retinal/Inforgraphic.png", alt: "Info graphic 1" },
  { className: "shape-video-2", src: "/images/retinal/Inforgraphic1.png", alt: "Info graphic 2" },
  { className: "shape-video-3", src: "/images/retinal/Inforgraphic2.png", alt: "Info graphic 3" },
  { className: "shape-video-4", src: "/images/retinal/Inforgraphic3.png", alt: "Info graphic 4" },
];

export default function Benefit1() {
  const [isOpen, setOpen] = useState(false);

  const leftBenefits = benefitsData.filter((benefit) => benefit.numberPosition === "left");
  const rightBenefits = benefitsData.filter((benefit) => benefit.numberPosition === "right");

  return (
    <>
      <div className="tf-widget-benefit background-black">
        <div className="themeflat-container">
          <div className="tf-benefit">
            <div className="title-box-v2 center-title-box title-large">
              <span className="sub-title wow fadeInUp animated" style={{ color: "var(--sec)" }}>
                TDC&apos;s benefits
              </span>
              <h2 className="title-section wow fadeInUp animated">Why TDC?</h2>
            </div>
            <div className="benefit-wrap-content">
              <div className="row">
                <div className="col-md-4 benefit-on-left">
                  {leftBenefits.map((benefit) => (
                    <div key={benefit.id} className="benefit-item">
                      <div className="benefit-content">
                        <h6 className={`title-benefit wow ${benefit.animation} animated`}>
                          {benefit.title}
                        </h6>
                        <p className={`description-benefit wow ${benefit.animation} animated`}>
                          {benefit.description}
                        </p>
                      </div>
                      <div className="benefit-number">
                        <span className="number wow zoomIn animated">{benefit.number}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-4 benefit-center">
                  <div className="benefit-video">
                    <img
                      className="video"
                      src="/images/retinal/video.png"
                      alt="TDC Benefits Video"
                    />
                    <a onClick={() => setOpen(true)} className="popup-youtube">
                      <i className="icon-play3" />
                    </a>
                    {videoShapes.map((shape, index) => (
                      <img
                        key={index}
                        className={shape.className}
                        src={shape.src}
                        alt={shape.alt}
                      />
                    ))}
                  </div>
                </div>
                <div className="col-md-4 benefit-on-right">
                  {rightBenefits.map((benefit) => (
                    <div key={benefit.id} className="benefit-item">
                      <div className="benefit-number">
                        <span className="number wow zoomIn animated">{benefit.number}</span>
                      </div>
                      <div className="benefit-content">
                        <h6 className={`title-benefit wow ${benefit.animation} animated`}>
                          {benefit.title}
                        </h6>
                        <p className={`description-benefit wow ${benefit.animation} animated`}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="H2XsnzwXp9U"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
