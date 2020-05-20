import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import theme from "../../theme";

const PortfolioContainer = styled.div`
  background-color: ${theme.primary};
  width: 100%;
  height: 100%;
`;
const Portfolio = ({ active }) => {
  return (
    <>
      {active && <Helmet title="My Projects" />}
      <PortfolioContainer />
    </>
  );
};

export default Portfolio;
