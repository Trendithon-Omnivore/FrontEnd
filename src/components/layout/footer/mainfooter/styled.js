import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 83px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
`;