import React from 'react'
import '../styles/hero.css'
const Hero = ({heroTitle,heroMediumTitle,heroText,heroButtonText}) => {
    return (
        <div className='hero'>

            <div className="hero.hero-content">
                <div className="hero-title">
                    {heroTitle}
                </div>
                <div className="hero-medium-title">
                    {heroMediumTitle}
                </div>
                <div className="hero-text">
                    {heroText}
                </div>
                <div className="hero-button-box">
                <button className='hero-button'>
                      {heroButtonText}    
                </button> 
                </div>
                
            </div>
            
        </div>

    )
}

export default Hero