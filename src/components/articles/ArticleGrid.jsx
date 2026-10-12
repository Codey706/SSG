import React from "react";
import ArticleCard from "./ArticleCard";

const ArticleGrid = ({ articles = [], emptyMessage = "Không tìm thấy bài viết nào phù hợp." }) => {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center py-5 my-4 bg-white rounded-4 border p-4 shadow-sm">
        <i
          className="bi bi-search text-muted"
          style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}
        ></i>
        <h4 className="text-dark fw-bold mb-2">Chưa có bài viết phù hợp</h4>
        <p className="text-muted mb-0">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleGrid;
