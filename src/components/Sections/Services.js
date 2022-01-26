import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import { faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'


export const Services = () => {

  return (
    <section id="services">
      <div className="content-wrapper">
        <div className="service-wrapper">
          <h2>Services</h2>
          <article>
            <p className="font-awesome-icon"><FontAwesomeIcon icon={faFileCode} size='3x'/></p>
            <p className="services-desc para">I can build you a great looking website with many great features.</p>
          </article>
          <article>
            <p className="font-awesome-icon"><FontAwesomeIcon icon={faCode} size='3x'/></p>
            <p className="services-desc para">Need some extra code implemented on your site? I can do that for you.</p>
          </article>
          <article>
            <p className="font-awesome-icon"><FontAwesomeIcon icon={faDatabase} size='3x'/></p>
            <p className="services-desc para">Need some help with your WordPress site? I'm here to help with that as well.</p>
          </article>
        </div>
      </div>
    </section>
  )
}