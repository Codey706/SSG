# SoulOfMekong – Bảo Tồn Nét Sống Và Văn Hóa Vùng Tây Nam Bộ

> **SoulOfMekong** là nền tảng số kể chuyện văn hóa đa phương tiện được xây dựng nhằm bảo tồn, lan tỏa và tôn vinh những giá trị văn hóa, làng nghề truyền thống, ẩm thực và đời sống sông nước độc đáo của vùng đồng bằng sông Cửu Long (miền Tây Nam Bộ) đến với thế hệ trẻ học sinh, sinh viên.

---

## 1. Công Nghệ Sử Dụng (Tech Stack)

- **Frontend Core:** ReactJS (React 18), Vite
- **Routing:** React Router DOM (v6)
- **UI Framework & Icons:** Bootstrap 5, Bootstrap Icons
- **Kiến trúc dữ liệu:** Mô hình mô phỏng Client–Server (Service Layer + Mock JSON Database)
- **Styling:** CSS Modular & Design System thuần (Màu sắc bản sắc miền Tây, Responsive Mobile/Tablet/Desktop)
- **Ngôn ngữ:** JavaScript (JSX), Tiếng Việt tự nhiên

---

## 2. Kiến Trúc Mô Phỏng Client – Server

Ứng dụng tuân thủ mô hình phân lớp tách biệt logic hiển thị và tầng truy xuất dữ liệu:

```text
                  NGƯỜI DÙNG (USER)
                         |
                         v
                  REACT FRONTEND
                         |
                         v
              COMPONENTS / TRANG (PAGES)
                         |
                         v
            CUSTOM HOOKS (useArticles,...)
                         |
                         v
          SERVICE LAYER (Tầng Dịch Vụ Mô Phỏng)
          - articleService.js
          - villageService.js
          - referenceService.js
                         |
                         v
            MOCK DATA LAYER (Dữ liệu JSON)
          - articles.json (12 bài viết)
          - categories.json (5 chuyên mục)
          - craftVillages.json (6 làng nghề)
          - references.json & videos.json
```

---

## 3. Cấu Trúc Website & Điều Hướng (Sitemap & Routes)

| Tuyến Đường (Route) | Trang | Chức Năng Chính |
|---|---|---|
| `/` | **Trang chủ (Home)** | Banner lớn, 3 chuyên mục nổi bật, bài viết tiêu biểu, làng nghề đặc trưng, thước phim văn hóa, giới thiệu dự án, kênh TikTok/Facebook |
| `/stories` | **Câu chuyện văn hóa** | Danh sách bài viết văn hóa, bộ lọc 4 chuyên mục (Lễ hội, Ẩm thực, Con người, Văn hóa), tìm kiếm theo từ khóa, phân trang (6 bài/trang) |
| `/stories/:id` | **Chi tiết bài viết** | Đọc toàn bộ nội dung bài viết, ảnh tư liệu, chia sẻ mạng xã hội (Web Share API / Copy Link), trích dẫn nguồn, bài viết liên quan, bình luận cục bộ |
| `/craft-villages` | **Làng nghề truyền thống** | Giới thiệu các làng nghề trăm năm (chiếu Định Yên, gốm Mang Thít, bánh tráng Thuận Hưng, hủ tiếu Sa Đéc,...), bộ lọc danh mục và tìm kiếm |
| `/craft-villages/:id` | **Chi tiết làng nghề** | Quy trình sản xuất truyền thống từng bước, giá trị di sản, hình ảnh và nguồn chứng nhận di sản |
| `/river-life` | **Đời sống sông nước** | Văn hóa chợ nổi, ghe xuồng, sinh hoạt sông nước; xem chi tiết bài viết qua Route dùng chung `/stories/:id` |
| `/references` | **Tham khảo & Về chúng tôi** | Bảng tra cứu nguồn tài liệu nghiên cứu, sứ mệnh dự án SoulOfMekong, thông tin liên hệ và biểu ngữ lan tỏa văn hóa |
| `*` | **Không tìm thấy (404)** | Trang thông báo thân thiện và điều hướng quay lại trang chủ |

---

## 4. Hướng Dẫn Cài Đặt & Chạy Ứng Dụng (Getting Started)

### Bước 1: Cài đặt các gói phụ thuộc (Dependencies)
```bash
npm install
```

### Bước 2: Chạy ứng dụng ở môi trường phát triển (Development)
```bash
npm run dev
```
Mở trình duyệt tại: `http://localhost:3000` (hoặc cổng được Vite hiển thị trên terminal).

### Bước 3: Đóng gói bản phát hành (Production Build)
```bash
npm run build
```

Kiểm tra bản build thử nghiệm:
```bash
npm run preview
```

---

## 5. Bảng Màu Bản Sắc Miền Tây (Color Palette)

- **Xanh lục đậm phù sa (`#145A43`):** Đại diện cho màu xanh của vườn cây ăn trái, rặng tràm và sông nước Cửu Long.
- **Xanh lá tươi (`#2E7D59`):** Sắc xanh hy vọng, sự tốt tươi của mùa màng.
- **Xanh nhạt mướt mát (`#E8F3EA`):** Màu nền phụ trợ, tạo cảm giác dịu mát.
- **Nền màu kem ấm (`#FAF8F1`):** Tôn lên nét cổ xưa, bình dị như hạt gạo phù sa.
- **Vàng rơm ánh kim (`#D9A441`):** Màu của bông điên điển, nắng mai miền sông nước và huy hiệu di sản.
- **Chữ đậm (`#26352B`):** Dễ đọc, êm mắt, tương phản cao.

---

## 6. Tính Năng Nổi Bật

1. **Không phụ thuộc Backend:** Chạy 100% độc lập, không cần cài đặt SQL hay cấu hình API key.
2. **Bình luận cục bộ (Local Comments):** Lưu trữ qua `localStorage` theo từng bài viết, hỗ trợ xác thực biểu mẫu và thời gian thực.
3. **Chia sẻ văn hóa mượt mà:** Hỗ trợ Web Share API trên thiết bị di động và cơ chế sao chép liên kết thông minh với thông báo trực quan.
4. **Responsive chuẩn đa thiết bị:** Hiển thị tối ưu từ điện thoại thông minh (< 768px), máy tính bảng (768px – 1199px) đến màn hình máy tính để bàn (≥ 1200px).
5. **Đồ họa SVG địa phương:** Toàn bộ ảnh minh họa và hình nền được lưu trữ cục bộ tại `public/images/`, không lo hỏng liên kết ngoài.
