import React from 'react';
import { MDBAnimation, MDBCol, MDBRow, MDBIcon } from "mdbreact";

export default function Education() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap">
      <MDBRow>
        <MDBCol md="6" className="d-flex align-items-center justify-content-center padding">
          <div className="introText fullwidth padding">
            <MDBRow>
              <MDBCol md='12' className='d-flex'>
                <MDBAnimation type="slideInLeft" duration="1s">
                  <h2 className="d-inline">My</h2>
                  <h1 className="ml-4 d-inline">Education</h1>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
            <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h4 className="drkGrey fontL">Certificate in Full Stack Web Development</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h5 className="drkGrey fontL mt-0">UNC Chapel Hill, North Carolina | 2020</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight">A 24-week intensive bootcamp program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS.</h6>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h4 className="drkGrey fontL">Internship at the Inspiration Network</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h5 className="drkGrey fontL mt-0">Charlotte, North Carolina | 2013</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight">A month long internship where I helped produce photoshoot layouts and commercial motion graphic slips for the shows Happy Days, The Waltons, and Dr Quinn Medicine Woman. Originally unpaid, but my coworkers liked me so much they compensated me for my work.</h6>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeIn" delay="900ms" duration="2s" >
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h4 className="drkGrey fontL">Bachelor of Fine Arts</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h5 className="drkGrey fontL mt-0">Western Carolina University, North Carolina | 2013</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight">A 4 year undergrad program with a specialization in Graphic Design, motion graphics, web development, typography and print where I graduated with high honors.</h6>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
          </div>
        </MDBCol>
        <MDBCol md="6" className="d-flex align-items-center justify-content-center skillsCardColPadding padding fullVHeight f-direction-column">
        


        
        </MDBCol>
      </MDBRow>
  </div>
  )
}