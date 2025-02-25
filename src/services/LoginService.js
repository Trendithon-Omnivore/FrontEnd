import { instance } from "./instance";

export const LoginService = async ({ username, password }) => {
  try {
    const response = await instance.post("/users/login", {
      loginId: username,
      password,
    });

    console.log("✅ 로그인 성공:", response.data);

    if (response.data.accessToken) {
      // 🔥 토큰을 로컬 스토리지 또는 세션 스토리지에 저장
      localStorage.setItem("accessToken", response.data.accessToken);
    }

    return response.data;
  } catch (error) {
    console.error("로그인 실패:", error.response?.data || error.message);
    throw error;
  }
};