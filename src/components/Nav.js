import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MDBSideNavNav, MDBSideNav, MDBSideNavLink, MDBContainer, MDBIcon, MDBView, MDBMask } from "mdbreact";
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Logo from "../assets/logo.svg";

class SideNav extends Component {
  state = {
    sideNavLeft: false,
  }

sidenavToggle = sidenavId => () => {
  const sidenavNr = `sideNav${sidenavId}`
  this.setState({
    [sidenavNr]: !this.state[sidenavNr]
  });
};

render() {
    return (
      <Router>
        <MDBContainer className="mobileNav" style={{ margin: "0px", width: "100%" }}>
          <img alt="logo" src={Logo} className="rounded-circle" style={{ maxWidth: "50px"}} />
          <MDBView hover onClick={this.sidenavToggle("Left")}>
            <MDBIcon className="hamburgerIcon" size="lg" icon="th" />
            <MDBMask overlay="indigo-light" />
          </MDBView>
        </MDBContainer>
  
        <MDBSideNav slim fixed mask="navOverlay" triggerOpening={this.state.sideNavLeft} breakWidth={720}
          className="navBG d-flex flex-column justify-content-lg-between">
          <li>
            <div className="logo-wrapper sn-ad-avatar-wrapper">
              <a href="#!">
                <img alt="" src="../assets/logo.svg" className="rounded-circle" />
              </a>
            </div>
          </li>
          
          <MDBSideNavNav>
              <MDBSideNavLink to="/portfolio" exact className="Ripple-parent">
                <MDBIcon icon="home" className="mr-2" />
                  Home
              </MDBSideNavLink>
            
              <MDBSideNavLink to="/about" >
                <MDBIcon icon="laugh" className="mr-2" />
                  About
              </MDBSideNavLink>

              <MDBSideNavLink to="/skills">
                <MDBIcon icon="tools" className="mr-2" />
                  Skills
              </MDBSideNavLink>

              <MDBSideNavLink to="/mywork">
                <MDBIcon icon="eye" className="mr-2" />
                  My Work
              </MDBSideNavLink>

              <MDBSideNavLink to="/contact">
                <MDBIcon icon="envelope" className="mr-2" />
                  Contact Me
              </MDBSideNavLink>
          </MDBSideNavNav>

          <div className="socialIcons">
            <li>
              <ul className="collapsible collapsible-accordion">
                <a href="https://github.com/CptSpooky" target="blank">
                  <MDBIcon fab icon="github" size="lg" className="mr-2" />          
                </a>
                <a href="https://www.linkedin.com/in/daniellevarela/" target="blank">
                  <MDBIcon fab icon="linkedin" size="lg" className="mr-2" />          
                </a>
              </ul>
            </li>
          </div>
        </MDBSideNav>

        <Route path="/portfolio" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/mywork" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />

      </Router>


    );
  }
}

export default SideNav;