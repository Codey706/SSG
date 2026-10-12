import React from "react";
import { Link } from "react-router-dom";

const VillageCard = ({ village }) => {
  if (!village) return null;

  return (
    <div className="col">
      <div className="article-card card-hover-effect">
        <div className="article-card-thumb-wrap img-zoom-container">
          <Link to={`/craft-villages/${village.id}`}>
            <img
              src={village.image}
              alt={village.name}
              className="article-card-thumb"
              loading="lazy"
            />
          </Link>
          <span className="article-card-badge">
            <i className="bi bi-geo-alt-fill me-1"></i>
            {village.category}
          </span>
        </div>

        <div className="article-card-body">
          <div className="article-card-meta">
            <span className="text-truncate" title={village.location}>
              <i className="bi bi-geo-alt"></i> {village.location.split(",").pop()}
            </span>
            <span>
              <i className="bi bi-hourglass-split"></i> {village.established}
            </span>
          </div>

          <h3 className="article-card-title">
            <Link to={`/craft-villages/${village.id}`}>{village.name}</Link>
          </h3>

          <p className="article-card-desc">{village.description}</p>

          <div className="article-card-footer">
            <span className="badge-gold">
              <i className="bi bi-award-fill"></i> Di sản làng nghề
            </span>
            <Link
              to={`/craft-villages/${village.id}`}
              className="article-read-more"
            >
              Xem chi tiết <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VillageCard;
