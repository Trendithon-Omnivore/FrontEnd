import * as S from "./styled";
import { useLocation } from "react-router-dom";
import useCustomNavigate from "@hooks/useCustomNavigate";

import house from "/images/main/house.svg";
import history from "/images/main/history.svg";
import my from "/images/main/my.svg";
import houseactive from "/images/main/houseactive.svg";
import historyactive from "/images/main/historyactive.svg";
import myactive from "/images/main/myactive.svg";

export const MainFooter = () => {
  const location = useLocation();
  const { goToPage } = useCustomNavigate();
  return (
    <S.Wrapper>
      <S.ImageWrap>
        <S.IconBox onClick={() => goToPage("/history")} $isActive={location.pathname === "/history"}>
          <S.Icon36 src={location.pathname === "/history" ? historyactive : history} />
        </S.IconBox>

        <S.IconBox onClick={() => goToPage("/main")} $isActive={location.pathname === "/main"}>
          <S.Icon36 src={location.pathname === "/main" ? houseactive : house} />
        </S.IconBox>

        <S.IconBox onClick={() => goToPage("/mypage")} $isActive={location.pathname === "/mypage"}>
          <S.Icon36 src={location.pathname === "/mypage" ? myactive : my} />
        </S.IconBox>
      </S.ImageWrap>
    </S.Wrapper>
  )
}