import React from 'react'
import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
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
    if (currentTime >= totalAnimationTime * 800) {
      element.classList.remove('text-animate-hover')
      // Trigger a reflow in between removing and adding the class back
      void element.offsetWidth
      element.classList.add('text-animate-hover')
    }
  }

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx} `}
          onMouseEnter={handleMouseEnter}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
export default AnimatedLetters
