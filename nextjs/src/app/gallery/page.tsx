"use client";

import Link from "next/link";
import Layout from "../../components/layout/Layout";
import { useState, useMemo } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "../../data/gallery.json";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [
      "All",
      ...Array.from(new Set(galleryData.map((item) => item.category))),
    ];
    return cats;
  }, []);

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryData;
    }
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // All images for lightbox (used when clicking on any image)
  const allGalleryImages = galleryData.map((item) => ({
    original: item.image,
    thumbnail: item.image,
    description: item.title,
  }));

  const handleImageClick = (index: number) => {
    // Find the actual index in the full gallery
    const clickedImage = filteredImages[index];
    const actualIndex = galleryData.findIndex(
      (item) => item.id === clickedImage.id
    );
    setCurrentImageIndex(actualIndex);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <div className="page-title">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    <h1 className="title">Gallery</h1>
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
                        <a>Gallery</a>
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
          {/* Gallery Content */}
          <section className="main-content">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="content-section wow fadeInUp animated">
                    {/* Filter Buttons */}
                    <div
                      className="gallery-filters"
                      style={{
                        display: "flex",
                        gap: "15px",
                        flexWrap: "wrap",
                        justifyContent: "start",
                      }}
                    >
                      {categories.map((category) => (
                        <div key={category} className="button">
                          <button
                            onClick={() => setSelectedCategory(category)}
                            className={`flat-button ${
                              selectedCategory === category ? "active" : ""
                            }`}
                            style={{
                              cursor: "pointer",
                              textDecoration: "none",
                              backgroundColor:
                                selectedCategory === category
                                  ? "#fec802"
                                  : "#0049be",
                              color:
                                selectedCategory === category
                                  ? "#0049be"
                                  : "#ffffff",
                            }}
                          >
                            {category}
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Gallery Grid */}
                    <div
                      className="gallery-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "30px",
                        marginTop: "40px",
                      }}
                    >
                      {filteredImages.map((item, index) => (
                        <div
                          key={item.id}
                          className="gallery-item"
                          onClick={() => handleImageClick(index)}
                          style={{
                            position: "relative",
                            overflow: "hidden",
                            cursor: "pointer",
                            borderRadius: "8px",
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              right: 0,
                              background:
                                "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                              padding: "20px",
                              color: "#fff",
                            }}
                          >
                            <h4
                              style={{
                                color: "#fff",
                                margin: "0 0 5px 0",
                                fontSize: "18px",
                              }}
                            >
                              {item.title}
                            </h4>
                         
                          </div>
                        </div>
                      ))}
                    </div>

                    {filteredImages.length === 0 && (
                      <p
                        style={{
                          textAlign: "center",
                          marginTop: "40px",
                          color: "#5e6267",
                        }}
                      >
                        No images found in this category.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              overflow: "auto",
            }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "1200px",
                position: "relative",
                maxHeight: "90vh",
                margin: "auto",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsLightboxOpen(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "var(--sec)",
                  border: "none",
                  color: "var(--primary)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "30px",
                  fontWeight: "nor",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10000,
                  transition: "all 0.3s ease",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
                  lineHeight: "1",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.95)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ×
              </button>
              <div style={{ maxHeight: "90vh", overflow: "hidden" }}>
                <ImageGallery
                  items={allGalleryImages}
                  startIndex={currentImageIndex}
                  showPlayButton={false}
                  showFullscreenButton={true}
                  showThumbnails={true}
                  autoPlay={false}
                />
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
