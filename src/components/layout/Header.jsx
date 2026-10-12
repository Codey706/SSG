import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { siteConfig } from "../../config/siteConfig";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          {/* Logo & Brand */}
          <Link to="/" className="navbar-brand" onClick={closeNav}>
            <img
              src="/images/logo.png"
              alt="SoulOfMekong Logo"
              className="brand-logo-img"
            />
            <div className="brand-text-wrap">
              <span className="brand-title">SoulOfMekong</span>
              <span className="brand-subtitle">Hồn Quê Miền Tây</span>
            </div>
          </Link>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded={navOpen}
            aria-label="Chuyển đổi menu điều hướng"
          >
            <i className={`bi ${navOpen ? "bi-x-lg" : "bi-list"}`}></i>
          </button>

          {/* Navigation Items */}
          <div className={`collapse navbar-collapse ${navOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link-mekong ${isActive ? "active" : ""}`
                  }
                  end
                  onClick={closeNav}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/stories"
                  className={({ isActive }) =>
                    `nav-link-mekong ${isActive ? "active" : ""}`
                  }
                  onClick={closeNav}
                >
                  Câu chuyện văn hóa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/craft-villages"
                  className={({ isActive }) =>
                    `nav-link-mekong ${isActive ? "active" : ""}`
                  }
                  onClick={closeNav}
                >
                  Làng nghề truyền thống
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/river-life"
                  className={({ isActive }) =>
                    `nav-link-mekong ${isActive ? "active" : ""}`
                  }
                  onClick={closeNav}
                >
                  Đời sống sông nước
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/references"
                  className={({ isActive }) =>
                    `nav-link-mekong ${isActive ? "active" : ""}`
                  }
                  onClick={closeNav}
                >
                  Tham khảo
                </NavLink>
              </li>
            </ul>

            {/* Social Media Quick Links */}
            <div className="header-social-links mt-2 mt-lg-0">
              <a
                href={siteConfig.socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-btn"
                title={siteConfig.socialMedia.facebook.label}
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href={siteConfig.socialMedia.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-btn"
                title={siteConfig.socialMedia.tiktok.label}
              >
                <i className="bi bi-tiktok"></i>
              </a>
              <Link
                to="/stories"
                className="btn-gold-mekong ms-2 d-none d-xl-inline-flex"
                style={{ padding: "6px 16px", fontSize: "0.85rem" }}
              >
                <i className="bi bi-compass"></i> Khám phá
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
