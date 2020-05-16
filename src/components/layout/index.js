import React, { useContext } from "react";
import styled from "styled-components";
import ComponentContext from "../../context/component";
import Nav from "../nav";

const Main = styled.main`
  margin-left: 4rem;
`;

const Layout = ({ children }) => {
  const componentContext = useContext(ComponentContext);
  return (
    <>
      <Nav />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
