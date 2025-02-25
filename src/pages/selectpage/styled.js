import styled from "styled-components";
import Slider from "react-slick";
import { IoIosArrowBack } from "react-icons/io";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSlider = styled(Slider)`
  width: 80%;
  max-width: 500px;
  margin-bottom: 120px;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1 ease-in-out;
    transform: scale(0.8);
  }

  .slick-center {
    transition: all 0.3 ease-in-out;
    transform: scale(1);
  }

  .slick-prev, .slick-next {
    display: none !important;
  }

  .slick-dots {
    bottom: -10px;
  }
`;

export const PrevArrow = styled.div`
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 5;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const NextArrow = styled.div`
  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 5;

  img {
    width: 35px;
    height: 35px;
  }
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

  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0; 
  display: flex;
  position: relative;
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
  background: ${({ $background }) => $background};
`;

export const SelectEmoji = styled.div`
  font-size: 56px; 
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

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 2rem 0;
  width: 100%;
  min-height: 600px;
  border-radius: 50px 50px 0 0;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ $Color }) => $Color};

  align-items: center;
`;

export const Icon46 = styled.div`
  margin: 2rem 0 1rem 0;
  font-size: 46px;
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 10px;
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

export const R14 = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
`;

export const R16 = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  margin-top: ${({ $isMargin }) => $isMargin ? "2rem" : "0.5rem"};
  margin-bottom: ${({ $isMargin }) => $isMargin ? "2rem" : "0.5rem"};
`;

export const SB16 = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ $color }) => $color};

  margin: 2rem 0 0 0;
`;

export const Icon24 = styled.img`
  width: 24px;
`;

export const AddButton = styled.button`
  width: 85%;
  height: 3.25rem; /* 52px */
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  cursor: pointer;
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

export const ExampleContainer = styled.div`
  display: flex;
  width: 85%;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0 7rem 0;
`;

export const ExampleButton = styled.button`
  background: ${({ theme }) => theme.colors.lightbluegray};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 12px 14px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.grayback};
    color: ${({ theme }) => theme.colors.graytext};
    border: 1px solid ${({ theme }) => theme.colors.graytext};
  }
`;

export const inputWrap = styled.div`
  display: flex;
  width: 100%;
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 8px;
`;

export const StyledInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.lightbluegray};
  color: ${({ theme, $isRight }) => $isRight ? theme.colors.bluetext : theme.colors.graytext};
  cursor: pointer;
`;



export const Dash = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayback};
`;