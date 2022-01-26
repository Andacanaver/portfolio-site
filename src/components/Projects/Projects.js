import React from 'react'
import { Link } from 'react-router-dom'

import { projectContainer } from '../../assests/Projects/ProjectContainer'

export const Projects = () => {
  //import projects array of objects
  const projects = projectContainer.projects
  //select the top 5 projects to showcase on the homepage
  const topProjects = () => {
    const filteredProjects = []
    for (let i = 0; i < 5; i++) {
      filteredProjects.push(projects[i])
    }
    return filteredProjects
  }

  //function to render the links of the projects wether they have a server link or not
  const renderedProjects = topProjects().map(project => {
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
    
      //Project divs for the top projects that will be displayed on the homepage
      return (
        <div className='full-width' key={project.id}>
          <div className='my-img half-width'>
            <a href={project.liveSite} rel='noreferrer' target="_blank"><img src={project.thumbNail} alt={project.altText} id={project.imgId}/></a>
              </div>
          <div className='text half-width'>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {
              project.hasServer === false ? hasNoServerLink : hasServerLink
            }
          </div>
        </div>
      )
    })
    //rendering the projects
    return (
      <section id='portfolio'>
          <div className='content-wrapper'>
            <div className='content-wrapper-h2'>
              <h2>My Portfolio</h2>
            </div>
            <br/>
            {renderedProjects}
            <Link to='/portfolio'><h3 id='project-link'>View More Projects</h3></Link>
          </div>
        </section>
    )
  }

