import craftVillagesData from "../data/craftVillages.json";

/**
 * Lấy danh sách làng nghề truyền thống có hỗ trợ lọc theo danh mục và tìm kiếm
 */
export const getAllVillages = async ({ category = "all", search = "" } = {}) => {
  let filtered = [...craftVillagesData];

  if (category && category !== "all" && category !== "Tất cả") {
    filtered = filtered.filter((v) => v.category === category);
  }

  if (search && search.trim() !== "") {
    const kw = search.trim().toLowerCase();
    filtered = filtered.filter(
      (v) =>
        v.name.toLowerCase().includes(kw) ||
        v.location.toLowerCase().includes(kw) ||
        v.description.toLowerCase().includes(kw)
    );
  }

  return Promise.resolve(filtered);
};

/**
 * Lấy thông tin chi tiết một làng nghề theo ID
 */
export const getVillageById = async (id) => {
  const village = craftVillagesData.find((v) => String(v.id) === String(id));
  return Promise.resolve(village || null);
};

/**
 * Lấy danh sách làng nghề nổi bật
 */
export const getFeaturedVillages = async (limit = 4) => {
  return Promise.resolve(craftVillagesData.slice(0, limit));
};
