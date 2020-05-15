import React from "react";
import styled from "styled-components";
import {
  faHome,
  faLaptopCode,
  faBlog,
  faBriefcase,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../theme";

const StyledNav = styled.nav`
  width: 2rem;
  padding: 1rem;
  height: 100vh;
  position: fixed;
  background-color: ${theme.black};
  top: 0;
  left: 0;
`;

const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
`;

const StyledItem = styled.li`
  width: 100%;
  height: auto;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 100% !important;
  height: auto !important;
  path {
    fill: ${theme.primary};
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledUL>
        <StyledItem>
          <Icon icon={faHome} />
        </StyledItem>
        <StyledItem>
          <Icon icon={faLaptopCode} />
        </StyledItem>
        <StyledItem>
          <Icon icon={faBlog} />
        </StyledItem>
        <StyledItem>
          <Icon icon={faBriefcase} />
        </StyledItem>
        <StyledItem>
          <Icon icon={faAddressCard} />
        </StyledItem>
      </StyledUL>
    </StyledNav>
  );
};
export default Nav;
