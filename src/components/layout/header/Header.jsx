import * as S from "./styled";
import Logo from "/images/CARDO.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";

export const Header = () => {
  const { goToPage, goBack, goFoward } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.ArrowBack onClick={goBack}></S.ArrowBack>
      <S.LogoImage src={Logo} alt="Cardo" onClick={() => goToPage("/")}/>
    </S.Wrapper>
  )
}