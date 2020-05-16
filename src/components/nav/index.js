import React, { useContext } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComponentContext from "../../context/component";
import { pages } from "../../helpers/pagedata";
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
    fill: ${(props) => props.fill};
  }
`;

const Nav = () => {
  const componentContext = useContext(ComponentContext);

  return (
    <StyledNav>
      <StyledUL>
        {pages.map(({ icon, key, anchor }) => {
          const active = key === componentContext.activeClass;
          const fill = active ? theme.fill : theme.primary;
          return (
            <a href={anchor} key={key}>
              <StyledItem>
                <Icon fill={fill} icon={icon} />
              </StyledItem>
            </a>
          );
        })}
      </StyledUL>
    </StyledNav>
  );
};
export default Nav;
