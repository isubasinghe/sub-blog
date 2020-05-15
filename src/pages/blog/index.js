import React from "react";
import { graphql } from "gatsby";

const Blog = ({ data }) => {
  const nodes = data?.allMardownRemark?.nodes;
  return <></>;
};

export default Blog;

export const query = graphql`
  query fetchLatestPosts {
    allMarkdownRemark(
      limit: 10
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          header
          lead
          path
          featuredimage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        html
      }
    }
  }
`;
