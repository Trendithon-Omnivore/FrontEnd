import * as S from "./styled";

export const Footer = ({ isSignupEnabled, onSignupClick }) => {

  return (
    <S.Wrapper>
      <S.Container
        $enabled = {isSignupEnabled}
        onClick={onSignupClick}
      >
        가입하기
      </S.Container>

    </S.Wrapper>
  )
}