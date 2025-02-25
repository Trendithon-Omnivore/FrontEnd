import { instance } from "./instance";

export const ApplyService = async ({ emoji, title, description, extra, backgroundColor }) => {
  try {
    const response = await instance.post("/cards/create", {
      emoji,
      title,
      content: description,
      // extra,
      cover: backgroundColor,
    });
    return response.data;
  } catch (error) {
    console.error("🚨 경험 카드 등록 실패:", error.response?.data || error.message);
    throw error;
  }

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log("📌 경험 카드 등록 성공:", { emoji, title, description, extra, backgroundColor });
  //     resolve({ success: true }); // ✅ 무조건 성공 응답 반환
  //   }, 500); // ✅ 0.5초 딜레이 후 성공 처리
  // });
};