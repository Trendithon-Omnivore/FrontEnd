import styled from "styled-components";

import { IoIosArrowBack } from "react-icons/io";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToFiltering = styled.div`
  ${({ theme }) => theme.fonts.PretendardR}
  display: flex;
  gap: 0.25rem; /* 4px */
  margin: 0.5rem 0 1rem 0; /* 8px */
  font-size: 0.875rem; /* 14px */
  color: ${({ theme }) => theme.colors.graytext2};
  text-decoration-line: underline;

  cursor: pointer;
`;

export const tofilter = styled.img`
  width: 9px;
`;

export const Icon20 = styled.img`
  width: 20px;
`;

export const Icon24 = styled.img`
  width: 24px;
`;

export const ApplyHint = styled.div`
  ${({ theme }) => theme.fonts.PretendardR}
  width: calc(100% - 60px);
  display: flex;
  justify-content: flex-end;
  font-size: 0.875rem; /* 14px */
  margin: 1rem 0 1rem 0;

  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;
  width: calc(100% - 60px);
  margin: 1.75rem 0 1.5rem 0;
  height: 1px;
  background: ${({ theme }) => theme.colors.black};
`;

export const Margin = styled.div`
  height: 1.5rem;
`;

export const AddButton = styled.button`
  width: calc(100% - 60px);
  height: 3.25rem; /* 52px */
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  cursor: pointer;

  
  margin-bottom: 5rem;
`;

export const RemoveButton = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: red;
  color: white;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 10px;
`;

export const ArrowBack = styled(IoIosArrowBack)`
  position: absolute;
  height: 24px;
  width: 24px;
  left: 10px;
  top: 23px;
  
  z-index: 100;

  cursor: pointer;
`;

export const ColorList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  margin: 1rem 0 1rem 0;
`;

export const ColorOption = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${({ color }) => color};
  cursor: pointer;
  border: ${({ $isSelected }) => ($isSelected ? "1px solid black" : "none")};

  &:hover {
    opacity: 1.1;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0; 
  display: flex;
  position: relative;
`;

export const Image80 = styled.img`
  width: 254px;
`;

export const Image = styled.img`
  width: 254px;
  position: absolute;
  z-index: -1;
`;

export const IconBox = styled.div`
  position: absolute;
  width: 95px;
  height: 95px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;

  outline: 1px solid ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ $isSelected }) => $isSelected};
`;

export const SelectEmoji = styled.div`
  font-size: 56px; 
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 480px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
`;

export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
  transform: ${({ $isFlipped }) => ($isFlipped ? "rotateY(-180deg)" : "rotateY(0)")};
`;

export const CardFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  &.front {
    color: ${({ theme }) => theme.colors.white};
  }

  &.back {
    color: ${({ theme }) => theme.colors.black};
    transform: rotateY(180deg);
  }
`;

export const BackTitle = styled.h3`
  ${({ theme }) => theme.fonts.PretendardSB};

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-16px);
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  background: ${({ $background }) => $background};
`;

export const BackDescription = styled.p`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;

  display: flex;

  align-items: center;

  width: 216px;
  height: 262px;

  padding: 11px 5px;

  background: rgba(255, 255, 255, 0.60);
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 11px;

`;