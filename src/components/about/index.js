import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import theme from "../../theme";

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.primary};
`;

const About = ({ active }) => {
  return (
    <>
      {active && <Helmet title="About me" />}
      <AboutContainer />
    </>
  );
};

export default About;
