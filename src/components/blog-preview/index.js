import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { Link } from "gatsby";
import theme from "../../theme";

const H3 = styled.h3`
  color: ${theme.white};
  margin: 0px;
  text-align: center;
`;

const H4 = styled.h4`
  color: ${theme.white};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ImgContainer = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 5px;
  text-decoration: none;
  &:hover {
    opacity: 0.75;
  }
`;

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const BlogPreview = ({ previewImage, header, lead, link }) => {
  return (
    <StyledLink to={link}>
      <Container>
        <ImgContainer fluid={previewImage} />
        <TextContainer>
          <H3>{header}</H3>
          <H4>{lead}</H4>
        </TextContainer>
      </Container>
    </StyledLink>
  );
};

export default BlogPreview;
