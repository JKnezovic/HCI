import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id,excerpt } = post.node;
    const { title, date, slug } = post.node.frontmatter;
      const { src } = post.node.frontmatter.srcl.childImageSharp.fluid;
    return (
      <section key={id} className={title}>
        <img src={src} alt={title}/>
        <h2 style={{marginLeft:'10px'}} className={styles.Title}>
          <Link to={`blog/${slug}`}>{title}</Link>
        </h2>
        <span style={{marginLeft:'10px'}} className={styles.Date}>{date}</span>
      	<p style={{marginLeft:'10px'}}>{excerpt}</p>
        <Link to={`blog/${slug}`} style={{marginLeft:'10px'}} className={styles.btn}>Read more</Link>
      </section>
    );
  });

  return postsList;
};
