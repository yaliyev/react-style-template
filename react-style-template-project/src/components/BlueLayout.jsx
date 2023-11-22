import React from 'react'
import "../styles/bluelayout.css"
import Service from './Service'
const BlueLayout = () => {
    return (
        <div className='bluelayout'>

            <div className="bluelayout-box">

                <div className="bluelayout-title">
                    Services
                </div>
                <div className="bluelayout-subtitle">
                    What we offer
                </div>

                <div className="bluelayout-elements">
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>

            </div>



        </div>
    )
}

export default BlueLayout