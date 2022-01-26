import React from 'react'


export const AboutMe = () => {

  return (
    <section id="about">
      <h2>About Me</h2>
      <p id="statment">I am passionate about the web.</p>
      <div className="content-wrapper">

        <div className="about-info half-width">
          <p>I started self learning how to code in April 2019, I wandered around the internet learning from different sources and finally decided to try the Thinkful bootcamp. I'm excited about what it will bring and how much I can improve with their help. I look forward to learning and creating with what I learn.</p>
        </div>
        <div className="half-width about-info">
          <p>Outside of coding I enjoy playing video games and watching Netflix. I get together with friends when I can and we like to play golf or go fishing when weather permits.</p>
        </div>

      </div>
    </section>
  )
}