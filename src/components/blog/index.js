import React from "react";
import styled from "styled-components";
import PreviewBlogsQuery from "../../queries/preview-blogs";
import theme from "../../theme";

const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.primary};
`;

const PostsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Blog = () => {
  return (
    <BlogContainer>
      <PreviewBlogsQuery
        render={(posts) => <PostsContainer></PostsContainer>}
      />
    </BlogContainer>
  );
};
export default Blog;
