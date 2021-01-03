import React from 'react';
import { MDBAnimation } from "mdbreact";


export default function Home() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap">
      <div className="introText">
        <MDBAnimation type="slideInLeft" >
          <h2>Hello World!</h2>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
          <h1>I'm Danielle.</h1>
          <h3>Junior Full Stack Web Developer | Graphic Designer</h3>
        </MDBAnimation>
      </div>
      <MDBAnimation type="bounceIn" duration="1s" >
          <img alt="portrait" src="../assets/portrait.svg" className="portrait"/>
      </MDBAnimation>
    </div>
  )
}