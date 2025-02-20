import * as S from "./styled";
import Logo from "/images/CARDO.svg";
import useCustomNavigate from "@hooks/useCustomNavigate";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const { goToPage, goBack, goFoward } = useCustomNavigate();
  const location = useLocation();
  const isMagPage = location.pathname === "/main";
  return (
    <S.Wrapper>
      {!isMagPage && <S.ArrowBack onClick={goBack}></S.ArrowBack> }
      <S.LogoImage src={Logo} alt="Cardo" onClick={() => goToPage("/main")}/>
    </S.Wrapper>
  )
}