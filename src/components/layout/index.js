import React from "react";
import styled from "styled-components";
import Nav from "../nav";

const Main = styled.main`
  margin-left: 4rem;
  width: calc(100% - 4rem);
  background-color: "#232323";
`;

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
