import React from 'react';
import { MDBAnimation, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";

export default function About() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap">
      <div className="introText" style={{ textAlign: "center" }}>
        <MDBAnimation type="slideInLeft" duration="1s">
          <h2 className="d-inline">About</h2>
          <h1 className="ml-4 d-inline">Me</h1>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
          <h3 className="drkGrey fontL lineHeight">Highly-motivated remote Full Stack Web Developer with a background in Graphic Design. Effective at problem solving and weaving in creativity with function. Known among coworkers and clients for being versatile and reliable, works well both individually led and in a team environment.</h3>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
          <h3 className="drkGrey fontL lineHeight">Novice scuba diver. Local menace. I like sushi, art, chickens, playing video games with the family, and this one real cool dude called "husband".</h3>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
          <h4 className="drkGrey fontL" style={{ marginTop: "30px", marginBottom: "20px"}}>Get to know me!</h4>        
        </MDBAnimation>

        <MDBRow className="text-center" style={{ marginBottom: "6rem"}}>
          <MDBCol md="3">
            <a href="https://github.com/CptSpooky" target="blank">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </a>
            <p>/CptSpooky</p>
          </MDBCol>
          <MDBCol md="3">
            <a href="https://linkedin.com/in/daniellevarela" target="blank">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon fab icon="linkedin" />
              </MDBBtn>
            </a>
            <p>/daniellevarela</p>
          </MDBCol>
          <MDBCol md="3">
            <MDBBtn tag="a" floating color="grey" className="accent-1">
              <MDBIcon icon="phone" />
            </MDBBtn>
            <p>828.808.7956</p>
            <p className="mb-md-0">Mon - Fri, 8am-7pm EST</p>
          </MDBCol>
          <MDBCol md="3">
            <MDBBtn tag="a" floating color="grey" className="accent-1">
              <MDBIcon icon="envelope" />
            </MDBBtn>
            <p>legacyofthedonut@gmail.com</p>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  )
}
