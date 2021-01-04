import React from 'react';
import ProjectCard from './ProjectCard';
import { MDBAnimation } from "mdbreact";
import portProjects from '../projects.json';

export default function Portfolio() {
  return (
    <div className="mainContainer d-flex align-items-center justify-content-center flex-wrap">
      <div className="halfContainer d-flex align-items-center justify-content-center">
          <div className="introText">
            <MDBAnimation type="slideInLeft" duration="1s">
              <h2 className="d-inline">My</h2>
              <h1 className="ml-4 d-inline">Work</h1>
            </MDBAnimation>
          </div>
        </div>
        
        <div className="halfContainer">
          <div className="WebDevProjectList">
            <ProjectCard projects={portProjects}/>
          </div>
        </div>
    </div>
  )
}