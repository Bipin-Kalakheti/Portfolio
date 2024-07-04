import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from '../Loader/index'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from '../../common/ProjectCard'
import ChatApp from '../../assets/images/ChatApp.png'
import Tomato from '../../assets/images/tomato.png'
import Github from '../Icons/Github'
import Live from '../Icons/Live'
import Express from '../Icons/Express'
import Reacts from '../Icons/React'
import Firebase from '../Icons/Firebase'
import Node from '../Icons/Node'
import Mongodb from '../Icons/Mongodb'
import Stripe from '../Icons/Stripe'

const Works = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const chatAppTools = [<Reacts />, <Firebase />]
  const tomatoTools = [
    <Reacts />,
    <Node />,
    <Express />,
    <Mongodb />,
    <Stripe />,
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')

      document.querySelector('.text-zone').startTime = performance.now()
    }, 3000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container works-page">
        <h1 className="page-title text-zone">
          <AnimatedLetters
            idx={15}
            strArray={'Works'.split('')}
            letterClass={letterClass}
          />
        </h1>
        <div className="projectsContainer scroll-animate">
          <ProjectCard
            src={ChatApp}
            link="https://github.com"
            projectTitle="ChatApp"
            projectDescription="Online Chatting Web App"
            toolsUsed={chatAppTools}
          />
          <ProjectCard
            src={Tomato}
            link="https://github.com"
            projectTitle="Tomato"
            projectDescription="Food Delivery Web App"
            toolsUsed={tomatoTools}
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Works
