import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const IntroContainer = styled.div`
  background-color: ${theme.secondary};
  height: 100%;
  width: 100%;
`;

const Intro = ({ active }) => {
  return <IntroContainer />;
};

export default Intro;
