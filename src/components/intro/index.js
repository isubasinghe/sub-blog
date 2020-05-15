import React from "react";
import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const IntroBGStyle = createGlobalStyle`
  body {
    background-color: ${theme.secondary};
  }
`;

const Intro = ({ active }) => {
  console.log(active);
  return (
    <>
      {active && <IntroBGStyle />}
      <div>Hello</div>
    </>
  );
};

export default Intro;
