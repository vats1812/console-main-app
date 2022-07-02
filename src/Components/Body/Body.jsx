import React, { useContext } from 'react';
import CreateContext from '../../Context/CreateContext';
import Track from '../Track Card/Track'
import "./Body.css"

function Body() {
    const context = useContext(CreateContext);
    const { beforedetails, fetchBefore, afterdetails, fetchAfter } = context;

    return (
        <div className='body-main'>
            <div className="body-header">
                Robo Tracker
            </div>
            <div className="body-body">
                <Track title={"Before Drop"} details={beforedetails} method={fetchBefore} />
                <Track title={"After Drop"} details={afterdetails} method={fetchAfter} />
            </div>
        </div>
    )
}

export default Body