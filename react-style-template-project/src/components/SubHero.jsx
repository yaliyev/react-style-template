import React from 'react'
import "../styles/subhero.css"

const SubHero = ({subHeroMiniTitle,subHeroTitle,subHeroText,subHeroButtonText,children}) => {
  return (
    <div className='subhero'>

        <div className="subhero-box">
          <div className='subhero-mini-title'>
            {subHeroMiniTitle}
          </div>
             <div className="subhero-title">
             {subHeroTitle}
             </div>
             <div className='subhero-text'>
             {subHeroText}
             </div>
             <div className="subhero-elements">
              
                

                {children}
              
             </div>
            
        </div>

    </div>
  )
}

export default SubHero