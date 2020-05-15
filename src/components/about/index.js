import React from "react";
import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const AboutBGStyle = createGlobalStyle`
    body {
        background-color: ${theme.secondary};
        animation: colorchange 0.5s ease-in;
        animation-fill-mode: forwards;
    }
    @keyframes colorchange {
      from {
        background-color: ${theme.secondary};
      }
      to {
        background-color: ${theme.primary};
      }
    }
`;

const About = ({ active }) => {
  return <>{active && <AboutBGStyle />}</>;
};

export default About;
