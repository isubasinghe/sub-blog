import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PreviewBlogsQuery = ({ render }) => {
  const blogData = useStaticQuery(graphql`
    query fetchLatestPosts {
      allMarkdownRemark(
        limit: 9
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            header
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
    }
  `);

  let posts = (blogData?.allMarkdownRemark?.nodes ?? []).map((node) => {
    const postData = {};
    postData.gatsbyImage =
      node?.frontmatter?.featuredimage?.childImageSharp?.fluid ?? {};
    postData.header = node?.frontmatter?.header ?? "";
    postData.lead = node?.frontmatter?.lead;
    postData.link = node?.frontmatter?.path ?? "";
    return postData;
  });

  const child = render(posts);
  return <>{child}</>;
};
export default PreviewBlogsQuery;
