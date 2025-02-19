import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";


export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

export const LogoImage = styled.img`
  width: 110px;
  height: 30px;

  cursor: pointer;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  position: absolute;
  height: 24px;
  width: 24px;
  left: 10px;

  cursor: pointer;
`;