import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

import { useRef } from 'react'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap-trial'

const Home = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()
  const didAnimate = useRef(false) // Add this useRef to track if animation has already run

  useEffect(() => {
    if (didAnimate.current) return // Check if animation has run before, if yes, do nothing
    didAnimate.current = true
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 15,
      })
    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 4,
      }
    )
  }, [])

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'p', 'i', 'n']
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
    }, 4000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <svg
              width="50pt"
              height="100pt"
              viewBox="000 -400 500 633"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                className="svg-container"
                transform="translate(140 20) scale(1) "
                fill="none"
              >
                <path
                  ref={outlineLogoRef}
                  d="M.25,390.73l67.41-9.94c3.04-14.68,5.46-39.88,7.25-75.6,1.79-35.72,2.69-63.51,2.69-83.39v-86.47c0-24.35-.63-47.67-1.88-69.96-1.25-22.29-2.95-39.97-5.1-53.04L.79,2.94V.25h199.54c28.64,0,51.38,4.61,68.21,13.83,16.83,9.22,28.64,20.73,35.45,34.51,6.8,13.79,10.21,28.29,10.21,43.51,0,27.22-9.09,48.74-27.26,64.59-18.17,15.84-40.24,24.93-66.2,27.26v1.07c26.86,1.25,49.72,6.81,68.62,16.65,18.89,9.85,33.17,22.52,42.83,38,9.67,15.49,14.5,32.09,14.5,49.82,0,15.04-3.72,30.44-11.15,46.19-7.43,15.76-20.95,29.32-40.55,40.69-19.61,11.37-45.88,17.05-78.82,17.05H.25v-2.69ZM85.38,10.19v372.75h18.8V10.19h-18.8ZM170.51,194.42c-17.55,0-29.81,1.25-36.79,3.76-1.44,13.07-2.15,34.38-2.15,63.92,0,35.09,1.25,68.75,3.76,100.98,10.21,5.73,19.38,9.67,27.53,11.82,8.14,2.15,18.22,3.22,30.21,3.22,18.98,0,35.54-3.26,49.68-9.8,14.14-6.53,25.2-16.34,33.17-29.41,7.96-13.07,11.95-29,11.95-47.8s-4.52-35.45-13.56-49.95c-9.04-14.5-22.38-25.92-40.01-34.24-17.64-8.33-38.9-12.49-63.78-12.49ZM169.98,15.02c-13.79,0-24.17,1.07-31.15,3.22-4.48,28.65-6.71,62.57-6.71,101.78,0,28.65.54,47,1.61,55.05,7.88,3.22,18.53,4.83,31.96,4.83,17.9,0,33.84-3.26,47.8-9.8,13.96-6.53,24.98-16.2,33.03-29,8.06-12.8,12.08-28.6,12.08-47.4,0-14.5-3.05-27.7-9.13-39.61-6.09-11.9-15.76-21.39-29-28.47-13.25-7.07-30.08-10.61-50.49-10.61ZM177.23,6.7v2.15c19.51.54,36.12,4.52,49.82,11.95,13.7,7.43,23.94,17.55,30.75,30.35,6.8,12.8,10.21,27.53,10.21,44.18,0,15.76-3,29.59-9,41.49-6,11.91-13.66,21.26-22.96,28.06-9.31,6.81-18.98,11.46-29,13.96v2.95c24.88-3.4,44.27-13.29,58.14-29.68,13.87-16.38,20.81-35.85,20.81-58.41,0-13.96-2.28-26.41-6.85-37.33-4.56-10.92-11.1-20.18-19.6-27.8-8.51-7.61-18.22-13.34-29.14-17.19-10.92-3.85-23.36-5.77-37.33-5.77-3.4,0-8.69.36-15.84,1.07ZM207.04,189.31v2.15c15.75,2.87,30.52,8.46,44.31,16.78,13.78,8.33,24.84,19.52,33.17,33.57,8.33,14.06,12.49,30.84,12.49,50.35,0,15.94-3.45,30.84-10.34,44.71-6.89,13.88-18.08,25.29-33.57,34.24-15.49,8.96-34.87,13.43-58.14,13.43v2.15c2.86.9,8.14,1.34,15.84,1.34,22.56,0,41.89-4.52,58.01-13.56,16.11-9.04,28.15-20.9,36.12-35.58,7.96-14.68,11.95-30.25,11.95-46.73,0-19.69-4.21-37.15-12.62-52.37-8.42-15.22-20.91-27.26-37.46-36.12-16.56-8.86-36.48-13.65-59.75-14.37Z"
                />
              </g>
            </svg>

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
          <h2> Frontend Developer / Python Developer / Gamer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
