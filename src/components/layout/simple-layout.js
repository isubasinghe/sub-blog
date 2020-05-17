import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import theme from "../../theme";

const Nav = styled.nav`
  background-color: ${theme.secondary};
  width: 100%;
  height: 4rem;
  box-shadow: 0px 5px 5px 0px rgba(50, 50, 50, 0.75);
`;

const BackgroundStyle = createGlobalStyle`
  body {
    margin: 0px;
    background-color: ${theme.primary};
  }
`;

const BackContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 100%;
  padding-left: 2rem;
  text-decoration: none;
  &:hover {
    opacity: 0.65;
  }
`;
const BackIcon = styled(FontAwesomeIcon)`
  height: 2rem;
  width: 1.25rem !important;
  path {
    fill: ${theme.fill};
  }
`;

const P = styled.p`
  margin-left: 1rem;
  font-size: 1.25rem;
  color: ${theme.fill};
`;
const SimpleLayout = ({ children }) => {
  return (
    <>
      <BackgroundStyle />
      <Nav>
        <BackContainer to="/#blog">
          <BackIcon icon={faLongArrowAltLeft} />
          <P>Back</P>
        </BackContainer>
      </Nav>
      <main>{children}</main>
    </>
  );
};

export default SimpleLayout;
