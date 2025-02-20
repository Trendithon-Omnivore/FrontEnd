import * as S from "./styled";

export const Footer = ({ content, isSignup, isSignupEnabled, onSignupClick }) => {

  return (
    <S.Wrapper>
      <S.Container
        $isSignup = {isSignup}
        $enabled = {isSignupEnabled}
        onClick={onSignupClick}
      >
        {content}
      </S.Container>

    </S.Wrapper>
  )
}