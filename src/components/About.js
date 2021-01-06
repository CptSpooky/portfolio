import React from 'react';
import { MDBAnimation, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import SVG from "../assets/about.svg";

export default function About() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap overflowAbout">
      <div className="introText" style={{ textAlign: "center", marginLeft: "0px" }}>
        <MDBAnimation type="zoomIn" duration=".7s" className="d-flexwrap-center">
          <h2>About </h2>
          <h1 className="ml-2">Me</h1>
        </MDBAnimation>
        <MDBAnimation type="zoomIn" delay="500ms" duration="2s" >
          <h3 className="drkGrey fontL lineHeight">Highly-motivated remote Full Stack Web Developer with a background in Graphic Design. Effective at problem solving and weaving in creativity with function. Known among coworkers and clients for being versatile and reliable, works well both individually led and in a team environment.</h3>
        </MDBAnimation>
        <MDBAnimation type="zoomIn" delay="500ms" duration="2s" >
          <h3 className="drkGrey fontL lineHeight">Novice scuba diver. Local menace. I like sushi, art, chickens, playing video games with the family, and this one real cool dude called "husband".</h3>
        </MDBAnimation>
        <MDBAnimation type="zoomIn" delay="800ms" duration="2s" >
          <h4 className="drkGrey fontL" style={{ marginTop: "30px", marginBottom: "20px"}}>Get to know me!</h4>        
        </MDBAnimation>

        <MDBRow className="text-center fullwidth" id="contact">
          <MDBCol md="3">
            <MDBAnimation type="bounceIn" delay="800ms" duration="2s" >
              <a href="https://github.com/CptSpooky" target="blank">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon fab icon="github" />
                </MDBBtn>
              </a>
              <p>/CptSpooky</p>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="3">
            <MDBAnimation type="bounceIn" delay="850ms" duration="2s" >
              <a href="https://linkedin.com/in/daniellevarela" target="blank">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon fab icon="linkedin" />
                </MDBBtn>
              </a>
              <p>/daniellevarela</p>
            </MDBAnimation>  
          </MDBCol>
          <MDBCol md="3">
            <MDBAnimation type="bounceIn" delay="900ms" duration="2s" >
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>828.808.7956</p>
              <p className="mb-md-0">Mon - Fri, 8am-7pm EST</p>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="3">
            <MDBAnimation type="bounceIn" delay="950ms" duration="2s" >
              <MDBBtn tag="a" floating color="grey" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>legacyofthedonut@gmail.com</p>
            </MDBAnimation>  
          </MDBCol>
        </MDBRow>
      </div>
      <MDBRow className="fullwidth fullwidth d-flex justify-content-center flex-end">
        <MDBAnimation type="slideInUp" style={{ marginBottom: "-2rem" }} delay="950ms" duration="2s" >
          <img src={SVG} alt="me again" className="portrait fullwidth" style={{ paddingBottom: "0px", maxHeight: "335px" }} />
        </MDBAnimation>
      </MDBRow>
    </div>
  )
}
