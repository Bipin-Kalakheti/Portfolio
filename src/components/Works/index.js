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
import Nextjs from '../Icons/Nextjs'
import Prisma from '../Icons/Prisma'
import Tailwind from '../Icons/Tailwind'

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

  const RojGarTools = [<Node />, <Nextjs />, <Prisma />, <Tailwind />]

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
            liveLink="https://chatapp-e9717.firebaseapp.com"
            projectTitle="GuffGaff"
            projectDescription="A React-based real-time chat app leveraging Firebase for backend services."
            toolsUsed={GuffGaffTools}
          />
          <ProjectCard
            src={KhajaGhar}
            sourceLink="https://github.com/Bipin-Kalakheti/KhajaGhar"
            liveLink="https://khajaaghaar.netlify.app/"
            projectTitle="KhajaGhar"
            projectDescription="A full-stack food ordering web application built with the MERN stack. "
            toolsUsed={KhajaGharTools}
          />
          <ProjectCard
            src={RojGar}
            sourceLink="https://github.com/Bipin-Kalakheti/RojGar"
            liveLink="https://rojgar-jade.vercel.app/"
            projectTitle="RojGar"
            projectDescription="A NextJs app, designed to manage and organize job applications, statuses, and related notes."
            toolsUsed={RojGarTools}
          />
        </div>
      </div>
      <Loader />
    </>
  )
}

export default Works
