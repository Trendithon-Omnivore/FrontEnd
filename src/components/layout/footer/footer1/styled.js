import styled from "styled-components";

export const Wrapper = styled.div`
  position: ${({ $isSignup }) => $isSignup ? "fixed" : "fixed"};
  width: 100%;
  height: 100px;
  bottom: 0;

  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 4rem;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 4rem;
  background: ${({ theme, $enabled }) => $enabled ? theme.colors.black : theme.colors.grayback};
  color: ${({ theme, $enabled }) => $enabled ? theme.colors.white : theme.colors.graytext};
  cursor: ${({ $enabled }) => ($enabled ? "pointer" : "not-allowed")};

  ${({ theme }) => theme.fonts.PretendardSB};
`;

