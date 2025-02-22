import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 10px;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  
  display: flex;
  width: 100%;
`;

export const Contents = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  display: flex;

  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  padding: 24px 14px;

  word-wrap: break-word;
  word-break: break-word;
  white-space: pre-wrap;
`;