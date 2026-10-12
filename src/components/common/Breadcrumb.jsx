import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav aria-label="breadcrumb" className="mekong-breadcrumb">
      <ol>
        <li>
          <Link to="/">
            <i className="bi bi-house-door"></i> Trang chủ
          </Link>
          <i className="bi bi-chevron-right" style={{ fontSize: "0.75rem", color: "#a5b8ab" }}></i>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className={isLast ? "active" : ""}>
              {item.link && !isLast ? (
                <>
                  <Link to={item.link}>{item.label}</Link>
                  <i className="bi bi-chevron-right" style={{ fontSize: "0.75rem", color: "#a5b8ab" }}></i>
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
