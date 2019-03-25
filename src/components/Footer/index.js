import React from "react";
import styles from "./styles.module.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {Link} from "gatsby";

library.add(faPhone, faMapMarker, faEnvelope)

export default () => (
  <footer className={styles.footerDistributed}>
			<div className={styles.footerLeft}>
				<h3>iClimbd</h3>

				<p className={styles.footerLinks}>
        <Link to="/">Home</Link>
					·
				  <Link to="/blog">Blog</Link>
					·
          <Link to="/">Penjališta</Link>
					·
          <Link to="/">Contact</Link>
					·
          <Link to="/">Sign in</Link>
					·
          <Link to="/">Nearby</Link>
				</p>

				<p className={styles.footerCompanyName}>iClimbd &copy; 2019</p>
			</div>

			<div className={styles.footerCenter}>

				<div>
				<FontAwesomeIcon icon={faMapMarker} size="3x"/>
					<p><span>Ivankova 54</span> Stobreč, Hrvatska</p>
				</div>

				<div>
				<FontAwesomeIcon icon={faPhone}  size="3x" />
					<p>+385 95 123456</p>
				</div>

				<div>
        <FontAwesomeIcon icon={faEnvelope}  size="3x" />
					<p>support@iClimbd.com</p>
				</div>

			</div>

			<div className={styles.footerRight}>

				<p className={styles.footerCompanyAbout}>
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className={styles.footerIcons}>

        <FontAwesomeIcon icon={faFacebook}  size="3x"/>
        <FontAwesomeIcon icon={faTwitter}  size="3x"/>
				<FontAwesomeIcon icon={faLinkedin}  size="3x"/>
        <FontAwesomeIcon icon={faGithub}  size="3x"/>

				</div>

			</div>

  </footer>
);
