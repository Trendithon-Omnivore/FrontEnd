import * as S from "./styled";
import useCustomNavigate from "@hooks/useCustomNavigate";
import image from "/images/signup/check.svg";

export const LoginModal = () => {
  const { goToPage } = useCustomNavigate();

  return (
    <S.Wrapper>
      <S.Images src={image} />
      <S.NoticeBox>
        <S.Notice>로그인 완료!</S.Notice>
      </S.NoticeBox>
      <S.Container onClick={() => goToPage("/main")}>
        시작하기
      </S.Container>
    </S.Wrapper>
  );
};