// 날짜 형식 유틸리티

export const formatDate = (dateString) => {
  if (!dateString) return "";
  
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(new Date(dateString));
};