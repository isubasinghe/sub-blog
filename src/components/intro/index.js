import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import theme from "../../theme";

const IntroContainer = styled.div`
  background-color: ${theme.secondary};
  height: 100%;
  width: 100%;
`;

const Intro = ({ active }) => {
  return (
    <>
      {active && <Helmet title="Istha Subasinghe" />}
      <IntroContainer />
    </>
  );
};

export default Intro;
