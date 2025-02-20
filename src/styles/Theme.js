const fontGenerator = (
  fontFamily,
  fontSize = "1rem",
  fontWeight = "400",
  lineHeight = "1.5",
  letterSpacing = "normal"
) => ({
  "font-family": fontFamily,
  "font-size": fontSize,
  "font-weight": fontWeight,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
});
export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    red: "#FF3B30",
    graytext: "#818181",
    graytext2: "#8F8F8F",
    lightbluegray: "#EBEDF0",
    grayback: "#D9D9D9",
  },

  fonts: {
    default: fontGenerator("PretendardR", "1rem", "400", "1.5", "normal"), // Regular 스타일

    // Pretendard
    PretendardR: fontGenerator("PretendardR", "1rem", "400", "1.5", "normal"), // Regular 스타일
    PretendardB: fontGenerator("PretendardB", "1rem", "700", "1.5", "normal"), // Bold 스타일
    PretendardEB: fontGenerator("PretendardEB", "1rem", "800", "1.5", "normal"), // ExtraBold 스타일
    PretendardSB: fontGenerator("PretendardSB", "1rem", "600", "1.5", "normal"), // SemiBold 스타일
    PretendardM: fontGenerator("PretendardM", "1rem", "500", "1.5", "normal"), // Medium 스타일
    PretendardL: fontGenerator("PretendardL", "1rem", "300", "1.5", "normal"), // Light 스타일
    PretendardEL: fontGenerator("PretendardEL", "1rem", "200", "1.5", "normal"), // ExtraLight 스타일
    PretendardT: fontGenerator("PretendardT", "1rem", "100", "1.5", "normal"), // Thin 스타일
  },
};
