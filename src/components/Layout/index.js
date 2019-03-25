import React, { Component }  from "react";
import SiteContainer from "../SiteContainer";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
// eslint-disable-next-line
import _ from "../../styles/index.css";
import MenuButton from "../MenuButton";
import SideMenu from "../SideMenu";
import Overlay from "../Overlay";

class Layout extends Component {
  state = {
    showSideMenu: false
  };

  showMenu = () => {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  };
  render() {
    const status = this.state.showSideMenu ? "open" : "closed";

    return (
      <SiteContainer>
      <Header isLoggedon={this.props.isLoggedon} />
      <MenuButton status={status} onClick={this.showMenu} />
      <Overlay status={status} onClick={this.showMenu} />
      <SideMenu status={status} />
      <Main>{this.props.children}</Main>
      <Footer />
    </SiteContainer>
    )
  }
}

export default Layout