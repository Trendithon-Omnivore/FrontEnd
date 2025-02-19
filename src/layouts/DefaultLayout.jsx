import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Header } from "@components/layout/header/Header";

export const DefaultLayout = () => {
  const location = useLocation();
  return (
    <>
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
`;
