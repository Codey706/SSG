import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container py-5 text-center my-5">
      <div className="bg-white p-5 rounded-4 shadow-sm border mx-auto" style={{ maxWidth: "600px" }}>
        <div style={{ fontSize: "5rem", color: "var(--color-primary)", fontWeight: 800 }}>
          404
        </div>
        <i className="bi bi-compass text-warning display-4 mb-3 d-block"></i>
        <h2 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
          Lạc lối giữa dòng sông rồi bạn ơi!
        </h2>
        <p className="text-muted mb-4">
          Trang bạn đang tìm kiếm dường như không tồn tại hoặc đã được chuyển sang địa chỉ khác. Hãy quay về bến đỗ an toàn nhé.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn-primary-mekong">
            <i className="bi bi-house-door-fill"></i> Về trang chủ
          </Link>
          <Link to="/stories" className="btn-outline-mekong">
            <i className="bi bi-book-half"></i> Khám phá bài viết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
