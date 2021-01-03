import React from 'react';
import ProjectCard from './ProjectCard';

export default function Portfolio() {
  return (
    <div id="Portfolio">
      <h1>Portfolio</h1>
      <div className="WebDevProjectList">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

    </div>
  )
}