import styled from "styled-components";

export const Button = styled.div`
  ${({ theme }) => theme.fonts.PretendardSB};
  display: flex;
  position: absolute;
  bottom: 20px;
  width: 85%;
  height: 60px;
  border-radius: 65px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;