import React, { useState, useEffect } from "react";

const CommentSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const storageKey = `soulofmekong_comments_${articleId}`;

  // Tải bình luận từ localStorage khi articleId thay đổi
  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        setComments(JSON.parse(stored));
      } else {
        // Dữ liệu bình luận mẫu cho bài viết
        const defaultComments = [
          {
            id: 1,
            author: "Nguyễn Thùy Linh",
            date: "10/10/2026 14:30",
            text: "Bài viết rất xúc động và chân thực! Đọc xong lại nhớ quê ngoại ở miền Tây quá chừng."
          },
          {
            id: 2,
            author: "Lê Minh Trí (Sinh viên ĐH Cần Thơ)",
            date: "11/10/2026 09:15",
            text: "Cảm ơn nhóm SoulOfMekong đã làm dự án này. Những nét văn hóa này rất cần được thế hệ trẻ chúng mình gìn giữ và lan tỏa!"
          }
        ];
        setComments(defaultComments);
        localStorage.setItem(storageKey, JSON.stringify(defaultComments));
      }
    } catch (err) {
      console.error("Lỗi khi đọc bình luận từ localStorage:", err);
    }
  }, [articleId, storageKey]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim()) {
      setError("Vui lòng nhập tên của bạn.");
      return;
    }

    if (!content.trim()) {
      setError("Vui lòng nhập nội dung bình luận.");
      return;
    }

    const newComment = {
      id: Date.now(),
      author: name.trim(),
      date: new Date().toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      text: content.trim()
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (err) {
      console.error("Lỗi lưu bình luận:", err);
    }

    setContent("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="comment-section-box">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h3 className="section-title mb-0" style={{ fontSize: "1.5rem" }}>
          <i className="bi bi-chat-heart text-success me-2"></i>
          Bình luận & Chia sẻ cảm nghĩ ({comments.length})
        </h3>
      </div>

      {/* Form gửi bình luận */}
      <form onSubmit={handleSubmit} className="comment-input-form">
        <h5 className="fw-bold mb-3" style={{ color: "var(--color-primary)", fontSize: "1.1rem" }}>
          Để lại cảm nghĩ của bạn về câu chuyện
        </h5>

        {error && (
          <div className="alert alert-danger py-2 px-3 mb-3 small" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-1"></i> {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success py-2 px-3 mb-3 small" role="alert">
            <i className="bi bi-check-circle-fill me-1"></i> Bình luận của bạn đã được đăng tải thành công!
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="commentName" className="form-label small fw-semibold">
            Tên hiển thị của bạn <span className="text-danger">*</span>
          </label>
          <input
            id="commentName"
            type="text"
            className="form-control"
            placeholder="Ví dụ: Bạn đọc từ An Giang..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ borderRadius: "8px", borderColor: "var(--color-border)" }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="commentContent" className="form-label small fw-semibold">
            Nội dung bình luận <span className="text-danger">*</span>
          </label>
          <textarea
            id="commentContent"
            rows="3"
            className="form-control"
            placeholder="Viết cảm nghĩ, kỷ niệm hoặc chia sẻ của bạn về nét đẹp văn hóa này..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ borderRadius: "8px", borderColor: "var(--color-border)" }}
          ></textarea>
        </div>

        <button type="submit" className="btn-primary-mekong py-2 px-4">
          <i className="bi bi-send-fill"></i> Gửi bình luận
        </button>
      </form>

      {/* Danh sách bình luận */}
      <div className="comment-list">
        {comments.length === 0 ? (
          <p className="text-muted text-center py-3 mb-0">
            Chưa có bình luận nào. Hãy là người đầu tiên chia sẻ cảm nghĩ!
          </p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="comment-avatar">
                {comment.author.charAt(0).toUpperCase()}
              </div>
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-time">
                    <i className="bi bi-clock me-1"></i>
                    {comment.date}
                  </span>
                </div>
                <p className="comment-text">{comment.text}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CommentSection;
