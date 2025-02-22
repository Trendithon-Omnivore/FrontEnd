import * as S from "./styled";

export const Footer = ({ content, isSignup, isSignupEnabled, onSignupClick, color }) => {

  return (
    <S.Wrapper
      $color={color}
    >
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