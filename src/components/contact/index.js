import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import theme from "../../theme";

const ContactContainer = styled.div`
  background-color: ${theme.primary};
  width: 100%;
  height: 100%;
`;

const Contact = ({ active }) => {
  return (
    <>
      {active && <Helmet title="Contact Me" />}
      <ContactContainer />
    </>
  );
};

export default Contact;
