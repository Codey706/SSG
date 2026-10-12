import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/common/Breadcrumb";
import ArticleCard from "../components/articles/ArticleCard";
import CommentSection from "../components/articles/CommentSection";
import Loading from "../components/common/Loading";
import { getArticleById, getRelatedArticles } from "../services/articleService";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchArticleDetail = async () => {
      setLoading(true);
      try {
        const data = await getArticleById(id);
        setArticle(data);
        if (data) {
          const related = await getRelatedArticles(data.id, data.categoryId, 3);
          setRelatedArticles(related);
        }
      } catch (err) {
        console.error("Lỗi khi tải chi tiết bài viết:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticleDetail();
  }, [id]);

  // Chia sẻ bài viết (Web Share API hoặc Sao chép liên kết)
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.description,
          url: window.location.href
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (loading) {
    return (
      <div className="container py-5">
        <Loading message="Đang tải chi tiết bài viết..." />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="container py-5 text-center">
        <div className="bg-white p-5 rounded-4 shadow-sm border my-5">
          <i className="bi bi-file-earmark-x text-danger display-1 mb-3"></i>
          <h2 className="fw-bold mb-3">Không tìm thấy bài viết!</h2>
          <p className="text-muted mb-4">
            Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
          </p>
          <Link to="/stories" className="btn-primary-mekong">
            <i className="bi bi-arrow-left"></i> Quay lại danh sách câu chuyện
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="article-detail-page py-4">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: "Câu chuyện văn hóa", link: "/stories" },
            { label: article.title }
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

        {/* Main Article Container */}
        <article className="article-detail-wrap">
          {/* Header Info */}
          <div className="article-detail-header">
            <span className="badge-category mb-2">
              <i className="bi bi-tag-fill me-1"></i>
              {article.categoryName}
            </span>
            <h1 className="article-detail-title">{article.title}</h1>

            <div className="article-detail-meta-bar">
              <span>
                <i className="bi bi-person-circle me-1"></i>
                Tác giả: <strong>{article.author}</strong>
              </span>
              <span>
                <i className="bi bi-calendar3 me-1"></i>
                Ngày đăng: <strong>{article.publishedAt}</strong>
              </span>
              <span>
                <i className="bi bi-clock me-1"></i>
                Thời gian đọc: <strong>{article.readTime}</strong>
              </span>
            </div>
          </div>

          {/* Main Featured Image */}
          <div className="article-main-image-wrap">
            <img
              src={article.image}
              alt={article.title}
              className="article-main-image"
            />
          </div>

          {/* Sapo / Description */}
          <p
            className="lead fw-semibold mb-4"
            style={{ color: "var(--color-primary)", lineHeight: 1.8 }}
          >
            {article.description}
          </p>

          {/* Article Content Blocks */}
          <div className="article-body-content">
            {article.content &&
              article.content.map((block, idx) => {
                if (block.type === "heading") {
                  return <h3 key={idx}>{block.text}</h3>;
                }
                if (block.type === "quote") {
                  return (
                    <blockquote key={idx} className="article-quote-box">
                      "{block.text}"
                    </blockquote>
                  );
                }
                return <p key={idx}>{block.text}</p>;
              })}
          </div>

          {/* Additional Gallery Images */}
          {article.gallery && article.gallery.length > 0 && (
            <div className="my-4">
              <h4 className="fw-bold mb-3" style={{ color: "var(--color-primary)" }}>
                <i className="bi bi-images me-2"></i>
                Hình ảnh tư liệu & Khoảnh khắc
              </h4>
              <div className="article-gallery-grid">
                {article.gallery.map((imgUrl, i) => (
                  <img
                    key={i}
                    src={imgUrl}
                    alt={`${article.title} - Ảnh tư liệu ${i + 1}`}
                    className="gallery-item-img"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Social Share & Action Bar */}
          <div className="article-share-bar">
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold" style={{ color: "var(--color-primary)" }}>
                Chia sẻ câu chuyện:
              </span>
              <div className="share-buttons-group">
                <button
                  type="button"
                  className="share-action-btn"
                  onClick={handleShare}
                  title="Chia sẻ hoặc sao chép liên kết"
                >
                  <i className="bi bi-share-fill"></i>
                </button>
                <button
                  type="button"
                  className="share-action-btn"
                  onClick={copyToClipboard}
                  title="Sao chép liên kết bài viết"
                >
                  <i className="bi bi-link-45deg"></i>
                </button>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-action-btn"
                  title="Chia sẻ lên Facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
              {copied && (
                <span className="badge bg-success ms-2 py-2 px-3">
                  <i className="bi bi-check-lg me-1"></i> Đã sao chép liên kết!
                </span>
              )}
            </div>

            <Link to="/stories" className="btn-outline-mekong py-1 px-3" style={{ fontSize: "0.88rem" }}>
              Xem thêm câu chuyện khác <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* References Box */}
          {article.references && article.references.length > 0 && (
            <div className="article-references-box">
              <h4>
                <i className="bi bi-journal-bookmark-fill me-2 text-success"></i>
                Nguồn tham khảo & Tài liệu trích dẫn:
              </h4>
              <ul className="mb-0 ps-3">
                {article.references.map((ref, idx) => (
                  <li key={idx} className="ref-item">
                    <strong>{ref.title}</strong> — {ref.source}{" "}
                    {ref.url && ref.url !== "#" && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-1"
                      >
                        [Xem tài liệu gốc]
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Local Comment Section */}
          <CommentSection articleId={article.id} />
        </article>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="my-5">
            <div className="section-header text-start mb-4">
              <span className="section-tag text-start">Gợi ý dành cho bạn</span>
              <h3 className="section-title text-start mb-0" style={{ fontSize: "1.8rem" }}>
                Bài Viết Cùng Chuyên Mục
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
