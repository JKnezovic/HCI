import React from "react";
import { Layout, PenjalisteIndex } from "../components";
import { graphql } from "gatsby";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

export default ({
  data: {
    allMarkdownRemark: { edges: posts } // Rename edges to posts
  }
}) => {
  return (
    <Layout>
      <div className="Topper" >
          <h1 id="PenjalisteNaslov">Climbing spots</h1>
          <form className="search-container">
              <input type="text" id="myInput" onKeyUp={() =>myFunction()} placeholder="What are you looking for?"/>
              <FontAwesomeIcon icon={faSearch} size="2x" />
          </form>
      </div>
      <div id="Penjalista">
      <PenjalisteIndex posts={posts} />
      </div>

    </Layout>
  );
};

function myFunction() {
  var input, filter, penjalista, section,paragraph, i, txtValue;
  input = document.getElementById("myInput");
  console.log(input);
  filter = input.value.toUpperCase();
  penjalista = document.getElementById("Penjalista");
  console.log(penjalista);
  section = penjalista.getElementsByTagName("section");
  console.log(section);
  for (i = 0; i < section.length; i++) {
  paragraph = section[i].getElementsByTagName("p")[0];
  if (paragraph) {
    txtValue = paragraph.textContent || paragraph.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      section[i].style.display = "";
    } else {
      section[i].style.display = "none";
    }
  }
  }
  }

export const query = graphql`
query PenjalistaIndexQuery {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(penjalista)/.*.md$/"}}){
    edges {
      node {
        id
        frontmatter {
          title
          slug
          srcl {
            childImageSharp{
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }

          }

        }
      }
    }
  }
}
`;
