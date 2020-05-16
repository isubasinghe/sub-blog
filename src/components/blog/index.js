import React from "react";
import styled from "styled-components";
import theme from "../../theme";

const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.primary};
`;
const Blog = () => {
  return <BlogContainer />;
};
export default Blog;
