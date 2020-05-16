import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const ContactContainer = styled.div`
  background-color: ${theme.primary};
  width: 100%;
  height: 100%;
`;

const Contact = () => {
  return <ContactContainer />;
};

export default Contact;
