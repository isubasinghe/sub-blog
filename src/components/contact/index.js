import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Input from "../input";
import TextArea from "../textarea";
import Button from "../button";
import theme from "../../theme";

const ContactContainer = styled.div`
  background-color: ${theme.secondary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Form = styled.form`
  display: ${(props) => props.dp || "grid"};
  grid-template-rows: 1fr 1fr 2fr 1fr;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 40rem;
`;

const ContactFlex = styled.div`
  width: 50%;
  margin-left: 20px;
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const H5 = styled.h5`
  font-weight: 600;
  color: ${theme.white};
  font-size: 2.2rem;
  margin-bottom: 30px;
`;

const H6 = styled.h6`
  color: ${theme.white};
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ContactForm = ({ hidden = undefined }) => (
  <Form
    dp={hidden ? "none" : "grid"}
    name="contactme"
    method="POST"
    data-netlify="true"
    hidden={hidden}
  >
    <input type="hidden" name="form-name" value="contactme" />
    <Input type="text" name="name" placeholder="Your name" />
    <Input type="email" name="email" placeholder="Your email" />
    <TextArea name="message" placeholder="How may I help you?" />
    <Button type="submit" mw="200px">
      Submit
    </Button>
  </Form>
);

const Contact = ({ active }) => {
  return (
    <>
      {active && <Helmet title="Contact Me" />}
      <ContactContainer>
        <ContactFlex>
          <H5>Feeling like I could match your interests?</H5>
          <H6>Contact me now.</H6>
          <ContactForm />
        </ContactFlex>
      </ContactContainer>
    </>
  );
};

export default Contact;
