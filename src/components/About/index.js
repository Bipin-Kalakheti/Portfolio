import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import SkillsIco from '../Icons/SkillsIco'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
      document.querySelector('.text-zone').startTime = performance.now()
    }, 3000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])
  //New Start

  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller')
    if (
      scrollers.length > 0 &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      addAnimation()
      setContentLoaded(true) // Indicate that content (and animations) are ready
    }
  }, [contentLoaded])

  function addAnimation() {
    const scrollers = document.querySelectorAll('.scroller')
    console.log('addAnimation')
    scrollers.forEach((scroller) => {
      scroller.setAttribute('data-animated', true)

      const scrollerInner = scroller.querySelector('.scroller_inner')
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute('aria-hidden', true)
        scrollerInner.appendChild(duplicatedItem)
        console.log('Animating item:', item) // Check if items are selected and duplicated
        console.log("Yes we're animating")
      })
    })
  }

  return (
    <>
      <div className="container about-page">
        <div className="text-zone about-container">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div>
            <p>
              I am a full stack developer with a passion for creating beautiful
              and functional web applications. I have a strong background in web
              development and have worked with a variety of technologies
              including JavaScript, React, Node.js, Express.js, MongoDB, and
              MySQL.
            </p>
            <p>
              I am currently seeking a full-time position as a full stack
              developer in the San Francisco Bay Area.
            </p>
            <p>
              If you would like to learn more about me or have any questions,
              please feel free to reach out to me.
            </p>
          </div>
        </div>

        <div className="scroller-container">
          <div className="scroller left-scrollAnimate">
            <ul className="tag-list scroller_inner ">
              <SkillsIco />
              <SkillsIco />
            </ul>
          </div>
          <div className="scroller right-scrollAnimate" data-direction="right">
            <ul className="tag-list scroller_inner ">
              <SkillsIco />
              <SkillsIco />
            </ul>
          </div>
          <div className="scroller left-scrollAnimate">
            <ul className="tag-list scroller_inner">
              <SkillsIco />
              <SkillsIco />
            </ul>
          </div>
          <div className="scroller right-scrollAnimate" data-direction="right">
            <ul className="tag-list scroller_inner ">
              <SkillsIco />
              <SkillsIco />
            </ul>
          </div>
          <div className="scroller left-scrollAnimate">
            <ul className="tag-list scroller_inner">
              <SkillsIco />
              <SkillsIco />
            </ul>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
