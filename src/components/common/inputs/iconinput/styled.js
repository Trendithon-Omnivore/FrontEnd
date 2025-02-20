import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 13px;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  width: calc(100% - 60px);
`;

export const AddIconButton = styled.div`
  display: flex;
  width: ${({ $selectedEmoji }) => ($selectedEmoji ? "75px" : "calc(100% - 60px)")};
  height: ${({ $selectedEmoji }) => ($selectedEmoji ? "75px" : "3.25rem")}; /* 52px */
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme, $selectedEmoji }) => ($selectedEmoji ? theme.colors.white : theme.colors.lightbluegray)};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const IconinputText = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
`;

export const Icon24 = styled.img`
  width: 24px;
  margin-right: 4px;
`;

export const SelectedEmoji = styled.span`
  margin-top: 4px;
  font-size: 60px;
`;

export const HiddenInput = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;
  opacity: 0;
`;