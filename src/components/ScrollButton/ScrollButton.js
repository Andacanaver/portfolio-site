import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Styles'


export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  //use useEffect to show a button to move to the top when clicked.
  useEffect(() => {
    const toggleVisible = () => {
      console.log(1);
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  })

  //The behavior of the button when clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return(
    <Button>
      <FontAwesomeIcon icon={faArrowCircleUp} onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none", position: "fixed" }}
      />
    </Button>
  )
}