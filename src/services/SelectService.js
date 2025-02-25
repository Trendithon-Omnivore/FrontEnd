import { instance } from "./instance";

export const SelectService = {
  getRandomCards: async () => {
    try {
      const response = await instance.get("/cards/random");
      return response.data;
    } catch (error) {
      console.error("🚨 랜덤 카드 조회 실패:", error.response?.data || error.message);
      throw error;
    }
  },

  // 특정 카드 ID로 카드 조회
  getCardById: async (cardId) => {
    try {
      const response = await instance.get(`/cards/${cardId}`);
      return response.data;
    } catch (error) {
      console.error(`🚨 카드 조회 실패 (ID: ${cardId}):`, error.response?.data || error.message);
      throw error;
    }
  },

  submitExperience: async ({ cardId, cover, startDate, endDate }) => {
    try {
      const response = await instance.post("/cards/experience", {
        cardId,
        cover,
        startDate,
        endDate
      });

      return response.data;
    } catch (error) {
      console.error("🚨 경험 등록 실패:", error.response?.data || error.message);
      throw error;
    }
  }

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       success: true,
  //       message: "무조건 성공! 🎉",
  //       data: { emoji, title, description, startDate, endDate, extra, backgroundColor }
  //     });
  //   }, 1000); // 1초 딜레이 후 성공 응답
  // });

};