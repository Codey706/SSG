import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import ArticleCard from "../components/articles/ArticleCard";
import Loading from "../components/common/Loading";
import { getRiverLifeArticles } from "../services/articleService";

const RiverLife = () => {
  const [riverArticles, setRiverArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRiverData = async () => {
      setLoading(true);
      try {
        const data = await getRiverLifeArticles();
        setRiverArticles(data);
      } catch (err) {
        console.error("Lỗi khi tải dữ liệu đời sống sông nước:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRiverData();
  }, []);

  const highlights = [
    {
      title: "Chợ nổi – Giao thương bồng bềnh",
      desc: "Nét văn hóa chợ trên sông độc đáo với cây bẹo treo gì bán nấy, ghe thuyền tấp nập buổi bình minh.",
      icon: "bi-water",
      img: "/images/articles/cho-noi-cai-rang.svg"
    },
    {
      title: "Ghe xuồng – Đôi chân trên sóng",
      desc: "Chiếc xuồng ba lá, ghe tam bản luồn lách qua từng kênh rạch nông sâu, gắn liền với mưu sinh và tuổi thơ.",
      icon: "bi-compass",
      img: "/images/articles/xuong-ba-la.svg"
    },
    {
      title: "Sinh hoạt ven sông",
      desc: "Nhà sàn nghiêng bóng nước, tiếng cười trẻ thơ nhảy cầu tắm sông và mâm cơm chiều thơm lựng bên bờ kênh.",
      icon: "bi-house-heart",
      img: "/images/river-life/sinh-hoat-song-nuoc.svg"
    },
    {
      title: "Văn hóa thương hồ nghĩa tình",
      desc: "Những người thương hồ nay đây mai đó, lấy dòng sông làm quê hương, sống chân thành và hào sảng.",
      icon: "bi-people",
      img: "/images/river-life/giao-thuong-duong-thuy.svg"
    }
  ];

  return (
    <div className="river-life-page pb-5">
      {/* Visual Banner */}
      <div
        className="page-banner position-relative text-white py-5 mb-4"
        style={{
          background: "linear-gradient(135deg, #11453b 0%, #145A43 60%, #061d15 100%)",
          boxShadow: "0 4px 20px rgba(20,90,67,0.15)"
        }}
      >
        <div className="container position-relative py-3">
          <span className="badge-gold mb-2">Con nước lớn ròng</span>
          <h1 className="fw-bold mb-2 text-white" style={{ fontSize: "2.6rem" }}>
            Đời Sống Sông Nước
          </h1>
          <p className="mb-0 text-white-50" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
            Khám phá nền văn minh sông nước trù phú nơi dòng Cửu Long bồi đắp phù sa, nơi chiếc xuồng là đôi chân và dòng sông là nguồn sống.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Đời sống sông nước" }]} />

        {/* Introduction Section */}
        <section className="bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <span className="section-tag text-start">Hơi thở đồng bằng</span>
              <h2 className="section-title text-start mb-3" style={{ fontSize: "2rem" }}>
                Sông Nước – Linh Hồn Vùng Đất Chín Rồng
              </h2>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Miền Tây Nam Bộ được ôm ấp bởi mạng lưới sông ngòi, kênh rạch chằng chịt dài hàng ngàn cây số. Nơi đây, dòng nước không chỉ định hình phong cảnh mà còn nhào nặn nên lối sống, phong tục, phương thức canh tác và tính cách phóng khoáng của con người.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Từ tờ mờ sáng khi tiếng máy đuôi tôm nổ giòn báo hiệu phiên chợ nổi bắt đầu, đến những buổi trưa thanh bình tiếng mái chèo khua nước róc rách dưới rặng dừa nước... tất cả hòa quyện tạo nên một bức tranh đồng quê yên bình nhưng tràn đầy sức sống.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="rounded-4 overflow-hidden shadow-sm">
                <img
                  src="/images/banners/river-life-banner.svg"
                  alt="Đời sống sông nước miền Tây"
                  className="w-100 h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of River Life */}
        <section className="mb-5">
          <div className="section-header">
            <span className="section-tag">Nét đặc trưng</span>
            <h2 className="section-title">Những Biểu Tượng Sông Nước</h2>
            <p className="section-desc">
              Bốn mảnh ghép tạo nên diện mạo sinh động của nền văn hóa sông nước Tây Nam Bộ.
            </p>
          </div>

          <div className="row g-4">
            {highlights.map((h, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="category-card">
                  <div className="category-card-img-wrap" style={{ height: "170px" }}>
                    <img src={h.img} alt={h.title} className="category-card-img" />
                    <div className="category-card-overlay">
                      <i className={`bi ${h.icon}`}></i>
                    </div>
                  </div>
                  <div className="category-card-body p-3">
                    <h4 className="category-card-title" style={{ fontSize: "1.1rem" }}>
                      {h.title}
                    </h4>
                    <p className="category-card-desc mb-0 small">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* River-Life Articles Section */}
        <section className="my-5">
          <div className="section-header text-start mb-4">
            <span className="section-tag text-start">Câu chuyện sông nước</span>
            <h2 className="section-title text-start mb-0">Bài Viết Chủ Đề Sông Nước</h2>
            <p className="text-muted mt-2">
              Nhấp vào từng bài viết để xem nội dung chi tiết, hình ảnh minh họa và để lại cảm nhận của bạn.
            </p>
          </div>

          {loading ? (
            <Loading message="Đang tải các bài viết về đời sống sông nước..." />
          ) : (
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {riverArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RiverLife;
