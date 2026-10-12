import articlesData from "../data/articles.json";
import categoriesData from "../data/categories.json";

/**
 * Lấy danh sách tất cả chuyên mục
 */
export const getCategories = async () => {
  return Promise.resolve(categoriesData);
};

/**
 * Lấy danh sách bài viết với hỗ trợ tìm kiếm, lọc theo chuyên mục, cờ sông nước và phân trang
 */
export const getAllArticles = async ({
  categoryId = null,
  search = "",
  isRiverLife = null,
  featured = null,
  page = 1,
  limit = 6
} = {}) => {
  let filtered = [...articlesData];

  // Lọc theo chuyên mục
  if (categoryId !== null && categoryId !== undefined && categoryId !== "" && categoryId !== "all") {
    filtered = filtered.filter(
      (item) => String(item.categoryId) === String(categoryId)
    );
  }

  // Lọc theo cờ sông nước (cho trang Đời sống sông nước)
  if (isRiverLife === true) {
    filtered = filtered.filter((item) => item.isRiverLife === true || item.categoryId === 5);
  }

  // Lọc theo cờ nổi bật
  if (featured === true) {
    filtered = filtered.filter((item) => item.featured === true);
  }

  // Lọc theo từ khóa tìm kiếm (tiêu đề, tóm tắt)
  if (search && search.trim() !== "") {
    const keyword = search.trim().toLowerCase();
    filtered = filtered.filter(
      (item) =>
        item.title.toLowerCase().includes(keyword) ||
        item.description.toLowerCase().includes(keyword)
    );
  }

  const total = filtered.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIndex = (currentPage - 1) * limit;
  const paginatedItems = filtered.slice(startIndex, startIndex + limit);

  return Promise.resolve({
    items: paginatedItems,
    total,
    page: currentPage,
    totalPages,
    limit
  });
};

/**
 * Lấy chi tiết bài viết theo ID
 */
export const getArticleById = async (id) => {
  const article = articlesData.find((item) => String(item.id) === String(id));
  return Promise.resolve(article || null);
};

/**
 * Lấy danh sách bài viết liên quan (cùng chuyên mục, trừ bài hiện tại)
 */
export const getRelatedArticles = async (currentId, categoryId, limit = 3) => {
  const related = articlesData
    .filter(
      (item) =>
        String(item.id) !== String(currentId) &&
        (categoryId ? String(item.categoryId) === String(categoryId) : true)
    )
    .slice(0, limit);

  return Promise.resolve(related);
};

/**
 * Lấy bài viết nổi bật cho Trang chủ
 */
export const getFeaturedArticles = async (limit = 6) => {
  const featured = articlesData.filter((item) => item.featured).slice(0, limit);
  return Promise.resolve(featured);
};

/**
 * Lấy các bài viết thuộc chủ đề Đời sống sông nước
 */
export const getRiverLifeArticles = async () => {
  const riverArticles = articlesData.filter(
    (item) => item.isRiverLife === true || item.categoryId === 5
  );
  return Promise.resolve(riverArticles);
};
