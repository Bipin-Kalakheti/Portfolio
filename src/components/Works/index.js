import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from '../Loader/index'
import AnimatedLetters from '../AnimatedLetters'
import ProjectCard from '../../common/ProjectCard'
import GuffGaff from '../../assets/images/GuffGaff.png'
import KhajaGhar from '../../assets/images/KhajaGhar.png'
import visualSort from '../../assets/images/visualsort.gif'
import pathviz from '../../assets/images/pathviz.gif'
import mini_project from '../../assets/images/mini-project.gif'
import RojGar from '../../assets/images/RojGar.png'
import Github from '../Icons/Github'
import Live from '../Icons/Live'
import Express from '../Icons/Express'
import ReactIco from '../Icons/React'
import Firebase from '../Icons/Firebase'
import Node from '../Icons/Node'
import Mongodb from '../Icons/Mongodb'
import Stripe from '../Icons/Stripe'
import { motion } from 'framer-motion'
import Nextjs from '../Icons/Nextjs'
import Prisma from '../Icons/Prisma'
import Tailwind from '../Icons/Tailwind'
import JavaScript from '../Icons/JavaScript'
import TypeScript from '../Icons/TypeScript'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Works = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [projectsPerSlide, setProjectsPerSlide] = useState(3)

  const projects = [
    {
      src: GuffGaff,
      sourceLink: 'https://github.com/Bipin-Kalakheti/GuffGaff',
      liveLink: 'https://chatapp-e9717.firebaseapp.com',
      projectTitle: 'GuffGaff',
      projectDescription:
        'A React-based real-time chat app leveraging Firebase for backend services.',
      toolsUsed: [<ReactIco />, <Firebase />, <Node />],
    },
    {
      src: KhajaGhar,
      sourceLink: 'https://github.com/Bipin-Kalakheti/KhajaGhar',
      liveLink: 'https://khajaaghaar.netlify.app/',
      projectTitle: 'KhajaGhar',
      projectDescription:
        'A full-stack food ordering web application built with the MERN stack.',
      toolsUsed: [<ReactIco />, <Node />, <Mongodb />, <Express />],
    },
    {
      src: pathviz,
      sourceLink: 'https://github.com/Bipin-Kalakheti/pathviz',
      liveLink: 'https://pathviz-phi.vercel.app/',
      projectTitle: 'PathViz',
      projectDescription:
        'A NextJs app, designed to manage and organize job applications, statuses, and related notes.',
      toolsUsed: [<ReactIco />, <TypeScript />, <Tailwind />],
    },
    {
      src: visualSort,
      sourceLink: 'https://github.com/Bipin-Kalakheti/visualsort',
      liveLink: 'https://visualsort-three.vercel.app/',
      projectTitle: 'VisualSort',
      projectDescription:
        'A NextJs app, designed to manage and organize job applications, statuses, and related notes.',
      toolsUsed: [<Nextjs />, <TypeScript />, <Tailwind />],
    },
    {
      src: RojGar,
      sourceLink: 'https://github.com/Bipin-Kalakheti/RojGar',
      liveLink: 'https://rojgar-jade.vercel.app/',
      projectTitle: 'RojGar',
      projectDescription:
        'A NextJs app, designed to manage and organize job applications, statuses, and related notes.',
      toolsUsed: [<Node />, <Nextjs />, <Prisma />, <Tailwind />],
    },
    {
      src: mini_project,
      sourceLink: 'https://github.com/Bipin-Kalakheti/Practice_NextJs',
      liveLink: 'https://nextjs-mini-projects-iota.vercel.app/',
      projectTitle: 'Mini Practice project',
      projectDescription:
        'A NextJs app, designed to manage and organize job applications, statuses, and related notes.',
      toolsUsed: [<Nextjs />, <JavaScript />],
    },
  ]

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + projectsPerSlide) % projects.length
    )
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - projectsPerSlide + projects.length) % projects.length
    )
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setProjectsPerSlide(projects.length) // Show all projects on small screens
      } else {
        setProjectsPerSlide(3) // Show 3 projects per slide on larger screens
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize() // Set initial value

    return () => window.removeEventListener('resize', handleResize)
  }, [projects.length])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
      document.querySelector('.text-zone').startTime = performance.now()
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container works-page">
        <h1 className="page-title text-zone">
          <AnimatedLetters
            idx={15}
            strArray={'Work  x6'.split('')}
            letterClass={letterClass}
          />
          
        </h1>
        <div className="carousel-container">
          <button className="arrow-button next" onClick={nextSlide}>
            <div className="shadow"></div>
            <div className="edge"></div>
            <div className="front">
              <div className="arrows">
                <span className="arrow">
                  {' '}
                  <FontAwesomeIcon icon={faCaretLeft} color="#4d4d4e" />{' '}
                </span>
              </div>
            </div>
          </button>

          <div className="projectsContainer">
            {projects
              .slice(currentIndex, currentIndex + projectsPerSlide)
              .map((project, index) => (
                <ProjectCard
                  key={index}
                  src={project.src}
                  sourceLink={project.sourceLink}
                  liveLink={project.liveLink}
                  projectTitle={project.projectTitle}
                  projectDescription={project.projectDescription}
                  toolsUsed={project.toolsUsed}
                />
              ))}
          </div>
          <button className="arrow-button next" onClick={nextSlide}>
            <div className="shadow"></div>
            <div className="edge"></div>
            <div className="front">
              <div className="arrows">
                <span className="arrow">
                  <FontAwesomeIcon icon={faCaretRight} color="#4d4d4e" />
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Loader />
    </>
  )
}

export default Works
