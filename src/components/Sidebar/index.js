import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_subB.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faScrewdriverWrench,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)
  // In Sidebar component
  const handleNavLinkClick = () => {
    setShowNav(!showNav) // Assuming you want to close the navbar on click
  }
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={Logos} alt="logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Bipin" />
        </Link>

        <nav className={showNav ? 'mobile-show' + 'navbar' : 'navbar'}>
          <NavLink
            exact="true"
            activeclassname="active"
            className="home-link"
            to="/"
            onClick={() => {}}
          >
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/About"
            onClick={() => {}}
          >
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="works-link"
            to="/Works"
            onClick={() => {}}
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => {}}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>

        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/bipin-kalakheti/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Bipin-Kalakheti"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => {
            showNav ? setShowNav(false) : setShowNav(true)
          }}
          icon={faBars}
          color="#1AAFBC"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </>
  )
}

export default Sidebar
