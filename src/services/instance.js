import axios from "axios";

// Axios 인스턴스 생성
export const instance = axios.create({
  baseURL: "/api",

  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10초 타임아웃 설정
});

// 요청 인터셉터 추가
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // ✅ 저장된 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ✅ 헤더에 토큰 추가
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 추가
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("Request timeout");
    }
    return Promise.reject(error);
  }
);