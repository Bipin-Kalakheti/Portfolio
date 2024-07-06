import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from '../Loader/index'
import HeroImg from '../../assets/images/hero-img.png'
import Resume from '../../assets/images/cv.pdf'
import { motion } from 'framer-motion'

const Home = () => {
  const handleMouseEnter = (event) => {
    const element = event.target
    const animationDelay = parseFloat(
      window.getComputedStyle(element).animationDelay
    )
    const animationDuration = parseFloat(
      window.getComputedStyle(element).animationDuration
    )
    const totalAnimationTime = animationDelay + animationDuration

    // Current time since the element was rendered
    const currentTime =
      performance.now() - element.closest('.text-zone').startTime
    console.log(currentTime)
    if (currentTime >= totalAnimationTime * 1000) {
      element.classList.remove('text-animate-hover')
      // Trigger a reflow in between removing and adding the class back
      void element.offsetWidth
      element.classList.add('text-animate-hover')
    }
  }

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'p', 'i', 'n', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
      document.querySelector('.text-zone').startTime = performance.now()
    }, 4000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const pageElement = document.querySelector('.container')
    pageElement.classList.add('scale-effect')
    const timer = setTimeout(() => {
      pageElement.classList.remove('scale-effect')
      pageElement.classList.add('scale-back')
    }, 500) // Match the duration of your CSS transition

    return () => clearTimeout(timer)
  }, [])
  useEffect(() => {
    const imgContainer = document.querySelector('.img-container')
    const handleMouseEnter = () => imgContainer.classList.add('swing')
    const handleAnimationEnd = () => imgContainer.classList.remove('swing')

    imgContainer.addEventListener('mouseenter', handleMouseEnter)
    imgContainer.addEventListener('animationend', handleAnimationEnd)

    // Cleanup function to remove event listeners
    return () => {
      imgContainer.removeEventListener('mouseenter', handleMouseEnter)
      imgContainer.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass} onMouseEnter={handleMouseEnter}>
              H
            </span>
            <span
              className={`${letterClass} _12`}
              onMouseEnter={handleMouseEnter}
            >
              i
            </span>
            <span
              className={`${letterClass} _13`}
              onMouseEnter={handleMouseEnter}
            >
              ,
            </span>
            <br />
            <span
              className={`${letterClass} _14`}
              onMouseEnter={handleMouseEnter}
            >
              I
            </span>
            <span
              className={`${letterClass} _15`}
              onMouseEnter={handleMouseEnter}
            >
              'm
            </span>
            <span> </span>
            <span
              className={`${letterClass} _15`}
              onMouseEnter={handleMouseEnter}
            >
              B
            </span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Aspiring Software Developer / Web Development Enthusiast /
            Freelancer
          </h2>
          <div>
            <a href={Resume} download>
              <button>
                <span className="button_top"> Resume</span>
              </button>
            </a>

            <a href="/Portfolio/contact">
              <button>
                <span className="button_top"> Contact Me</span>
              </button>
            </a>
          </div>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="" />
        </div>
      </div>
      <Loader />
    </>
  )
}

export default Home
