import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const SemiTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  ${({ theme }) => theme.fonts.PretendardSB};
  font-size: 1.25rem; /* 20px */
`;

export const Signup = styled.div`
  ${({ theme }) => theme.fonts.PretendardR};
  font-size: 14px;
  font-weight: 400;

  text-decoration: underline;
  cursor: pointer;

  display: flex;
  width: 85%;
`;

