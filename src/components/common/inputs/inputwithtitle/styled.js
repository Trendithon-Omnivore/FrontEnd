import styled from "styled-components";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const ConTitle = styled.div`
  position: absolute;
  left: 40px;
  top: -10px;
  padding: 0px 6px 0px 6px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.PretendardM};
  font-size: 0.875rem; /* 14px */
  color: ${({ theme, $errorMessage }) => $errorMessage ? theme.colors.red : theme.colors.black};

  @media (max-width: 360px) {
    top: -7px;
  }
`;

export const Container = styled.input`
  display: flex;
  width: ${({ $isNick }) => ($isNick === "닉네임" ? "calc(85% - 60px)" : "85%")};
  margin-right: ${({ $isNick }) => ($isNick === "닉네임" ? "60px" : "0")};
  height: 3.25rem; /* 52px */
  border-radius: 10px;
  border: 1px solid ${({ theme, $errorMessage }) => $errorMessage ? theme.colors.red : theme.colors.black};

  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem; /* 16px */

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.PretendardR};
    font-size: 0.875rem; /* 14px */
    color: ${({ theme }) => theme.colors.graytext};
  }

  ${({ $readOnly }) => $readOnly && `
    cursor: not-allowed;
  `}
`;

export const Eye = styled(FiEye)`
  width: 24px;
  height: 24px;

  cursor: pointer;

  @media (max-width: 360px) {
    width: 16px;
    height: 16px;
  }
`;

export const Eyeoff = styled(FiEyeOff)`
  width: 24px;
  height: 24px;

  cursor: pointer;

  @media (max-width: 360px) {
    width: 16px;
    height: 16px;
  }
`;

export const closeIcon = styled(TfiClose)`
  width: 24px;
  height: 24px;
  
  cursor: pointer;

  position: absolute;
  top: 13px;
  right: 40px;

  @media (max-width: 360px) {
    width: 16px;
    height: 16px;

    top: 11px;
    right: 38px;
  }
`;

export const ToggleButton = styled.div`
  position: absolute;
  top: 13px;
  right: 70px;

  @media (max-width: 360px) {
    top: 11px;
    right: 60px;
  }
`;

export const ErrorWrap = styled.div`
  display: flex;
  position: absolute;
  top: 56px;
  gap: 2px;
  justify-content: center;
  align-items: center;
`;

export const ErrorIcon = styled(AiOutlineExclamationCircle)`
  color: ${({ theme }) => theme.colors.red};
`;

export const ErrorMessage = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
`;