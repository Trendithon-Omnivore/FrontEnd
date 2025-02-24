import { instance } from "./instance";

export const AuthService = async ({ username, password, nickname }) => {
  try {
    const requestData = {
      loginId: username,
      password,
      nickname,
    };

    console.log("🔄 회원가입 요청 데이터:", requestData); // 디버깅 로그 추가

    const response = await instance.post("/users/register", requestData, {
      headers: {
        "Content-Type": "application/json", // JSON 데이터 형식 명확히 지정
      },
    });

    console.log("✅ 회원가입 성공:", response.data);
    return response.data;
  } catch (error) {
    console.error("🚨 회원가입 실패:", error.response?.data || error.message);
    throw error;
  }
};