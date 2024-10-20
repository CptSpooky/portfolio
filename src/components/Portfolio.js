import React from 'react';
import ProjectCard from './ProjectCard';
import { MDBAnimation, MDBCol, MDBRow, MDBIcon } from "mdbreact";
import Projects from '../projects.js';

export default function Portfolio() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap">
      <div className="halfContainer d-flex align-items-center justify-content-center halfContainer-padding padding-0">
          <div className="introText fullwidth padding">
            <MDBRow>
              <MDBCol md='12' className='d-flex'>
                <MDBAnimation type="slideInLeft" duration="1s" className="d-flexwrap">
                  <h2>Work&</h2>
                  <h1 className="educationText">Experience</h1>
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
            <MDBAnimation type="fadeInLeft" delay="100ms" duration="1.5s" >
            <MDBRow>
              <MDBCol md='12' className='d-flex'>
                <h4 className="drkGrey fontL">Full Stack Engineer and UX/UI Designer</h4>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='12' className='d-flex'>
                <h5 className="drkGrey fontL mt-0">VIKING SASQUATCH | 2021-Present</h5>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='12' className='d-flex'>
                <h6 className="drkGrey fontL lineHeight">Agile lead front end and back end developer for several client and in-house projects. Responsible for meeting SOC2 compliance, releases, code quality, managing AWS accounts pertaining to my projects, collaborating with different teams, project management via Jira, designing UI’s, in house marketing assets, website design and branding.</h6>
              </MDBCol>
            </MDBRow>
          </MDBAnimation>
            <MDBAnimation type="fadeInLeft" delay="100ms" duration="1.5s" >
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h4 className="drkGrey fontL">Full Stack Engineer | UX/UI Designer | Graphic Designer</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h5 className="drkGrey fontL mt-0">FREELANCE | 2019-Present</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight">Remote contracting where tasks included delivering dozens of high-click static and animated social media ads weekly, creating brand guidelines for several agencies as well as designing and developing several apps and blogs.</h6>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeInLeft" delay="200ms" duration="1.5s" >
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h4 className="drkGrey fontL">Jr-Senior Designer and Microsoft Brand Lead</h4>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h5 className="drkGrey fontL mt-0">SCORCH AGENCY | 2014-2019</h5>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight">Worked both as an in-house and remote graphic designer individually and in a group setting to develop design concepts and creative solutions for both digital and print. Presented final concepts and layouts to the Creative Director and participated in client calls.</h6>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="bounceIn" delay="300ms" duration="1s" >
              <MDBRow className="no-flex-wrap">
                <MDBCol size='1' className="d-flex justify-content-end align-items-center"><MDBIcon size="2x" icon="tasks" className="bullets" /></MDBCol>
                <MDBCol size='11'><h6 className="drkGrey fontL lineHeight">Maintained brand identities for a multitude of clients and managed the transition between the old and new visual identities smoothly.</h6></MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="bounceIn" delay="400ms" duration="1s" >
              <MDBRow className="no-flex-wrap">
                <MDBCol size='1' className="d-flex justify-content-end align-items-center" ><MDBIcon size="2x" icon="angle-double-right" className="bullets" /></MDBCol>
                <MDBCol size='11'><h6 className="drkGrey fontL lineHeight">Spearheaded dozens of projects including being lead Designer for the heavily illustrated Microsoft in Business campaign, as well as several of LinkedIn’s highly successful Sophisticated Guides for the Marketer.</h6></MDBCol>
              </MDBRow>
            </MDBAnimation>
            <MDBAnimation type="fadeInLeft" delay="300ms" duration="1.5s" >
              <MDBRow className="no-flex-wrap">
                <h4 className="drkGrey fontL" style={{ paddingLeft: "15px" }}>Skills</h4>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight"><strong>Languages: </strong>HTML/CSS, JavaScript, JQuery, Typescript</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight"><strong>Libraries/APIs: </strong>Ajax, Node.js, MySQL, MongoDB, Mongoose, Sequelize, Axios, Handlebars.js, Express, ReactJS, JSX, React-Redux, Prisma, Vuejs, Vuex, NESTJs, AWS Lambda, AWS S3, AWS Amplify, AWS Route 53, Tauri, Electron, NSIS, Tailwind CSS, Swagger, Insomnia, Storybook, Vite, Auth0, SOC2, Agile/Scrum, Husky, Linters</h6>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md='12' className='d-flex'>
                  <h6 className="drkGrey fontL lineHeight"><strong>Design: </strong>UX/UI Design, Illustration, Motion Graphics, Print and Digital layouts, Adobe Suite proficiency</h6>
                </MDBCol>
              </MDBRow>
            </MDBAnimation>  
          </div>
        </div>
        
        <div className="halfContainer halfContainer-padding halfContainer-margin">
          <div className="WebDevProjectList">
            <ProjectCard projects={Projects}/>
          </div>
        </div>
    </div>
  )
}