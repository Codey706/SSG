import referencesData from "../data/references.json";
import videosData from "../data/videos.json";

/**
 * Lấy danh sách nguồn tài liệu tham khảo
 */
export const getAllReferences = async () => {
  return Promise.resolve(referencesData);
};

/**
 * Lấy danh sách video tư liệu văn hóa
 */
export const getCulturalVideos = async () => {
  return Promise.resolve(videosData);
};
