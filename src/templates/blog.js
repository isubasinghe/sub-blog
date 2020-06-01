import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import SimpleLayout from "../components/layout/simple-layout";
import theme from "../theme";

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 1rem;
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Icon = styled(FontAwesomeIcon)`
  height: 2rem;
  width: 1.25rem !important;
  path {
    fill: ${theme.white};
  }
`;

const P = styled.p`
  margin-left: 1rem;
  font-size: 1.25rem;
  color: ${theme.white};
`;

const LinkButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;

const FooterDiv = styled.div`
  min-width: 80px;
  min-height: 30px;
`;

const renderFooter = (prev, next) => {
  return (
    <Footer>
      <FooterDiv>
        {prev && (
          <LinkButton to={prev}>
            <Icon icon={faLongArrowAltLeft} />
            <P>Previous</P>
          </LinkButton>
        )}
      </FooterDiv>
      <FooterDiv>
        {next && (
          <LinkButton to={next}>
            <P>Next</P>
            <Icon icon={faLongArrowAltRight} />
          </LinkButton>
        )}
      </FooterDiv>
    </Footer>
  );
};

const StyledLink = styled(Link)`
  color: ${theme.white};
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Blog = ({ data, pageContext }) => {
  const nextPage = pageContext.nextPagePath;
  const previousPage = pageContext.previousPagePath;
  const nodes = data?.allMarkdownRemark?.nodes ?? [];

  return (
    <>
      <Helmet title={`Blog | Page ${pageContext.humanPageNumber}`} />
      <SimpleLayout footer={renderFooter(previousPage, nextPage)}>
        <Container>
          {nodes.map((node) => {
            const { id, frontmatter = {} } = node;
            const { header, lead, path, date } = frontmatter;
            return (
              <StyledLink to={path} id={id}>
                <hr className="markdown__render--hr" />
                <p>{date}</p>
                <br />
                <h3>{header}</h3>
                <h4>{lead}</h4>
              </StyledLink>
            );
          })}
        </Container>
      </SimpleLayout>
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query fetchPagePosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      skip: $skip
      limit: $limit
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          date(formatString: "DD MMM YYYY")
          header
          lead
          path
        }
      }
    }
  }
`;
