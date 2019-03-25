import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default ({ posts }) => {
  const postsList = posts.map(post => {
    const { id } = post.node;
    const { title, slug } = post.node.frontmatter;
    return (
      <section key={id} className={title}>
      <Link to={`penjalista/${slug}`}>
        <Img fluid={post.node.frontmatter.srcl.childImageSharp.fluid}/>
        <p className="Naslov">
          {title}
        </p>
        </Link>
      </section>
    );
  });

  return postsList;
};
