import React from "react";
import { graphql } from "gatsby";
import { Layout} from "../components";
import {Link} from "gatsby";
import BackgroundImage from 'gatsby-background-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMapMarkerAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons'

library.add(faUsers, faMapMarkerAlt, faNewspaper)


export default ({
  data: {
    desktop:{childImageSharp: slika}
  }
}) => {
  const imageData = slika.fluid;
  return (
    <Layout >
       <BackgroundImage Tag="section"
            fluid={imageData}
            className="hero"
            backgroundColor={`#040e18`}
          >
           <div className="hero-text">
    <h1>Explore the world <br/> through climbing</h1>
    <p>Start your adventure now</p>
    <Link to="/penjalista">
    <button>Explore</button>
    </Link>
  </div>
          </BackgroundImage>

<div className="wrapper">

          <div className="highlights">
  						<section>
  							<div className="content">
                    <Link to="/signin">
  								<header>
                  <FontAwesomeIcon icon={faUsers} size="6x" />
                  <h2>Become a member</h2>
  								</header>
                          </Link>
  						  <p>Join our family and be able to save all of your achivements and compare your result to others.</p>
  							</div>
  						</section>
  						<section>
  							<div className="content">
                    <Link to="/blog">
  								<header>
                  <FontAwesomeIcon icon={faNewspaper} size="6x" />
                  <h2>Latest news </h2>
  								</header>
                      </Link>
  						<p> Read the latest news in from our climbing community. We cover sport event, indoor climbing and others</p>
  							</div>
  						</section>
  						<section>
  							<div className="content">
                    <Link to="/ublizini">
  								<header>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="6x" />
                  <h2>Close to you</h2>
  								</header>
                      </Link>
  				      <p> Find nearby climbing spots by using our map which has located all of the major climbing spots in the area. </p>
  							</div>
  						</section>
              </div>
</div>

    </Layout>
  );
};

export const query = graphql`
query HeroQuery {
  desktop: file(relativePath: { eq: "hero3.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;
