import React from "react";
import { Link } from "react-router-dom";

const HeroBanner = ({
  badge = "Bảo tồn di sản Tây Nam Bộ",
  title = "SoulOfMekong",
  subtitle = "Giữ gìn hồn quê miền Tây Nam Bộ",
  description = "Khám phá những câu chuyện, làng nghề và nét đẹp văn hóa đặc trưng của vùng đất chín rồng.",
  bgImage = "/images/banners/hero-mekong.svg",
  ctaText = "Khám phá ngay",
  ctaLink = "/stories",
  secondaryCtaText = "Tìm hiểu làng nghề",
  secondaryCtaLink = "/craft-villages"
}) => {
  return (
    <section className="hero-section">
      <div className="hero-bg-wrapper">
        <img src={bgImage} alt={title} className="hero-bg-img" />
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            {badge && (
              <span className="hero-badge">
                <i className="bi bi-flower1"></i> {badge}
              </span>
            )}
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <p className="hero-desc">{description}</p>
            <div className="hero-cta-group">
              {ctaText && (
                <Link to={ctaLink} className="btn-gold-mekong">
                  <i className="bi bi-compass"></i> {ctaText}
                </Link>
              )}
              {secondaryCtaText && (
                <Link
                  to={secondaryCtaLink}
                  className="btn-outline-mekong"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.6)"
                  }}
                >
                  <i className="bi bi-shop"></i> {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
