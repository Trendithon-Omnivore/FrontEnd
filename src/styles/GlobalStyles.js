import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{box-sizing:border-box}
body, button, dd, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, select, table, td, textarea, th, ul {margin:0;padding:0}
body, button, input, select, table, textarea {font-size:12px;line-height:16px;color:#202020;font-family: "PretendardR", sans-serif}
h1, h2, h3, h4, h5, h6 {font-size:inherit;line-height:inherit}
textarea {-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:transparent;border:0;word-break:keep-all;word-wrap:break-word}
button, input {-webkit-border-radius:0;border-radius:0;border:0}
button {background-color:transparent}
fieldset, img {border:0}
img {vertical-align:top}
ol, ul {list-style:none}
address, em {font-style:normal}
a {display:flex;text-decoration:none;}
iframe {overflow:hidden;margin:0;border:0;padding:0;vertical-align:top}
mark {background-color:transparent}
i {font-style:normal}

#root {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	min-height: 100vh;
}

/* Pretendard */

/* Black */
@font-face {
  font-family: "PretendardBK";
  src: url("/fonts/Pretendard/woff2/Pretendard-Black.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-Black.woff") format("woff");
  font-weight: 900;
  font-style: normal;
}

/* Bold */
@font-face {
  font-family: "PretendardB";
  src: url("/fonts/Pretendard/woff2/Pretendard-Bold.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

/* ExtraBold */
@font-face {
  font-family: "PretendardEB";
  src: url("/fonts/Pretendard/woff2/Pretendard-ExtraBold.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-ExtraBold.woff") format("woff");
  font-weight: 800;
  font-style: normal;
}

/* Regular */
@font-face {
  font-family: "PretendardR";
  src: url("/fonts/Pretendard/woff2/Pretendard-Regular.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

/* SemiBold */
@font-face {
  font-family: "PretendardSB";
  src: url("/fonts/Pretendard/woff2/Pretendard-SemiBold.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-SemiBold.woff") format("woff");
  font-weight: 600;
  font-style: normal;
}

/* Medium */
@font-face {
  font-family: "PretendardM";
  src: url("/fonts/Pretendard/woff2/Pretendard-Medium.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
}

/* Light */
@font-face {
  font-family: "PretendardL";
  src: url("/fonts/Pretendard/woff2/Pretendard-Light.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
}

/* ExtraLight */
@font-face {
  font-family: "PretendardEL";
  src: url("/fonts/Pretendard/woff2/Pretendard-ExtraLight.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-ExtraLight.woff") format("woff");
  font-weight: 200;
  font-style: normal;
}

/* Thin */
@font-face {
  font-family: "PretendardT";
  src: url("/fonts/Pretendard/woff2/Pretendard-Thin.woff2") format("woff2"),
       url("/fonts/Pretendard/woff/Pretendard-Thin.woff") format("woff");
  font-weight: 100;
  font-style: normal;
}


// 초기 html 설정
html {
	/* background-color: ${({ theme }) => theme.colors.fall};	 */
	display: flex;
	justify-content: center;
	align-items: center;

	-webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
    scroll-behavior: smooth; 

	@media (max-width: 360px) {
		font-size:12px;
	}
}

body {
	width: 100%;
	max-width: 540px;
	overflow-x: hidden;
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.default};
	font-family: "PretendardR", sans-serif;
}

`;

export default GlobalStyle;
