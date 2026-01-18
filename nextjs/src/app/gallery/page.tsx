"use client";

import Layout from "../../components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import { useState, useMemo, useCallback } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "../../data/gallery.json";

const COLORS = {
  primary: "#0049be",
  secondary: "#fec802",
  white: "#ffffff",
  text: "#5e6267",
  overlay: "rgba(0, 0, 0, 0.8)",
  modalBg: "rgba(0, 0, 0, 0.8)",
} as const;

const STYLES = {
  filtersContainer: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap" as const,
    justifyContent: "start" as const,
  },
  filterButton: (isActive: boolean) => ({
    cursor: "pointer" as const,
    textDecoration: "none" as const,
    backgroundColor: isActive ? COLORS.secondary : COLORS.primary,
    color: isActive ? COLORS.primary : COLORS.white,
  }),
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "30px",
    marginTop: "40px",
  },
  galleryItem: {
    position: "relative" as const,
    overflow: "hidden" as const,
    cursor: "pointer" as const,
   transition: "transform 0.3s ease",
  },
  imageOverlay: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    background: `linear-gradient(to top, ${COLORS.overlay}, transparent)`,
    padding: "20px",
    color: COLORS.white,
  },
  imageTitle: {
    color: COLORS.white,
    margin: "0 0 5px 0",
    fontSize: "18px",
  },
  emptyState: {
    textAlign: "center" as const,
    marginTop: "40px",
    color: COLORS.text,
  },
  modalOverlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: COLORS.modalBg,
    zIndex: 9999,
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    padding: "20px",
    overflow: "auto" as const,
  },
  modalContent: {
    width: "100%",
    maxWidth: "1200px",
    position: "relative" as const,
    maxHeight: "90vh",
    margin: "auto",
  },
  closeButton: {
    position: "absolute" as const,
    top: "10px",
    right: "10px",
    background: "var(--sec)",
    border: "none",
    color: "var(--primary)",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    cursor: "pointer" as const,
    fontSize: "30px",
    fontWeight: "normal" as const,
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    zIndex: 10000,
    transition: "all 0.3s ease",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
    lineHeight: "1",
  },
} as const;

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(galleryData.map((item) => item.category))),
    ];
  }, []);

  const filteredImages = useMemo(() => {
    if (selectedCategory === "All") {
      return galleryData;
    }
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const allGalleryImages = useMemo(
    () =>
      galleryData.map((item) => ({
        original: item.image,
        thumbnail: item.image,
        description: item.title,
      })),
    []
  );

  const handleImageClick = useCallback(
    (index: number) => {
      const clickedImage = filteredImages[index];
      const actualIndex = galleryData.findIndex(
        (item) => item.id === clickedImage.id
      );
      setCurrentImageIndex(actualIndex);
      setIsLightboxOpen(true);
    },
    [filteredImages]
  );

  const handleCloseLightbox = useCallback(() => {
    setIsLightboxOpen(false);
  }, []);

  const handleItemHover = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, scale: number) => {
      e.currentTarget.style.transform = `scale(${scale})`;
    },
    []
  );

  const handleCloseButtonHover = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, background: string) => {
      e.currentTarget.style.background = background;
      e.currentTarget.style.transform = background === COLORS.white ? "scale(1.1)" : "scale(1)";
    },
    []
  );

  return (
    <Layout headerStyle={1} footerStyle={1}>
        <div>
          <Breadcrum title="Gallery" />
          {/* /.page-title */}
          {/* Gallery Content */}
          <section className="main-content">
            <div className="themeflat-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="content-section wow fadeInUp animated">
                    <div className="gallery-filters" style={STYLES.filtersContainer}>
                      {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                          <div key={category} className="button">
                            <button
                              onClick={() => setSelectedCategory(category)}
                              className={`flat-button ${isActive ? "active" : ""}`}
                              style={STYLES.filterButton(isActive)}
                            >
                              {category}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className="gallery-grid" style={STYLES.galleryGrid}>
                      {filteredImages.map((item, index) => (
                        <div
                          key={item.id}
                          className="gallery-item"
                          onClick={() => handleImageClick(index)}
                          style={STYLES.galleryItem}
                          onMouseEnter={(e) => handleItemHover(e, 1.05)}
                          onMouseLeave={(e) => handleItemHover(e, 1)}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={300}
                            height={300}
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                              display: "block",
                            }}
                          />
                          <div style={STYLES.imageOverlay}>
                            <h4 style={STYLES.imageTitle}>{item.title}</h4>
                          </div>
                        </div>
                      ))}
                    </div>

                    {filteredImages.length === 0 && (
                      <p style={STYLES.emptyState}>
                        No images found in this category.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {isLightboxOpen && (
          <div style={STYLES.modalOverlay} onClick={handleCloseLightbox}>
            <div
              style={STYLES.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleCloseLightbox}
                style={STYLES.closeButton}
                onMouseEnter={(e) => handleCloseButtonHover(e, COLORS.white)}
                onMouseLeave={(e) =>
                  handleCloseButtonHover(e, "rgba(255, 255, 255, 0.95)")
                }
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
  );
}
