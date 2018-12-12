import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id } = post.node;
    const { title, date, slug } = post.node.frontmatter;
      const { src } = post.node.frontmatter.srcl.childImageSharp.resolutions;
    return (
      <section key={id} className={title}>
        <img src={src} alt={title}/>
        <h2 className={styles.Title}>
          <Link to={`blog/${slug}`}>{title}</Link>
        </h2>
        <span className={styles.Date}>{date}</span>

      </section>
    );
  });

  return postsList;
};
