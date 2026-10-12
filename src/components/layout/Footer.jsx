import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          {/* Column 1: Brand & Mission */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <img
                src="/images/logo.png"
                alt="SoulOfMekong Logo"
                className="footer-logo-img"
              />
              <div>
                <h4 className="footer-title">{siteConfig.name}</h4>
                <span className="footer-subtitle">{siteConfig.slogan}</span>
              </div>
            </div>
            <p className="footer-desc">
              {siteConfig.description}
            </p>
            <div className="footer-social-group">
              <a
                href={siteConfig.socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                title="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={siteConfig.socialMedia.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                title="TikTok"
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <a
                href={siteConfig.socialMedia.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                title="YouTube"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h5 className="footer-heading">Chuyên mục</h5>
            <ul className="footer-links">
              <li>
                <Link to="/"><i className="bi bi-chevron-right"></i> Trang chủ</Link>
              </li>
              <li>
                <Link to="/stories"><i className="bi bi-chevron-right"></i> Câu chuyện</Link>
              </li>
              <li>
                <Link to="/craft-villages"><i className="bi bi-chevron-right"></i> Làng nghề</Link>
              </li>
              <li>
                <Link to="/river-life"><i className="bi bi-chevron-right"></i> Sông nước</Link>
              </li>
              <li>
                <Link to="/references"><i className="bi bi-chevron-right"></i> Tham khảo</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Culture topics */}
          <div className="col-lg-3 col-md-6 col-6">
            <h5 className="footer-heading">Nét đẹp Nam Bộ</h5>
            <ul className="footer-links">
              <li>
                <Link to="/stories?category=1"><i className="bi bi-dot"></i> Lễ hội Ok Om Bok</Link>
              </li>
              <li>
                <Link to="/stories?category=2"><i className="bi bi-dot"></i> Ẩm thực nước nổi</Link>
              </li>
              <li>
                <Link to="/stories?category=4"><i className="bi bi-dot"></i> Đờn ca tài tử</Link>
              </li>
              <li>
                <Link to="/river-life"><i className="bi bi-dot"></i> Chợ nổi Cái Răng</Link>
              </li>
              <li>
                <Link to="/craft-villages/1"><i className="bi bi-dot"></i> Chiếu Định Yên</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Project */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Dự án văn hóa</h5>
            <div className="footer-contact-item">
              <i className="bi bi-geo-alt"></i>
              <span>{siteConfig.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-envelope"></i>
              <span>{siteConfig.contact.email}</span>
            </div>
            <div className="footer-contact-item">
              <i className="bi bi-telephone"></i>
              <span>{siteConfig.contact.phone}</span>
            </div>
            <div className="mt-3">
              <Link to="/references" className="btn-gold-mekong w-100 py-2" style={{ fontSize: "0.85rem" }}>
                <i className="bi bi-info-circle"></i> Về dự án & Tài liệu
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {siteConfig.establishedYear} <strong>{siteConfig.name}</strong> – Dự án truyền thông số bảo tồn văn hóa Tây Nam Bộ.
          </div>
          <div>
            Được phát triển với tình yêu sâu sắc dành cho miền Tây Nam Bộ Việt Nam.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
