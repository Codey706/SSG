import React from "react";

const ArticleFilter = ({
  categories = [],
  selectedCategory = "all",
  onSelectCategory,
  searchTerm = "",
  onSearchChange,
  placeholder = "Tìm kiếm bài viết văn hóa..."
}) => {
  return (
    <div className="filter-search-container">
      <div className="row g-3 align-items-center">
        {/* Category Pills */}
        <div className="col-lg-8 col-12">
          <div className="category-filter-pills">
            <button
              type="button"
              className={`filter-pill ${
                selectedCategory === "all" || selectedCategory === null
                  ? "active"
                  : ""
              }`}
              onClick={() => onSelectCategory("all")}
            >
              <i className="bi bi-grid-fill me-1"></i> Tất cả
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill ${
                  String(selectedCategory) === String(cat.id) ? "active" : ""
                }`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.icon && <i className={`bi ${cat.icon} me-1`}></i>}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Search Box */}
        <div className="col-lg-4 col-12">
          <div className="search-input-group">
            <i className="bi bi-search search-icon"></i>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={placeholder}
              aria-label="Tìm kiếm bài viết"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="btn btn-sm btn-link position-absolute end-0 top-50 translate-middle-y text-muted me-2"
                style={{ textDecoration: "none" }}
                aria-label="Xóa từ khóa tìm kiếm"
              >
                <i className="bi bi-x-circle-fill"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleFilter;
