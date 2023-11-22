import React from 'react'
import "../styles/projectcard.css"
const ProjectCard = ({cardImage,cardName,cardText}) => {
  return (
    <div className='projectcard'>
      <img src={`${cardImage}`} className='projectcard-image' />
      <div className="projectcard-details">
        <div className="projectcard-title">{cardName}</div>
        <div className="projectcard-text">
          {cardText}
        </div>
      </div>

    </div>
  )
}

export default ProjectCard