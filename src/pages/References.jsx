import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Loading from "../components/common/Loading";
import { getAllReferences } from "../services/referenceService";
import { siteConfig } from "../config/siteConfig";

const References = () => {
  const [references, setReferences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReferences = async () => {
      setLoading(true);
      try {
        const data = await getAllReferences();
        setReferences(data);
      } catch (err) {
        console.error("Lỗi khi tải tài liệu tham khảo:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReferences();
  }, []);

  return (
    <div className="references-page pb-5">
      {/* Banner */}
      <div
        className="page-banner position-relative text-white py-5 mb-4"
        style={{
          background: "linear-gradient(135deg, #184e3f 0%, #145A43 60%, #0d3b2c 100%)",
          boxShadow: "0 4px 20px rgba(20,90,67,0.15)"
        }}
      >
        <div className="container position-relative py-3">
          <span className="badge-gold mb-2">Tư liệu & Giới thiệu</span>
          <h1 className="fw-bold mb-2 text-white" style={{ fontSize: "2.6rem" }}>
            Tài Liệu Tham Khảo & Dự Án
          </h1>
          <p className="mb-0 text-white-50" style={{ maxWidth: "600px", fontSize: "1.05rem" }}>
            Minh bạch nguồn thông tin khoa học, giới thiệu sứ mệnh bảo tồn và thông tin kết nối cùng đội ngũ SoulOfMekong.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb items={[{ label: "Tham khảo & Về chúng tôi" }]} />

        {/* Section 1: Nguồn tài liệu tham khảo */}
        <section className="bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="bg-light-green p-3 rounded-circle text-success"
              style={{ width: "54px", height: "54px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <i className="bi bi-journal-text fs-3"></i>
            </div>
            <div>
              <span className="section-tag text-start mb-1">Nghiên cứu & Học thuật</span>
              <h2 className="section-title text-start mb-0" style={{ fontSize: "1.8rem" }}>
                Nguồn Tài Liệu Tham Khảo
              </h2>
            </div>
          </div>
          <p className="text-muted mb-4">
            Các bài viết, tư liệu và câu chuyện trên SoulOfMekong được tổng hợp, đối chiếu từ các công trình nghiên cứu văn hóa, hồ sơ di sản quốc gia và tài liệu của các tổ chức uy tín:
          </p>

          {loading ? (
            <Loading message="Đang tải danh mục tài liệu tham khảo..." />
          ) : (
            <div className="row g-3">
              {references.map((ref) => (
                <div key={ref.id} className="col-lg-6">
                  <div
                    className="p-3 rounded-3 h-100 border"
                    style={{ backgroundColor: "#FAF8F1", borderColor: "var(--color-border)" }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="badge-category" style={{ fontSize: "0.75rem" }}>
                        {ref.category}
                      </span>
                      {ref.year && (
                        <span className="text-muted small">
                          <i className="bi bi-calendar3 me-1"></i> {ref.year}
                        </span>
                      )}
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: "var(--color-primary)", fontSize: "1.05rem" }}>
                      {ref.title}
                    </h5>
                    <p className="text-muted small mb-2">
                      <i className="bi bi-person-badge me-1"></i>
                      <strong>Tác giả / Cơ quan:</strong> {ref.author}
                    </p>
                    <p className="small mb-3" style={{ color: "#4a5c50" }}>
                      {ref.description}
                    </p>
                    {ref.url && ref.url !== "#" ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-mekong py-1 px-3 small"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <i className="bi bi-box-arrow-up-right me-1"></i> Truy cập nguồn
                      </a>
                    ) : (
                      <span className="badge bg-light text-muted border">
                        Tài liệu sách in / Lưu trữ nội bộ
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Section 2: Về dự án SoulOfMekong */}
        <section className="bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="bg-light-green p-3 rounded-circle text-success"
              style={{ width: "54px", height: "54px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <i className="bi bi-people-fill fs-3"></i>
            </div>
            <div>
              <span className="section-tag text-start mb-1">Mục tiêu & Tầm nhìn</span>
              <h2 className="section-title text-start mb-0" style={{ fontSize: "1.8rem" }}>
                Về Dự Án SoulOfMekong
              </h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <h4 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
                Sứ mệnh bảo tồn thời đại số
              </h4>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                <strong>SoulOfMekong</strong> là nền tảng số phi lợi nhuận hướng tới việc số hóa, lưu trữ và tôn vinh những giá trị văn hóa độc đáo của 13 tỉnh thành miền Tây Nam Bộ.
              </p>
              <p className="text-muted" style={{ lineHeight: 1.8 }}>
                Trong bối cảnh đô thị hóa nhanh chóng, nhiều làng nghề và nét sinh hoạt truyền thống đang đứng trước nguy cơ mai một. Dự án đóng vai trò như một cầu nối số, đưa hình ảnh những chiếc ghe ngo, tiếng đờn kìm, sắc màu chiếu Định Yên đến gần hơn với các bạn trẻ.
              </p>
            </div>
            <div className="col-lg-6">
              <h4 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
                Đối tượng hướng đến & Phương pháp
              </h4>
              <ul className="list-unstyled d-flex flex-column gap-2 text-muted">
                <li className="d-flex gap-2">
                  <i className="bi bi-mortarboard-fill text-success mt-1"></i>
                  <span><strong>Học sinh, sinh viên:</strong> Cung cấp nguồn tham khảo trực quan, đáng tin cậy phục vụ nghiên cứu và học tập.</span>
                </li>
                <li className="d-flex gap-2">
                  <i className="bi bi-phone-fill text-success mt-1"></i>
                  <span><strong>Người dùng mạng xã hội:</strong> Kể chuyện bằng hình ảnh, infographic và video ngắn sinh động trên TikTok, Facebook.</span>
                </li>
                <li className="d-flex gap-2">
                  <i className="bi bi-compass-fill text-success mt-1"></i>
                  <span><strong>Du khách và người yêu văn hóa:</strong> Cẩm nang tra cứu thông tin điểm đến làng nghề và lễ hội miền Tây.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Liên hệ & Góp ý */}
        <section className="bg-white rounded-4 p-4 p-md-5 border shadow-sm mb-5">
          <div className="d-flex align-items-center gap-3 mb-4">
            <div
              className="bg-light-green p-3 rounded-circle text-success"
              style={{ width: "54px", height: "54px", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <i className="bi bi-telephone-fill fs-3"></i>
            </div>
            <div>
              <span className="section-tag text-start mb-1">Kết nối</span>
              <h2 className="section-title text-start mb-0" style={{ fontSize: "1.8rem" }}>
                Thông Tin Liên Hệ & Đóng Góp
              </h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 h-100 text-center" style={{ backgroundColor: "#FAF8F1" }}>
                <i className="bi bi-geo-alt-fill fs-2 text-success mb-2 d-block"></i>
                <h5 className="fw-bold mb-2">Địa chỉ dự án</h5>
                <p className="text-muted small mb-0">{siteConfig.contact.address}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="p-4 rounded-3 h-100 text-center" style={{ backgroundColor: "#FAF8F1" }}>
                <i className="bi bi-envelope-at-fill fs-2 text-success mb-2 d-block"></i>
                <h5 className="fw-bold mb-2">Hòm thư điện tử</h5>
                <p className="text-muted small mb-0">{siteConfig.contact.email}</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="p-4 rounded-3 h-100 text-center" style={{ backgroundColor: "#FAF8F1" }}>
                <i className="bi bi-clock-fill fs-2 text-success mb-2 d-block"></i>
                <h5 className="fw-bold mb-2">Thời gian hỗ trợ</h5>
                <p className="text-muted small mb-0">{siteConfig.contact.workingHours}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner lan tỏa văn hóa (theo wireframe hình 1) */}
        <div
          className="rounded-4 p-5 text-center text-white position-relative overflow-hidden shadow-lg"
          style={{
            background: "linear-gradient(135deg, #145A43 0%, #2E7D59 100%)",
            border: "2px solid #D9A441"
          }}
        >
          <img
            src="/images/logo.png"
            alt="SoulOfMekong"
            style={{ width: "90px", height: "90px", margin: "0 auto 1.5rem", borderRadius: "50%", background: "#fff", padding: "4px" }}
          />
          <h3 className="fw-bold mb-2" style={{ fontSize: "2rem", color: "#FFEAA7" }}>
            "Cùng nhau lan tỏa văn hóa miền Tây!"
          </h3>
          <p className="mb-0 text-white-50" style={{ maxWidth: "600px", margin: "0 auto" }}>
            Mỗi chia sẻ của bạn là một bước giúp gìn giữ ngọn lửa di sản và nét đẹp hồn quê Nam Bộ cho mai sau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default References;
