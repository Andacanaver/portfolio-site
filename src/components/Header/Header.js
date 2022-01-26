import React, { useState } from 'react'

//import './Header.css'

export const Header = () => {
  const [click, setClick] = useState(false)

  //function to handle the clicking of the hamburger menu in phone mode
  const handleClick = () => {
    setClick(!click)
  }


  //rendering the header links with the div IDs for the homepage
  return (
    <header>
      <div className='content-wrapper'>
        <div className='half-width'>
          <h3>Jacob Moe | Web Developer</h3>
        </div>
        <div className={click ? 'menu-container change' : 'menu-container'} onClick={handleClick} >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <div className={click ? 'half-width' : 'nav-links half-width'} id='myLinks' >
          <nav>
            <ul className='links_list'>
              <li><a href='#about'>About</a></li>
              <li><a href='#portfolio'>Portfolio</a></li>
              <li><a href='#services'>Services</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='content-wrapper' id='tagline'>
        <h1>let's <span>code</span> something cool</h1>
      </div>
    </header>
  )

}
