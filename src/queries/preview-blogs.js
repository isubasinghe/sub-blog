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
                fluid {
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
  posts = posts.concat(posts);
  posts = posts.concat(posts);
  posts = posts.concat(posts);

  const child = render(posts);
  return <>{child}</>;
};
export default PreviewBlogsQuery;
