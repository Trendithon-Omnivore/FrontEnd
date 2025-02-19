import styled from "styled-components";

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