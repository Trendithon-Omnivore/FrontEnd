import styled from "styled-components";

import modalback from "/images/apply/modalback.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 40px 40px 0 0;
  background: url("/images/apply/modalback.svg") lightgray 50% / cover no-repeat;
`;

export const CloseBack = styled.div`  
  position: fixed;
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  z-index: -1;
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
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const thinkEmoji = styled.img`
  width: 61px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 20px;
  margin-top: 0.75rem;
`;

export const SemiTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 16px;
`;

export const Stairs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0 1rem 0;
`;

export const StairTitleB = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  font-weight: 500;
`;

export const StairTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  font-weight: 400;
`;

export const StairSemiTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  color: ${({ theme }) => theme.colors.graytext};
  font-size: 12px;
  font-weight: 400;
`;

export const Image = styled.img`
  width: 240px;
  margin-top: 0.5rem;
`;