import React, { useLayoutEffect } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import styled from "styled-components";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.js";
import SimpleLayout from "../components/layout/simple-layout";
import theme from "../theme";

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 1rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  color: ${theme.white};
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  color: ${theme.white};
`;

const P = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.white};
`;

const MetaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Post = ({ data }) => {
  useLayoutEffect(() => {
    Prism.highlightAll();
  });
  const header = data?.markdownRemark?.frontmatter?.header ?? "";
  const lead = data?.markdownRemark?.frontmatter?.lead ?? "";
  const date = data?.markdownRemark?.frontmatter?.date ?? "";
  const timeToRead = data?.markdownRemark.timeToRead ?? "";
  const gatsbyImg =
    data?.markdownRemark?.frontmatter?.featuredimage.childImageSharp.fluid ??
    "";
  const html = data?.markdownRemark?.html ?? "";
  return (
    <SimpleLayout>
      <Helmet title={header}></Helmet>
      <Container>
        <H1>{header}</H1>
        <MetaContainer>
          {date && <P>{date}</P>}
          {timeToRead && <P>{timeToRead} minute(s)</P>}
        </MetaContainer>
        <Img fluid={gatsbyImg} />
        <H2>{lead}</H2>
        <hr className="markdown__render--hr" />
        <div
          className="markdown__render"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </SimpleLayout>
  );
};

export default Post;

export const query = graphql`
  query fetchAllPostsMeta($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      html
      frontmatter {
        header
        date(formatString: "DD MMM YYYY")
        lead
        path
        featuredimage {
          childImageSharp {
            fluid(maxHeight: 600, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
