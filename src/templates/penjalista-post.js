import React from "react";
import { graphql } from "gatsby";
import styles from "./styles.module.css";
import { Layout } from "../components";

export default ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
        <div className={styles.Continjer}>
      <h1 >{post.frontmatter.title}</h1>
      <section
        className={styles.Nost}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      </div>
       </Layout>
  );
};

export const query = graphql`
  query BlogPostQuery3($slug: String!) {
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
