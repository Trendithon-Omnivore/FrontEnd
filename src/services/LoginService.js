import { instance } from "./instance";

export const LoginService = async ({ username, password }) => {
  // try {
  //   const response = await instance.post("/login", {
  //     username,
  //     password,
  //   });

  //   return response.data;
  // } catch (error) {
  //   console.error("로그인 실패:", error.response?.data || error.message);
  //   throw error;
  // }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("📌 로그인 성공:", { username, password });
      resolve({ success: true }); // ✅ 무조건 성공 응답 반환
    }, 500); // ✅ 0.5초 딜레이 후 성공 처리
  });
};