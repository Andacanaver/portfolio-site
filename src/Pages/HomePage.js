import React from 'react'
import { Header } from '../components/Header/Header'
import { Projects } from '../components/Projects/Projects'
import { Footer } from '../components/Footer/Footer'
import { AboutMe } from '../components/Sections/AboutMe'
import { Services } from '../components/Sections/Services'
import { Contact } from '../components/Sections/Contacts'


export const HomePage = () => {

  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}