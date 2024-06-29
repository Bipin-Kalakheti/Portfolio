import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import ProjectCard from '../../common/ProjectCard'
import ChatApp from '../../assets/images/logo_sub.png'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    console.log(portfolioData)
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            idx={15}
            strArray={'Portfolio'.split('')}
            letterClass={letterClass}
          />
        </h1>
        <div className="projectsContainer scroll-animate">
          <ProjectCard
            src={ChatApp}
            link="https://github.com"
            projectTitle="ChatApp"
            projectDescription="Online Chatting Web App"
          />
          <ProjectCard
            src={ChatApp}
            link="https://github.com"
            projectTitle="ChatApp"
            projectDescription="Online Chatting Web App"
          />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
