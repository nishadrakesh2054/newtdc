"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";


  
  // Camp data
  const campsData = [
    {
      id: 1,
      title: "Grassroots",
      age: "6 – 10 years old",
      description:
        "Our Grassroots program is designed to introduce young athletes to the fundamentals of sports in a fun and engaging environment. Through age-appropriate training and activities, we nurture their passion for sports while building essential skills. Athletes in this category will have the opportunity to participate in beginner and non-beginner groups, ensuring tailored coaching that caters to their individual needs and abilities.",
      image: "/images/camp/wintercmp.jpg",
    
    },
    {
      id: 2,
      title: "Springs Camps",
      description:
        "Kickstart your season with THUNDERBOLTS Spring Camps! Enjoy focused training and skill enhancement to boost your performance.",
      image: "/images/camp/spring.jpg",
   
    },
    {
      id: 3,
      title: "Athletic Development Workshops/Clinics",
      description:
        "Enhance your skills with our Workshops and Clinics! Get expert guidance and focused training to refine techniques and improve performance.",
      image: "/images/camp/athlete.jpg",
    
    },
 
  ];

export default function IndividualSports() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Individual Sports</h1>
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
                        <Link href="/#">Academy</Link>
                      </li>
                      <li>
                        <i className="icon-Arrow---Right-2" />
                      </li>
                      <li>
                        <a>Individual Sports</a>
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

