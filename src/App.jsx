import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import ArticleDetail from "./pages/ArticleDetail";
import CraftVillages from "./pages/CraftVillages";
import VillageDetail from "./pages/VillageDetail";
import RiverLife from "./pages/RiverLife";
import References from "./pages/References";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Trang chủ */}
        <Route index element={<Home />} />

        {/* Câu chuyện văn hóa & Chi tiết bài viết */}
        <Route path="stories" element={<Stories />} />
        <Route path="stories/:id" element={<ArticleDetail />} />

        {/* Làng nghề truyền thống & Chi tiết làng nghề */}
        <Route path="craft-villages" element={<CraftVillages />} />
        <Route path="craft-villages/:id" element={<VillageDetail />} />

        {/* Đời sống sông nước (sử dụng chung ArticleDetail cho bài viết) */}
        <Route path="river-life" element={<RiverLife />} />

        {/* Nguồn tham khảo & Về dự án */}
        <Route path="references" element={<References />} />

        {/* Route 404 Không tìm thấy */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
