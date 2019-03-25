import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogIndex} from "../components";



export default ({
  data: {
    allMarkdownRemark: { edges: posts }, // Rename edges to posts
  }
}) => {
  return (
    <Layout>
      <div style={{display:'flex',
    alignItems: 'center',
    flexDirection: 'column',width:'90%',maxWidth:'1300px'}}>
      <h1 style={{alignSelf:"baseline",marginLeft:'15px'}}>Novosti</h1>
     <div className="BlogPosts">
      <BlogIndex posts={posts} />
  </div>
  </div>
    </Layout>
  );
};

export const query = graphql`
query BlogIndexQuery {
  allMarkdownRemark(  sort: { fields: frontmatter___date, order: DESC },
    filter: {fileAbsolutePath: {regex: "/(posts)/.*.md$/"}}){
    edges {
      node {
        id
        frontmatter {
          title
          date
          slug
          srcl {
            childImageSharp{
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }

          }

        }
        excerpt(pruneLength: 200)
      }
    }
  }
}
`;
