import Container from "../Container";
import Nav from "./Nav";
import NavLink from "./NavLink";
import styles from "./styles.module.css";
import logo from "./images/logo0.png"
import {Link} from "gatsby";
import React, { Component }  from "react";


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: this.props.isLoggedon
    }
  }

  render() {
    if (this.props.isLoggedon==="true") {
      
    return (
      <header className={styles.Header}>
  
      <Container className={styles.Container}>
      <Link to="/">
           <img className={styles.img} src={logo} alt="Logo"/>
           </Link>
          <Nav>
       
  
          <NavLink to="/" exact="true">Početna</NavLink>
          <NavLink to="/climbingSpots">Penjališta</NavLink>
          <NavLink to="/nearby">U blizini</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">Kontakt</NavLink>
        </Nav>
        <Nav>
        <NavLink to="/profile">Matko Zlatko</NavLink>
        <NavLink to="/">Sign Out</NavLink>
        </Nav>


      </Container>
    </header>
    )
    }
    else
    return(
      <header className={styles.Header}>
  
      <Container className={styles.Container}>
      <Link to="/">
           <img className={styles.img} src={logo} alt="Logo"/>
           </Link>
          <Nav>
        
  
          <NavLink to="/" exact="true">Home</NavLink>
          <NavLink to="/climbingSpots">Climbing Spots</NavLink>
          <NavLink to="/nearby">Nearby</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/about">Contact</NavLink>
        </Nav>
        <Nav>
        <NavLink to="/newmember">Become a member</NavLink>
          <NavLink to="/signin">Sign in</NavLink>
        </Nav>
      </Container>
    </header>
    )
  }
}

export default Header