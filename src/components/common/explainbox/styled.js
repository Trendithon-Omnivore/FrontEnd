import styled from "styled-components";

export const ExplainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExplainTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 1.25rem; /* 20px */
  padding: 1.625rem; /* 26px */
`;

export const ExplainSubTitle = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 1rem; /* 16px */
  display: flex;
  justify-content: center;
`;