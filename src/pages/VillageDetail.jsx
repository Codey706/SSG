import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import Loading from "../components/common/Loading";
import { getVillageById } from "../services/villageService";

const VillageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [village, setVillage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVillage = async () => {
      setLoading(true);
      try {
        const data = await getVillageById(id);
        setVillage(data);
      } catch (err) {
        console.error("Lỗi khi tải thông tin làng nghề:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVillage();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5">
        <Loading message="Đang tải thông tin làng nghề..." />
      </div>
    );
  }

  if (!village) {
    return (
      <div className="container py-5 text-center">
        <div className="bg-white p-5 rounded-4 shadow-sm border my-5">
          <i className="bi bi-shop text-danger display-1 mb-3"></i>
          <h2 className="fw-bold mb-3">Không tìm thấy làng nghề!</h2>
          <p className="text-muted mb-4">
            Thông tin làng nghề bạn tìm kiếm hiện không có trong hệ thống.
          </p>
          <Link to="/craft-villages" className="btn-primary-mekong">
            <i className="bi bi-arrow-left"></i> Quay lại danh sách làng nghề
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="village-detail-page py-4">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Làng nghề truyền thống", link: "/craft-villages" },
            { label: village.name }
          ]}
        />

        {/* Back Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-outline-secondary btn-sm rounded-pill px-3 py-1"
          >
            <i className="bi bi-arrow-left me-1"></i> Quay lại
          </button>
        </div>

        {/* Main Content Container */}
        <div className="article-detail-wrap">
          {/* Header */}
          <div className="article-detail-header">
            <div className="d-flex flex-wrap gap-2 mb-2">
              <span className="badge-category">
                <i className="bi bi-geo-alt-fill me-1"></i> {village.category}
              </span>
              <span className="badge-gold">
                <i className="bi bi-clock-history me-1"></i> Niên đại: {village.established}
              </span>
            </div>
            <h1 className="article-detail-title">{village.name}</h1>
            <div className="article-detail-meta-bar">
              <span>
                <i className="bi bi-geo-alt me-1"></i>
                Địa chỉ: <strong>{village.location}</strong>
              </span>
              <span>
                <i className="bi bi-people-fill me-1"></i>
                Quy mô: <strong>{village.artisanCount}</strong>
              </span>
            </div>
          </div>

          {/* Main Image */}
          <div className="article-main-image-wrap">
            <img
              src={village.image}
              alt={village.name}
              className="article-main-image"
            />
          </div>

          {/* Description & Cultural Significance */}
          <div className="mb-4">
            <h3 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
              <i className="bi bi-info-circle me-2"></i> Giới thiệu làng nghề
            </h3>
            <p className="lead fw-normal mb-3" style={{ lineHeight: 1.8 }}>
              {village.content}
            </p>

            {village.significance && (
              <div className="article-quote-box my-4">
                <div className="fw-bold text-success mb-1">
                  <i className="bi bi-award-fill me-1"></i> Giá trị văn hóa & Di sản:
                </div>
                <div>{village.significance}</div>
              </div>
            )}
          </div>

          {/* Traditional Production Process */}
          {village.process && village.process.length > 0 && (
            <div className="my-5">
              <h3 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
                <i className="bi bi-gear-wide-connected me-2"></i> Quy trình sản xuất truyền thống
              </h3>
              <p className="text-muted">
                Từng công đoạn đều đòi hỏi sự kiên nhẫn, khéo léo và kinh nghiệm truyền nối qua nhiều thế hệ:
              </p>

              <div className="process-steps-list">
                {village.process.map((stepItem) => (
                  <div key={stepItem.step} className="process-step-item">
                    <div className="step-number-badge">
                      {stepItem.step}
                    </div>
                    <div className="step-details">
                      <h5>{stepItem.title}</h5>
                      <p>{stepItem.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image Gallery */}
          {village.gallery && village.gallery.length > 0 && (
            <div className="my-4">
              <h4 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
                <i className="bi bi-images me-2"></i> Hình ảnh làng nghề
              </h4>
              <div className="article-gallery-grid">
                {village.gallery.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={`${village.name} - ${idx + 1}`}
                    className="gallery-item-img"
                  />
                ))}
              </div>
            </div>
          )}

          {/* References */}
          {village.references && village.references.length > 0 && (
            <div className="article-references-box mt-4">
              <h4>
                <i className="bi bi-journal-check me-2 text-success"></i>
                Nguồn tham khảo & Quyết định công nhận di sản:
              </h4>
              <ul className="mb-0 ps-3">
                {village.references.map((ref, idx) => (
                  <li key={idx} className="ref-item">
                    <strong>{ref.title}</strong> — {ref.source}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-center mt-5 pt-3 border-top">
            <Link to="/craft-villages" className="btn-primary-mekong">
              <i className="bi bi-grid-fill"></i> Khám phá các làng nghề khác
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageDetail;
