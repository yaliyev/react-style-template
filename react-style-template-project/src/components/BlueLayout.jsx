import React from 'react'
import "../styles/bluelayout.css"

const BlueLayout = ({blueLayoutSubtitle,children}) => {
    return (
        <div className='bluelayout'>

            <div className="bluelayout-box">

                <div className="bluelayout-title">
                    Services
                </div>
                <div className="bluelayout-subtitle">
                    {blueLayoutSubtitle}
                </div>

                <div className="bluelayout-elements">
                    {children}
                   
                </div>

            </div>



        </div>
    )
}

export default BlueLayout