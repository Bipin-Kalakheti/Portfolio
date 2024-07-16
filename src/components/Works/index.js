import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from '../Loader/index'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from '../../common/ProjectCard'
import GuffGaff from '../../assets/images/GuffGaff.png'
import KhajaGhar from '../../assets/images/KhajaGhar.png'
import RojGar from '../../assets/images/RojGar.png'
import Github from '../Icons/Github'
import Live from '../Icons/Live'
import Express from '../Icons/Express'
import Reacts from '../Icons/React'
import Firebase from '../Icons/Firebase'
import Node from '../Icons/Node'
import Mongodb from '../Icons/Mongodb'
import Stripe from '../Icons/Stripe'
import { motion } from 'framer-motion'

const Works = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const GuffGaffTools = [<Reacts />, <Firebase />]
  const KhajaGharTools = [
    <Reacts />,
    <Node />,
    <Express />,
    <Mongodb />,
    <Stripe />,
  ]

  const RojGarTools = [<Node />]

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
            src={GuffGaff}
            sourceLink="https://github.com/Bipin-Kalakheti/GuffGaff"
            liveLink = 'https://chatapp-e9717.firebaseapp.com'
            projectTitle="GuffGaff"
            projectDescription="Online Chatting Web App"
            toolsUsed={GuffGaffTools}
          />
          <ProjectCard
            src={KhajaGhar}
            sourceLink="https://github.com/Bipin-Kalakheti/KhajaGhar"
            liveLink = 'https://khajaaghaar.netlify.app/'
            projectTitle="KhajaGhar"
            projectDescription="Food Delivery Web App"
            toolsUsed={KhajaGharTools}
          />
          <ProjectCard
            src={RojGar}
            sourceLink="https://github.com/Bipin-Kalakheti/RojGar"
            liveLink = 'https://rojgar-jade.vercel.app/'
            projectTitle="RojGar"
            projectDescription="A job tracking application - Under Development"
            toolsUsed={RojGarTools}
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Works
