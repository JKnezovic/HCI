import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import styles from "./styles.module.css";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;
