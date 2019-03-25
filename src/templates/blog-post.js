import React, { Component } from "react";
import { graphql } from "gatsby";
import { Layout } from "../components";
import styles from "./styles.module.css";
import Modal from 'react-responsive-modal';
import SingleSelect from "../components/SingleSelect"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class blogPost extends Component {
  constructor(props) {
    super(props)
    this.state ={
      open: false,
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 

handleChange(date) {
  this.setState({
    startDate: date
  });
}

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  Submit = () => {
    alert("Route added to your achivements");
    this.onCloseModal();
  };
  
componentDidMount(){
  var classname = document.getElementsByClassName("Isus");

var myFunction = function() {
    alert("Please sign in to add a route");
};
for (var i = 1; i < classname.length; i++) {
    classname[i].addEventListener('click', this.onOpenModal, false);
}
    classname[0].addEventListener('click', myFunction, false);

}
render(){
  const post=this.props.data.markdownRemark;
  return (
    <Layout>
      <Modal  className={styles.modal} open={this.state.open} onClose={this.onCloseModal} little>
      <div className={styles.modal}>
      <div>Where: <p> Marjan</p></div>
      <div>Name: <p> Festina Lente</p></div>
      <div>Grade: <p> 7b+</p></div>
      <div>Length: <p> 18m</p></div>
      <div>Tries:  <SingleSelect /></div>
      <div>When:    <DatePicker
    selected={this.state.startDate}
    onChange={this.handleChange}
/>  </div>
    <button onClick={this.Submit} style={{backgroundColor:'dodgerblue',color:'white',padding:'5px 10px',borderStyle:'none',float:'right'}}>SUBMIT</button>
      </div>
      </Modal>
      <div className={styles.Content}>
      <div style={{width:'90%'}}>
      <h1 style={{alignSelf:'start'}} >{post.frontmatter.title}</h1>
      <section
        className={styles.Post}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      </div>
      </div>
    </Layout>
  );
};
}

export default blogPost

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        slug
        title
      }
    }
  }
`;
