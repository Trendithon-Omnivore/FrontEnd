export default async function handler(req) {
  const backendURL = `${process.env.VITE_BASE_URL}${req.url.replace("/api/proxy", "/api")}`;

  try {
    const response = await fetch(backendURL, {
      method: req.method,
      headers: {
        ...Object.fromEntries(req.headers), // 모든 원본 헤더 전달
        host: new URL(process.env.VITE_BASE_URL).host, // 백엔드 호스트로 변경
      },
      body: ["GET", "HEAD"].includes(req.method) ? null : await req.text(), // GET, HEAD는 body 제거
    });

    return new Response(response.body, {
      status: response.status,
      headers: {
        ...Object.fromEntries(response.headers), // 응답 헤더 유지
        "Access-Control-Allow-Origin": "*", // CORS 문제 해결
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Proxy request failed", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  runtime: "edge",
};