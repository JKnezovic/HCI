const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/blog-post.js`);
  const blogTemplate = path.resolve('src/templates/penjalista-post.js');
  return graphql(`
  {
    blogs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/.*.md$/"}}) {
      edges {
        node {
           frontmatter {
            slug
          }
        }
      }
    } 
    
  
  
  docs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(penjalista)/.*.md$/"}}) {
    edges {
      node {
         frontmatter {
            slug
          }
      }
    }
  } 

}
  
  `).then(result => {
    if (result.errors) {
    return Promise.reject(result.errors);
    }

    result.data.blogs.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: "/blog/" + slug,
        component: blogTemplate,
        context: {
          slug
        }
      });
    });

    result.data.docs.edges.forEach(({ node }) => {
      const { slug } = node.frontmatter;
      createPage({
        path: "/penjalista/" + slug,
        component: postTemplate,
        context: {
          slug
        }
			});
		});
  });
};
