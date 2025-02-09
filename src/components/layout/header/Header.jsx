import * as S from "./styled";
import Logo from "/images/CARDO.svg";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.ArrowBack></S.ArrowBack>
      <S.LogoImage src={Logo} alt="Cardo" />
    </S.Wrapper>
  )
}