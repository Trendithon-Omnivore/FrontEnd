import * as S from "./styled";

export const Footer2 = ({ isLoginEnabled, onLoginClick }) => {
  return (
    <S.Wrapper>
      <S.Container
        $enabled={isLoginEnabled}
        onClick={onLoginClick}
      >
        로그인하기
      </S.Container>
    </S.Wrapper>
  );
};