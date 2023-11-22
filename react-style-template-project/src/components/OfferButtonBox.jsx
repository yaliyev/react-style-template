import React from 'react'
import "../styles/subhero.css"

const OfferButtonBox = ({subHeroButtonText}) => {
  return (
    <div className="subhero-button-box">
    <button className='subhero-button'>{subHeroButtonText}</button>
 </div>
  )
}

export default OfferButtonBox