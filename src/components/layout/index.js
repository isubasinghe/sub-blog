import React from "react";
import styled from "styled-components";
import SEO from "../seo";
import Nav from "../nav";

const Main = styled.main`
  margin-left: 4rem;
  width: calc(100% - 4rem);
`;

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Nav />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
