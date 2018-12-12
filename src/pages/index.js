import React from "react";
import { graphql } from "gatsby";
import { Layout, BlogIndex} from "../components";
import slika from "./images/home.jpg"
import {Link} from "gatsby";

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <Layout>
      <Link to={`/second-page`}>
        <img src={slika} alt="Home" className="Inline"/>
        </Link>
        <div className="BlogPosts">
      <BlogIndex posts={posts} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogIndexQuery2 {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            srcl{
        childImageSharp {
          resolutions(width: 300, height: 200) {
            width
            height
            src
            srcSet
          }
        }
      }
            slug
          }
        }
      }
    }
  }
`;
