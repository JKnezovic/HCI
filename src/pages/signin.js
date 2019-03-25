import { Layout } from "../components";
import { Link } from "gatsby";
import BackgroundImage from 'gatsby-background-image'
import { graphql } from "gatsby";
import React, { Component }  from "react";

class signin extends Component {

  render() {
    const imageData = this.props.data.desktop.childImageSharp.fluid;
    return (
      <Layout >
      <BackgroundImage Tag="section"
           fluid={imageData}
           className="hero"
           backgroundColor={`#040e18`}
           style={{height:'100%', display:'flex', flexDirection:'column',alignItems:'center', paddingBottom:'100px'}}
         >
  <form action="#login" className="Form" style={{marginBottom:'180px'}}>
 <h1 className="Form-title">Login</h1>
 <div className="Form-fields">
     <input type="email"
            id="email"
            className="ControlInput ControlInput--email"
            placeholder=" "
            required
     />
     <label htmlFor="email"
            className="Control-label Control-label--email"
     >Email</label>
     <div className="Control-requirements Control-requirements--email">
       Must be a valid email
     </div>

       <input type="checkbox"
              id="show-password"
              className="show-password"
       />
   
       <label htmlFor="show-password"
              className="Control-label Control-label--showPassword"
       >
         
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32" height="32" className="svg-toggle-password" title="Toggle Password Security">
           <title>Hide/Show Password</title>
           <path d="M24,9A23.654,23.654,0,0,0,2,24a23.633,23.633,0,0,0,44,0A23.643,23.643,0,0,0,24,9Zm0,25A10,10,0,1,1,34,24,10,10,0,0,1,24,34Zm0-16a6,6,0,1,0,6,6A6,6,0,0,0,24,18Z"/>
             <rect x="20.133" y="2.117" height="44" transform="translate(23.536 -8.587) rotate(45)" className="closed-eye"/>
             <rect x="22" y="3.984" width="4" height="44" transform="translate(25.403 -9.36) rotate(45)" style={{fill:'#fff'}} className="closed-eye"/>
         </svg>
       </label>
   
       <input type="text"
              id="password"
              placeholder=" "
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              required
              pattern=".{6,}"
              className="ControlInput ControlInput--password"
       />

       <label htmlFor="password"
              className="Control-label Control-label--password"
       >Password</label>
   
       <div className="Control-requirements">
         Must contain at least 6 characters. We did this for your own sake.
       </div>
     
       <Link to="/profile" >
      <button type="submit" className="Button Form-submit">
     
         Login        
         <svg width='26px' height='26px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="Button-spinner">
             <rect x="0" y="0" width="100" height="100" fill="none" className="bk"></rect>
             <circle cx="50" cy="50" r="40" stroke="#fff" fill="none" strokeWidth="18" strokeLinecap="round"></circle>
             <circle cx="50" cy="50" r="40" stroke="#e7542b" fill="none" strokeWidth="9" strokeLinecap="round" className="spinner"></circle>
         </svg>

       </button>
       </Link>
   
       <p style={{alignSelf:'center',paddingTop:'8px'}}>Don't have an account? <Link to="/newmember">Sign up now!</Link></p>
 </div>


</form>
</BackgroundImage>
 </Layout>
    )
  }
}

export default signin

export const query = graphql`
query LoginQuery2 {
  desktop: file(relativePath: { eq: "login3.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 4160) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;
