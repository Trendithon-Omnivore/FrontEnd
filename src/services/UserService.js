import { instance } from "@services/instance";

export const UserService = {
  generateNickname: async () => {
    try {
      const response = await instance.post("/users/generate-nickname");
      return response.data;
    } catch (error) {
      console.error("🚨 닉네임 생성 실패:", error.response?.data || error.message);
      throw error;
    }
  },
  fetchUserState: async () => {
    try {
      const response = await instance.get("/users/state");
      return response.data; // 응답 데이터를 그대로 반환
    } catch (error) {
      console.error("🚨 API 호출 실패:", error.response?.data || error.message);
      throw error;
    }
  },
};