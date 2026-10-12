import { useState, useEffect, useCallback } from "react";
import { getAllArticles } from "../services/articleService";

/**
 * Custom hook quản lý danh sách bài viết, bộ lọc và phân trang
 */
export const useArticles = (initialParams = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [params, setParams] = useState({
    categoryId: initialParams.categoryId || "all",
    search: initialParams.search || "",
    isRiverLife: initialParams.isRiverLife || false,
    featured: initialParams.featured || false,
    page: initialParams.page || 1,
    limit: initialParams.limit || 6,
    ...initialParams
  });

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllArticles(params);
      setArticles(data.items);
      setTotal(data.total);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error("Lỗi tải bài viết:", err);
      setError("Không thể tải danh sách bài viết. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const setCategory = (categoryId) => {
    setParams((prev) => ({ ...prev, categoryId, page: 1 }));
  };

  const setSearch = (search) => {
    setParams((prev) => ({ ...prev, search, page: 1 }));
  };

  const setPage = (page) => {
    setParams((prev) => ({ ...prev, page }));
  };

  return {
    articles,
    loading,
    error,
    total,
    totalPages,
    currentPage: params.page,
    categoryId: params.categoryId,
    search: params.search,
    setCategory,
    setSearch,
    setPage,
    refetch: fetchArticles
  };
};
