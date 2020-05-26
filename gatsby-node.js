const paginate = require("gatsby-awesome-pagination").paginate;
const path = require("path");
const slug = require("slugify");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    query fetchAllPostsMeta {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          frontmatter {
            header
            path
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const component = path.resolve("src/templates/post.js");
    result.data.allMarkdownRemark.nodes.forEach((node) => {
      createPage({
        path: node.frontmatter.path || slug(node.frontmatter.header),
        component,
        context: {
          id: node.id,
        },
      });
    });
    const posts = result.data.allMarkdownRemark.nodes || [];
    paginate({
      createPage,
      items: posts,
      itemsPerPage: 10,
      pathPrefix: "/blog",
      component: path.resolve("./src/templates/blog.js"),
    });
  });
};
