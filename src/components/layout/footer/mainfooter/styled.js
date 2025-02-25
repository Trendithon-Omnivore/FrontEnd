import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100px;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const ImageWrap = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
`;

export const IconBox = styled.div`
  display: flex;
  width: 32%;
  height: 50px;

  border-radius: 65px;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, $isActive }) => $isActive ? theme.colors.black : theme.colors.lightbluegray};
  cursor: pointer;
`;

export const Icon36 = styled.img`
  width: 36px;
`;