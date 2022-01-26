import React, { useState } from 'react'
import { AllProjects } from '../components/AllProjects/AllProjects'
import { Footer } from '../components/Footer/Footer'
import { Contact } from '../components/Sections/Contacts'
import { Link } from 'react-router-dom'

import '../App2.css'

export const PortfolioPage = () => {
  const [click, setClick] = useState(false)

  //function to handle the clicking of the hamburger menu when in phone mode
  const handleClick = () => {
    setClick(!click)
  }

  return (
    //used seperate header for portfolio page with just home and contact links
    <>
      <header>
        <div className='content-wrapper'>
          <div className='half-width'>
            <Link to='/'><h3>Jacob Moe | Web Developer</h3></Link>
          </div>
          <div className={click ? 'menu-container change' : 'menu-container'} onClick={handleClick} >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          <div className={click ? 'half-width' : 'nav-links half-width'} id='myLinks' >
            <nav>
              <ul className='links_list'>
                <li><Link to='/'>Home</Link></li>
                <li><a href='#contact'>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='content-wrapper' id='tagline'>
          <h1>let's <span>code</span> something cool</h1>
        </div>
      </header>
      <AllProjects />
      <Contact />
      <Footer />
    </>
  )
}