import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Button from "../button";
import theme from "../../theme";

const IntroContainer = styled.div`
  background-color: ${theme.secondary};
  height: 100%;
  width: 100%;
`;

const H1 = styled.h1`
  color: ${theme.white};
  font-size: 3rem;
`;

const Hello = styled.div`
  font-size: 3.5rem;
`;

const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Intro = ({ active }) => {
  return (
    <>
      {active && <Helmet title="Istha Subasinghe" />}
      <IntroContainer>
        <Container>
          <div style={{ width: "50%" }}>
            <H1>
              <Hello>Hello,</Hello>
              <br />
              I am Isitha,
              <br />a polyglot software engineer
            </H1>
            <a href="#contact">
              <Button>CONTACT ME</Button>
            </a>
          </div>
          <div style={{ width: "50%" }}></div>
        </Container>
      </IntroContainer>
    </>
  );
};

export default Intro;
