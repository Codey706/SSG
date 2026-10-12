import React, { useState, useEffect } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import VillageCard from "../components/villages/VillageCard";
import Loading from "../components/common/Loading";
import { getAllVillages } from "../services/villageService";

const CraftVillages = () => {
  const [villages, setVillages] = useState([]);
  const [filteredVillages, setFilteredVillages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filters = [
    { id: "all", name: "Tất cả" },
    { id: "Làng nghề thủ công", name: "Làng nghề thủ công" },
    { id: "Sản phẩm tiêu biểu", name: "Sản phẩm tiêu biểu" }
  ];

  useEffect(() => {
    const fetchVillages = async () => {
      setLoading(true);
      try {
        const data = await getAllVillages();
        setVillages(data);
        setFilteredVillages(data);
      } catch (err) {
        console.error("Lỗi khi tải danh sách làng nghề:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVillages();
  }, []);

  useEffect(() => {
    let result = [...villages];
    if (selectedFilter !== "all") {
      result = result.filter((v) => v.category === selectedFilter);
    }
    if (search.trim()) {
      const kw = search.trim().toLowerCase();
      result = result.filter(
        (v) =>
          v.name.toLowerCase().includes(kw) ||
          v.location.toLowerCase().includes(kw) ||
          v.description.toLowerCase().includes(kw)
      );
    }
    setFilteredVillages(result);
  }, [selectedFilter, search, villages]);

  return (
    <div className="craft-villages-page pb-5">
      {/* Page Banner */}
      <div
        className="page-banner position-relative text-white py-5 mb-4"
        style={{
          background: "linear-gradient(135deg, #1b4332 0%, #145A43 60%, #08281d 100%)",
          boxShadow: "0 4px 20px rgba(20,90,67,0.15)"
        }}
      >
        <div className="container position-relative py-3">
          <span className="badge-gold mb-2">Bàn tay tài hoa</span>
          <h1 className="fw-bold mb-2 text-white" style={{ fontSize: "2.6rem" }}>
            Làng Nghề Truyền Thống
          </h1>
          <p className="mb-0 text-white-50" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
            Nơi kết tinh mồ hôi, tâm huyết và sự sáng tạo của tiền nhân qua từng thớ lác, thỏi đất sét, chiếc bánh tráng và sợi hủ tiếu quê hương.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: "Làng nghề truyền thống" }]} />

        {/* Filter and Search Box */}
        <div className="filter-search-container">
          <div className="row g-3 align-items-center">
            <div className="col-lg-8 col-12">
              <div className="category-filter-pills">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={`filter-pill ${
                      selectedFilter === f.id ? "active" : ""
                    }`}
                    onClick={() => setSelectedFilter(f.id)}
                  >
                    <i className="bi bi-hammer me-1"></i> {f.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="search-input-group">
                <i className="bi bi-search search-icon"></i>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm làng nghề theo tên, địa phương..."
                  aria-label="Tìm kiếm làng nghề"
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    className="btn btn-sm btn-link position-absolute end-0 top-50 translate-middle-y text-muted me-2"
                  >
                    <i className="bi bi-x-circle-fill"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Counter */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <span className="text-muted small">
            Hiển thị <strong>{filteredVillages.length}</strong> làng nghề truyền thống
          </span>
        </div>

        {/* Village Cards Grid */}
        {loading ? (
          <Loading message="Đang tải danh sách làng nghề truyền thống..." />
        ) : filteredVillages.length === 0 ? (
          <div className="text-center py-5 my-4 bg-white rounded-4 border p-4 shadow-sm">
            <i
              className="bi bi-search text-muted"
              style={{ fontSize: "3rem", display: "block", marginBottom: "1rem" }}
            ></i>
            <h4 className="text-dark fw-bold mb-2">Không tìm thấy làng nghề</h4>
            <p className="text-muted mb-0">
              Vui lòng chọn danh mục khác hoặc xóa từ khóa tìm kiếm.
            </p>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {filteredVillages.map((village) => (
              <VillageCard key={village.id} village={village} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CraftVillages;
