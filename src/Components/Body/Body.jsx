import React from 'react'
import Track from '../Track Card/Track'
import "./Body.css"

function Body() {
    return (
        <div className='body-main'>
            <div className="body-header">
                Robo Tracker
            </div>
            <div className="body-body">
                <Track title={"Before Drop"} />
                <Track title={"After Drop"} />
            </div>
        </div>
    )
}

export default Body