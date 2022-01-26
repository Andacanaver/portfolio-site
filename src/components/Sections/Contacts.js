import React from 'react'
import { Images } from '../../assests/Projects/ImagesContainer'

export const Contact = () => {

  return (
    <section id="contact">
      <div className="content-wrapper">
        <h2>let's connect</h2>
        <div className="contact-content">
          <h3>Hire me</h3>
          <p><a href="mailto:jacob.coding117@gmail.com">Email Me</a></p>
        </div>
        <div className="contact-content">
          <h3>Follow me</h3>
          <ul>
            <li><a href="https://twitter.com/andacanaver" target="_blank" rel='noreferrer'><img src={Images.twitter} alt="twitter icon" /></a>
            </li>
            <li><a href="https://github.com/Andacanaver?tab=repositories" target="_blank" rel='noreferrer'><img src={Images.github} alt="github icon" /></a></li>
            <li><a href="https://www.linkedin.com/in/jacobmoelink/" target="_blank" rel='noreferrer'><img src={Images.linkedin} alt="linkedin icon" /></a></li>
          </ul>
        </div>
        <div className="contact-content">
          <h3>Meet me</h3>
          <p>Grand Rapids, MN<br />Let's go to meetups together!</p>
        </div>
      </div>
    </section>
  )
}