import styled from "styled-components";

import modalback from "/images/apply/modalback.svg";

export const Wrapper = styled.div`
  display: flex;

`;

export const CloseBack = styled.div`  
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
`;

export const Icon24 = styled.img`
  width: 24px;
  display: flex;
  position: absolute;
  right: 24px;
  top: 24px;

  cursor: pointer;
`;

export const ModalContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 549px;
  border-radius: 40px 40px 0 0;
  background: url("/images/apply/modalback.svg") lightgray 50% / cover no-repeat;
`;

export const thinkEmoji = styled.img`
  width: 61px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB}
  font-size: 20px;
  margin-top: 0.75rem;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardR}
  font-size: 16px;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.fonts.PretendardR}
  display: flex;
  text-align: center;
  font-size: 14px;
  margin: 1.5rem 0 3rem 0;
`;

export const CheckButton = styled.div`

`;