import React from "react";

const Pagination = ({ currentPage = 1, totalPages = 1, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav aria-label="Phân trang bài viết" className="mekong-pagination">
      {/* Nút Trước */}
      <button
        type="button"
        className="page-btn"
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Trang trước"
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      {/* Danh sách các số trang */}
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          className={`page-btn ${p === currentPage ? "active" : ""}`}
          onClick={() => handlePageClick(p)}
          aria-label={`Trang ${p}`}
          aria-current={p === currentPage ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      {/* Nút Kế tiếp */}
      <button
        type="button"
        className="page-btn"
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Trang kế tiếp"
      >
        <i className="bi bi-chevron-right"></i>
      </button>
    </nav>
  );
};

export default Pagination;
