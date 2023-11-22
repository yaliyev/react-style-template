import React from 'react'
import "../styles/service.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMobileScreen } from '@fortawesome/free-solid-svg-icons'
const Service = () => {
  return (
    <div className='service'>
        <div className='service-circle'>
        <FontAwesomeIcon style={{fontSize:'50px',color:'gray'}} icon={faMobileScreen} />
        </div>
        
        <div className="service-name">
            Responsive
        </div>
        <div className="service-text">
        Looks great on any screen size!
        </div>
    </div>
  )
}

export default Service