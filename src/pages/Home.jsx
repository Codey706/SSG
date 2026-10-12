import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../components/common/HeroBanner";
import ArticleCard from "../components/articles/ArticleCard";
import VillageCard from "../components/villages/VillageCard";
import Loading from "../components/common/Loading";
import { getFeaturedArticles } from "../services/articleService";
import { getFeaturedVillages } from "../services/villageService";
import { getCulturalVideos } from "../services/referenceService";
import { siteConfig } from "../config/siteConfig";

const Home = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [featuredVillages, setFeaturedVillages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const [articles, villages, vids] = await Promise.all([
          getFeaturedArticles(6),
          getFeaturedVillages(3),
          getCulturalVideos()
        ]);
        setFeaturedArticles(articles);
        setFeaturedVillages(villages);
        setVideos(vids);
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu trang chủ:", err);
      } finally {
        setLoading(false);
      }
    };
    loadHomeData();
  }, []);

  return (
    <div className="home-page pb-5">
      {/* 1. Hero Section */}
      <HeroBanner
        badge="Dự án truyền thông số gìn giữ bản sắc"
        title="SoulOfMekong"
        subtitle="Giữ gìn hồn quê miền Tây Nam Bộ"
        description="Khám phá những câu chuyện, làng nghề và nét đẹp văn hóa đặc trưng của vùng đất chín rồng."
        bgImage="/images/banners/hero-mekong.svg"
        ctaText="Khám phá ngay"
        ctaLink="/stories"
        secondaryCtaText="Làng nghề truyền thống"
        secondaryCtaLink="/craft-villages"
      />

      <div className="container">
        {/* 2. Featured Categories Section */}
        <section className="my-5">
          <div className="section-header">
            <span className="section-tag">Khám phá nét đẹp</span>
            <h2 className="section-title">Chủ Đề Tiêu Biểu Miền Tây</h2>
            <p className="section-desc">
              Hành trình trải nghiệm và cảm nhận trọn vẹn tinh hoa sông nước, nếp sống thuần hậu và các di sản văn hóa truyền đời.
            </p>
          </div>

          <div className="row g-4">
            {/* Category 1: Câu chuyện văn hóa */}
            <div className="col-lg-4 col-md-6">
              <div className="category-card">
                <div className="category-card-img-wrap">
                  <img
                    src="/images/articles/ok-om-bok.svg"
                    alt="Câu chuyện văn hóa"
                    className="category-card-img"
                  />
                  <div className="category-card-overlay">
                    <i className="bi bi-book-half"></i>
                  </div>
                </div>
                <div className="category-card-body">
                  <h3 className="category-card-title">Câu chuyện văn hóa</h3>
                  <p className="category-card-desc">
                    Lễ hội Ok Om Bok rộn ràng, nghệ thuật Đờn ca tài tử bất hủ cùng nét đẹp tâm linh, tín ngưỡng của các dân tộc anh em.
                  </p>
                  <Link to="/stories" className="category-card-link">
                    Xem câu chuyện <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 2: Làng nghề truyền thống */}
            <div className="col-lg-4 col-md-6">
              <div className="category-card">
                <div className="category-card-img-wrap">
                  <img
                    src="/images/villages/chieu-dinh-yen.svg"
                    alt="Làng nghề truyền thống"
                    className="category-card-img"
                  />
                  <div className="category-card-overlay">
                    <i className="bi bi-tools"></i>
                  </div>
                </div>
                <div className="category-card-body">
                  <h3 className="category-card-title">Làng nghề truyền thống</h3>
                  <p className="category-card-desc">
                    Chiếu Định Yên rực rỡ sắc màu, vương quốc gốm đỏ Mang Thít và nghề tráng bánh thơm nức nở lưu truyền trăm năm.
                  </p>
                  <Link to="/craft-villages" className="category-card-link">
                    Khám phá làng nghề <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Category 3: Đời sống sông nước */}
            <div className="col-lg-4 col-md-12">
              <div className="category-card">
                <div className="category-card-img-wrap">
                  <img
                    src="/images/articles/cho-noi-cai-rang.svg"
                    alt="Đời sống sông nước"
                    className="category-card-img"
                  />
                  <div className="category-card-overlay">
                    <i className="bi bi-water"></i>
                  </div>
                </div>
                <div className="category-card-body">
                  <h3 className="category-card-title">Đời sống sông nước</h3>
                  <p className="category-card-desc">
                    Nhịp sống chợ nổi rộn rã bồng bềnh, cây bẹo mời chào và chiếc xuồng ba lá – người bạn tri kỷ của người dân phương Nam.
                  </p>
                  <Link to="/river-life" className="category-card-link">
                    Trải nghiệm sông nước <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Articles Section */}
        <section className="my-5 pt-3">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="section-tag text-start">Góc di sản</span>
              <h2 className="section-title text-start mb-0">Bài Viết Nổi Bật</h2>
            </div>
            <Link to="/stories" className="btn-outline-mekong mt-3 mt-md-0">
              Xem tất cả bài viết <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {loading ? (
            <Loading message="Đang tải các bài viết nổi bật..." />
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>

        {/* 4. Quote Banner */}
        <div className="quote-banner">
          <blockquote>"{siteConfig.quote}"</blockquote>
          <div className="quote-author">— Tinh thần dự án SoulOfMekong —</div>
        </div>

        {/* 5. Traditional Craft Villages Spotlight */}
        <section className="my-5 pt-3">
          <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
            <div>
              <span className="section-tag text-start">Di sản trăm năm</span>
              <h2 className="section-title text-start mb-0">Làng Nghề Tiêu Biểu</h2>
            </div>
            <Link to="/craft-villages" className="btn-outline-mekong mt-3 mt-md-0">
              Khám phá toàn bộ làng nghề <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            {featuredVillages.map((village) => (
              <VillageCard key={village.id} village={village} />
            ))}
          </div>
        </section>

        {/* 6. Short Video Highlights (TikTok / Multimedia showcase) */}
        <section className="my-5 pt-3">
          <div className="section-header">
            <span className="section-tag">Thước phim văn hóa</span>
            <h2 className="section-title">Nét Sống Qua Thước Phim Ngắn</h2>
            <p className="section-desc">
              Những lát cắt chân thực, mộc mạc và gần gũi về nhịp sống Tây Nam Bộ được ghi lại qua góc nhìn thế hệ trẻ.
            </p>
          </div>

          <div className="row g-4">
            {videos.map((vid) => (
              <div key={vid.id} className="col-lg-4 col-md-6">
                <div className="article-card card-hover-effect">
                  <div className="article-card-thumb-wrap img-zoom-container">
                    <img
                      src={vid.thumbnail}
                      alt={vid.title}
                      className="article-card-thumb"
                    />
                    <div
                      className="position-absolute top-50 start-50 translate-middle"
                      style={{
                        width: "56px",
                        height: "56px",
                        backgroundColor: "rgba(20, 90, 67, 0.85)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: "1.5rem",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
                      }}
                    >
                      <i className="bi bi-play-fill" style={{ marginLeft: "3px" }}></i>
                    </div>
                    <span className="article-card-badge">
                      <i className="bi bi-stopwatch me-1"></i> {vid.duration}
                    </span>
                  </div>
                  <div className="article-card-body">
                    <div className="d-flex justify-content-between text-muted small mb-2">
                      <span><i className="bi bi-camera-video me-1"></i> {vid.author}</span>
                      <span><i className="bi bi-eye me-1"></i> {vid.views} lượt xem</span>
                    </div>
                    <h4 className="article-card-title" style={{ fontSize: "1.05rem" }}>
                      {vid.title}
                    </h4>
                    <p className="article-card-desc mb-0">{vid.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. About SoulOfMekong & Mission */}
        <section className="about-section">
          <div className="row g-4 align-items-center">
            <div className="col-lg-5 text-center text-lg-start">
              <span className="section-tag text-start">Sứ mệnh của chúng tôi</span>
              <h2 className="section-title text-start mb-3" style={{ fontSize: "2rem" }}>
                Về Dự Án SoulOfMekong
              </h2>
              <p className="text-muted mb-4" style={{ lineHeight: 1.8 }}>
                {siteConfig.description}
              </p>
              <Link to="/references" className="btn-primary-mekong">
                <i className="bi bi-book"></i> Xem tư liệu & Đội ngũ
              </Link>
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                {siteConfig.mission.map((item, idx) => (
                  <div key={idx} className="col-md-12">
                    <div className="mission-card">
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <i className="bi bi-check-circle-fill text-success fs-5"></i>
                        <h4 className="mission-card-title mb-0">{item.title}</h4>
                      </div>
                      <p className="mission-card-desc ps-4">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Social Media Channels Section */}
        <section className="social-section">
          <h3 className="fw-bold mb-2" style={{ color: "var(--color-primary)" }}>
            Kết Nối Cùng SoulOfMekong
          </h3>
          <p className="text-muted mb-0">
            Theo dõi chúng tôi trên mạng xã hội để cập nhật những câu chuyện văn hóa, hình ảnh và video mới nhất!
          </p>
          <div className="social-platforms-grid">
            <a
              href={siteConfig.socialMedia.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-channel-card"
            >
              <i className="bi bi-tiktok text-dark"></i>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-muted-text)" }}>Kênh TikTok</div>
                <div className="fw-bold">{siteConfig.socialMedia.tiktok.handle}</div>
              </div>
            </a>
            <a
              href={siteConfig.socialMedia.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-channel-card"
            >
              <i className="bi bi-facebook text-primary"></i>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-muted-text)" }}>Trang Facebook</div>
                <div className="fw-bold">{siteConfig.socialMedia.facebook.handle}</div>
              </div>
            </a>
            <a
              href={siteConfig.socialMedia.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-channel-card"
            >
              <i className="bi bi-youtube text-danger"></i>
              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-muted-text)" }}>Kênh YouTube</div>
                <div className="fw-bold">{siteConfig.socialMedia.youtube.handle}</div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
