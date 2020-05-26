import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
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

const ReadMoreContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  padding-left: 2rem;
  text-decoration: none;
  &:hover {
    opacity: 0.65;
  }
`;
const NextIcon = styled(FontAwesomeIcon)`
  height: 2rem;
  width: 1.25rem !important;
  path {
    fill: ${theme.blogText};
  }
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

                    <ReadMoreContainer to="/blog">
                      <H3>Read More</H3>
                      <NextIcon icon={faLongArrowAltRight} />
                    </ReadMoreContainer>
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
