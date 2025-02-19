import styled from "styled-components";
import { FiRotateCw } from "react-icons/fi";


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SemiTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 1.25rem; /* 20px */
`;

export const Row = styled.div`
  display: flex;
  width: calc(100% - 58px);
  position: relative;
`;

export const IconBox = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  right: -28px;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.lightbluegray};

  cursor: pointer;
  
  @media (max-width: 360px) {
    width: 40px;
    height: 40px;
  }
`;

export const rotateIcon = styled(FiRotateCw)`
  width: 24px;
  height: 24px;

  @media (max-width: 360px) {
    width: 16px;
    height: 16px;
  }
`;
