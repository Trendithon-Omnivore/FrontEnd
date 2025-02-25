import { instance } from "./instance";

export const ExperienceService = {
  // 📌 현재 진행 중인 경험 조회 API
  getUserExperience: async () => {
    try {
      const response = await instance.get("/cards/experience");
      return response.data;
    } catch (error) {
      console.error("🚨 현재 진행 중인 경험 조회 실패:", error.response?.data || error.message);
      throw error;
    }
  },

  quitExperience: async () => {
    try {
      const response = await instance.put("/cards/experience/quit");
      return response.data;
    } catch (error) {
      console.error("🚨 경험 종료 실패:", error.response?.data || error.message);
      throw error;
    }
  }
};