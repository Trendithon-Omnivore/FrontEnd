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

export const Titlebox = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  color: ${({ theme }) => theme.colors.black};
`;

export const ContentLength = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 0.875rem; /* 14px */
  color: ${({ theme }) => theme.colors.graytext};
`;

export const TitleInput = styled.input`
  ${({ theme }) => theme.fonts.PretendardSB};
  color: ${({ theme }) => theme.colors.black};

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.PretendardSB};
    color: ${({ theme }) => theme.colors.graytext};
  }
`;

export const InputBox = styled.textarea`
  display: flex;
  width: 85%;
  height: ${({ $isTitle }) => ($isTitle == "설명") ? "6rem" : "3.25rem"}; /* 52px */

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  overflow-y: ${({ $isTitle }) => ($isTitle == "설명") ? "auto" : "hidden"};
  text-overflow: ellipsis;
  padding: 1rem; /* 16px */

  white-space: pre-wrap; 
  word-break: break-word;
  resize: none;

  &:focus-visible {
    outline: none;
  }

  &::placeholder {
    ${({ theme }) => theme.fonts.PretendardR};
    font-size: 0.875rem; /* 14px */
    color: ${({ theme }) => theme.colors.graytext};
  }
`;