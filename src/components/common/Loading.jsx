import React from "react";

const Loading = ({ message = "Đang tải dữ liệu văn hóa..." }) => {
  return (
    <div className="text-center py-5">
      <div
        className="spinner-border"
        style={{ color: "var(--color-primary)", width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Đang tải...</span>
      </div>
      <p className="mt-3 text-muted" style={{ fontWeight: 500 }}>
        {message}
      </p>
    </div>
  );
};

export default Loading;
