import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PreviewBlogsQuery = ({ render }) => {
  const blogData = useStaticQuery(graphql`
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
  `);

  const posts = (blogData?.allMarkdownRemark?.nodes ?? []).map((node) => {
    const postData = {};
    postData.gatsbyImage =
      node?.frontmatter?.featuredimage?.childImageSharp?.fluid ?? {};
    postData.header = node?.frontmatter?.header ?? "";
    postData.lead = node?.frontmatter?.lead;
    return postData;
  });

  const child = render(posts);
  return <>{child}</>;
};
export default PreviewBlogsQuery;
