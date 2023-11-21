import React from 'react'
import "../styles/subhero.css"

const SubHero = ({subHeroTitle,subHeroText,subHeroButtonText}) => {
  return (
    <div className='subhero'>

        <div className="subhero-box">
             <div className="subhero-title">
             {subHeroTitle}
             </div>
             <div className="subhero-elements">
              <p>
                {subHeroText}
              </p>
             </div>
             <div className="subhero-button-box">
                <button className='subhero-button'>{subHeroButtonText}</button>
             </div>
        </div>

    </div>
  )
}

export default SubHero