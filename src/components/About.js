import React from 'react';
import { MDBAnimation } from "mdbreact";

export default function About() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap">
      <div className="introText">
        <MDBAnimation type="slideInLeft" duration="1s">
          <h2 className="d-inline">About</h2>
          <h1 className="ml-4 d-inline">Me</h1>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
          <h3 className="drkGrey fontL lineHeight">Highly-motivated Full Stack Web Developer with a background in Graphic Design. Effective at problem solving and weaving in creativity with function. Known among coworkers and clients for being versatile and reliable, works well both individually led and in a team environment.</h3>
        </MDBAnimation>
      </div>
    </div>
  )
}


// novice scuba diver and local menace. Likes sushi, raising chickens, and this one real cool dude called "husband"