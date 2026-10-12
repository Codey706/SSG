import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  if (!article) return null;

  return (
    <div className="col">
      <article className="article-card card-hover-effect">
        {/* Thumbnail Image */}
        <div className="article-card-thumb-wrap img-zoom-container">
          <Link to={`/stories/${article.id}`}>
            <img
              src={article.image}
              alt={article.title}
              className="article-card-thumb"
              loading="lazy"
            />
          </Link>
          <span className="article-card-badge">
            <i className="bi bi-tag-fill me-1"></i>
            {article.categoryName}
          </span>
        </div>

        {/* Card Body */}
        <div className="article-card-body">
          <div className="article-card-meta">
            <span>
              <i className="bi bi-calendar3"></i> {article.publishedAt}
            </span>
            <span>
              <i className="bi bi-clock"></i> {article.readTime || "5 phút"}
            </span>
          </div>

          <h3 className="article-card-title">
            <Link to={`/stories/${article.id}`}>{article.title}</Link>
          </h3>

          <p className="article-card-desc">{article.description}</p>

          <div className="article-card-footer">
            <span className="text-muted" style={{ fontSize: "0.82rem" }}>
              <i className="bi bi-person me-1"></i>
              {article.author}
            </span>
            <Link to={`/stories/${article.id}`} className="article-read-more">
              Xem thêm <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
