import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import PreviewBlogsQuery from "../../queries/preview-blogs";
import theme from "../../theme";
import BlogPreview from "../blog-preview";

const BlogContainer = styled.div`
  height: 100%;
  background-color: ${theme.primary};
  padding: 20px;
  display: grid;
  grid-template-rows: auto 50px;
  grid-gap: 20px;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media only screen and (max-width: 768px) {
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;

const H3 = styled.h3`
  color: ${theme.white};
  text-align: right;
  padding-right: 10px;
`;

const Blog = ({ active }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {active && <Helmet title="Blog" />}
      <BlogContainer>
        <PreviewBlogsQuery
          render={(posts) => {
            const mobileItems = posts.slice(0, 4);
            const desktopItems = posts.slice(0, 6);
            const items = isMobile ? mobileItems : desktopItems;
            return (
              <>
                {typeof window !== "undefined" && (
                  <>
                    <PostsContainer>
                      {items.map((post) => {
                        const { gatsbyImage, header, lead, link } = post;
                        return (
                          <BlogPreview
                            key={link}
                            previewImage={gatsbyImage}
                            header={header}
                            lead={lead}
                            link={link}
                          />
                        );
                      })}
                    </PostsContainer>

                    <Link to="/blog">
                      <H3>Read More</H3>
                    </Link>
                  </>
                )}
              </>
            );
          }}
        />
      </BlogContainer>
    </>
  );
};
export default Blog;
