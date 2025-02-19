import * as S from "./styled";
import useCustomNavigate from "@hooks/useCustomNavigate";
import image from "/images/signup/check.svg";

export const SignupModal = () => {
  const { goToPage } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.Images src={image} />
      <S.NoticeBox>
        <S.Notice>CARDO의 회원이 되신걸</S.Notice>
        <S.Notice>환영해요</S.Notice>

      </S.NoticeBox>
      <S.Container
        onClick={() => goToPage("/login")}
      >로그인하기</S.Container>
    </S.Wrapper>
  )
}
