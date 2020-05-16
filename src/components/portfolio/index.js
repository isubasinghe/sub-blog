import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const PortfolioContainer = styled.div`
  background-color: ${theme.primary};
  width: 100%;
  height: 100%;
`;
const Portfolio = () => {
  return <PortfolioContainer />;
};

export default Portfolio;
