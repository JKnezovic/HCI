import React from "react";
import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import logo from "./images/logo0.png"

export default () => (
  <header className={styles.Header}>
    <Container className={styles.Container}>

        <Nav>
      <img src={logo} alt="Logo"/>

        <NavLink to="/" exact="true">Početna</NavLink>
        <NavLink to="/second-page">Penjališta</NavLink>
        <NavLink to="/blog">U blizini</NavLink>
        <NavLink to="/about">Kontakt</NavLink>
      </Nav>
      <Nav>
        <NavLink to="/signin">Sign in</NavLink>
      </Nav>
    </Container>
  </header>
);
