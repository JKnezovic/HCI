import React from "react";
import { Link } from "gatsby";
import styles from "./styles.module.css";

export default ({ children, ...rest }) => (
  <Link
    className={styles.NavLink}
    activeClassName={styles.NavLink__active}
    {...rest}
  >
    {children}
  </Link>
);
