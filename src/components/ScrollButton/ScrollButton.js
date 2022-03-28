import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from './Styles'


export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)


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

  /*
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    });
  }, [])

  
  --Old version of button
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
*/
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  //window.addEventListener('scroll', toggleVisible) --old method

  return(
    <Button>
      <FontAwesomeIcon icon={faArrowCircleUp} onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none", position: "fixed" }}
      />
    </Button>
  )
}