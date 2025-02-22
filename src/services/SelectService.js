import { instance } from "./instance";

export const SelectService = {
  submitExperience: async ({ emoji, title, description, startDate, endDate, extra, backgroundColor }) => {
    // try {
    //   const response = await instance.post("/apply", {
    //     emoji,
    //     title,
    //     description,
    //     startDate,
    //     endDate,
    //     extra,
    //     backgroundColor
    //   });

    //   return response.data;
    // } catch (error) {
    //   console.error("🚨 경험 카드 등록 실패:", error.response?.data || error.message);
    //   throw error;
    // }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "무조건 성공! 🎉",
          data: { emoji, title, description, startDate, endDate, extra, backgroundColor }
        });
      }, 1000); // 1초 딜레이 후 성공 응답
    });

  }
};