import Loader from '../Loader/index'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
      document.querySelector('.text-zone').startTime = performance.now()
    }, 3000)

    // Return a cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('gmail', 'ajkadkasj', refForm.current, 'dajfakfakfjalf')
      .then(
        () => {
          alert('Message sent!')
          window.location.reload(false)
        },
        () => {
          alert('Oops! There was an error.')
        }
      )
  }

  return (
    <>
      <div className="contact-page container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Interested in collaborating or have questions? I'd love to connect!
            Let's create something amazing together.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <div className="inputBox left-scrollAnimate">
                <input type="text" name="user_name" className="" required />
                <span>Full Name</span>
              </div>
              <div className="inputBox right-scrollAnimate ">
                <input type="email" name="user_email" className="" required />
                <span>Email</span>
              </div>
              <div className="inputBox left-scrollAnimate extraWidth">
                <input type="text" name="subject" className="" required />
                <span>Subject</span>
              </div>
              <div className="inputBox right-scrollAnimate extraWidth">
                <textarea name="message" className="" required></textarea>
                <span>Message</span>
              </div>
              <div className="send-btn">
                <button type="submit" value="SEND">
                  <span className="button_top ">
                    <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <p>Send</p>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bipin Kalakheti,
          <br />
          Canada,
          <br />
          265 Donlands avenue <br />
          Toronto, Ontario <br />
          <span>bipinkalakheti7@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[43.68831932185513, -79.34027664103503]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.68831932185513, -79.34027664103503]}>
              <Popup>Bipin lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
