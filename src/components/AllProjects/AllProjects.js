import React from 'react'
import { projectContainer } from '../../assests/Projects/ProjectContainer'



export const AllProjects = () => {
  //import all the projects i've done from an array of objects
  const projects = projectContainer.projects

    //function to render projects with links if the project has a server link or not
    const renderedProjects = projects.map(project => {
    let hasNoServerLink = <ul className='project-links'>
          <li key={`${project.id}-a`}>
            <a href={`${project.clientRepo}`} target="_blank" rel='noreferrer'>
              Github Repo
            </a>
          </li>
          <li key={`${project.id}-b`}>
            <a href={`${project.liveSite}`} target="_blank" rel='noreferrer'>
              View Live Project
            </a>
          </li>
        </ul>
      
    let hasServerLink = <ul className='project-links'>
          <li key={`${project.id}-a`}>
            <a href={`${project.clientRepo}`} target="_blank" rel='noreferrer'>
              Client Github Repo
            </a>
          </li>
          <li key={`${project.id}-b`}>
            <a href={`${project.serverRepo}`} target="_blank" rel='noreferrer'>
              Server Github Repo
            </a>
          </li>
          <li key={`${project.id}-c`}>
            <a href={`${project.liveSite}`} target="_blank" rel='noreferrer'>
              View Live Project
            </a>
          </li>
        </ul>
    
    
      return (
        //project div for each project that is in the projects array
        <div className='project-content' key={project.id}>
          <div className='project-desc half-width'>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {
              project.hasServer === false ? hasNoServerLink : hasServerLink
            }
          </div>
          <div className='project-img half-width'>
            <a href={project.liveSite} rel='noreferrer' target="_blank"><img src={project.thumbNail} alt={project.altText} id={project.imgId}/></a>
          </div>
        </div>
      )
    })

    return (
      //rendering all the projects
      <section id='portfolio'>
          <div className='content-wrapper'>
            <h2>My Portfolio Projects</h2>
            <p className='project-para'>Here are some more projects that I have completed.</p>
            <br/>
            {renderedProjects}
          </div>
        </section>
    )
}
