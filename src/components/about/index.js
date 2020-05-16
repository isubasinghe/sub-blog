import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const AboutContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.primary};
`;

const About = ({ active }) => {
  return <AboutContainer />;
};

export default About;
