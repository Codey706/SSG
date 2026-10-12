import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ArticleGrid from "../components/articles/ArticleGrid";
import ArticleFilter from "../components/articles/ArticleFilter";
import Pagination from "../components/common/Pagination";
import Loading from "../components/common/Loading";
import { useArticles } from "../hooks/useArticles";
import { getCategories } from "../services/articleService";

const Stories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [categories, setCategories] = useState([]);

  // Tải danh sách chuyên mục
  useEffect(() => {
    getCategories().then((cats) => {
      // Chỉ lấy 4 danh mục chính cho Stories theo wireframe:
      // Lễ hội & phong tục, Ẩm thực, Con người, Văn hóa truyền thống
      setCategories(cats.filter((c) => c.id !== 5));
    });
  }, []);

  const {
    articles,
    loading,
    error,
    total,
    totalPages,
    currentPage,
    categoryId,
    search,
    setCategory,
    setSearch,
    setPage
  } = useArticles({
    categoryId: categoryParam || "all",
    limit: 6
  });

  // Đồng bộ category khi URL query thay đổi
  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleCategorySelect = (id) => {
    setCategory(id);
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 380,
      behavior: "smooth"
    });
  };

  return (
    <div className="stories-page pb-5">
      {/* Page Banner */}
      <div
        className="page-banner position-relative text-white py-5 mb-4"
        style={{
          background: "linear-gradient(135deg, #145A43 0%, #1e4d3a 60%, #0d3b2c 100%)",
          boxShadow: "0 4px 20px rgba(20,90,67,0.15)"
        }}
      >
        <div className="container position-relative py-3">
          <span className="badge-gold mb-2">Kho tàng di sản</span>
          <h1 className="fw-bold mb-2 text-white" style={{ fontSize: "2.6rem" }}>
            Câu Chuyện Văn Hóa
          </h1>
          <p className="mb-0 text-white-50" style={{ maxWidth: "600px", fontSize: "1.05rem" }}>
            Khám phá những phong tục tập quán, lễ hội độc đáo và tinh hoa ẩm thực lưu truyền ngàn đời trên vùng đất chín rồng.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: "Câu chuyện văn hóa" }]} />

        {/* Filter and Search Bar */}
        <ArticleFilter
          categories={categories}
          selectedCategory={categoryId}
          onSelectCategory={handleCategorySelect}
          searchTerm={search}
          onSearchChange={setSearch}
          placeholder="Tìm bài viết văn hóa theo tiêu đề hoặc nội dung..."
        />

        {/* Article Counter */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <span className="text-muted small">
            Hiển thị <strong>{articles.length}</strong> trên tổng số <strong>{total}</strong> câu chuyện
          </span>
          {search && (
            <span className="badge bg-light text-dark border">
              Từ khóa: "{search}"
            </span>
          )}
        </div>

        {/* Article Grid / Loading / Error */}
        {loading ? (
          <Loading message="Đang tìm kiếm các câu chuyện văn hóa..." />
        ) : error ? (
          <div className="alert alert-danger text-center p-4 rounded-4" role="alert">
            {error}
          </div>
        ) : (
          <>
            <ArticleGrid
              articles={articles}
              emptyMessage="Không tìm thấy bài viết nào theo bộ lọc hoặc từ khóa hiện tại. Bạn vui lòng chọn chuyên mục khác hoặc xóa từ khóa tìm kiếm nhé!"
            />

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Stories;
