import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons'
import Github from '../components/Icons/Github'
import Express from '../components/Icons/Express'
import Live from '../components/Icons/Live'
import React from 'react'

function ProjectCard({
  src,
  link,
  projectTitle,
  projectDescription,
  toolsUsed,
}) {
  return (
    <div className="card fixblock">
      <div className="card-content">
        <div className="card-title">
          <span class="card__title">
            {' '}
            <h2>{projectTitle}</h2>
          </span>
        </div>
        <div className="card-description">
          <p>{projectDescription}</p>
        </div>
        <div className="tools-used">
          {toolsUsed.map((ToolComponent, index) => (
            <React.Fragment key={index}>{ToolComponent}</React.Fragment>
          ))}
        </div>
        <div className="card-image">
          <img src={src} alt={projectTitle} />
        </div>
        <div className="card-link">
          <div class="social-links">
            <div id="github" class="social-btn flex-center">
              <Github />
              <span>View Code</span>
            </div>
            <div id="linkedin" class="social-btn flex-center">
              <Live />
              <span>View Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
