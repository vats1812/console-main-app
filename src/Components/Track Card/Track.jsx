import React, {  useEffect } from 'react';
import "./Track.css";

function Track({ details, method, title }) {


    useEffect(() => {
        method();
    });
    return (
        <div>
            <div className="track-main">
                <div className="track-header">
                    {title}
                </div>
                <div className="track-body">
                    <div className="track-table">

                        <div className='tbl-row'>
                            <div className='tbl-head'>
                                Parcel No.

                            </div>
                            <div className='tbl-head'>
                                Destination
                            </div>
                            <div className='tbl-head'>
                                Index Station
                            </div>
                        </div>
                        <div className="track-table-body">
                            {details.sort((a, b) => new Date(b.date) - new Date(a.date))
                                .map((detail) => {
                                    return (
                                        <div className='tbl-row' key={detail._id}>
                                            <div className='tbl-body'>
                                                {detail.parcelno}
                                            </div>
                                            <div className='tbl-body'>
                                                {detail.destination}
                                            </div>
                                            <div className='tbl-body'>
                                                {detail.indexstation}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                    <div className="track-timeline">
                        <h3>Timeline</h3>
                        <ul>
                            <li>
                                Starting
                            </li>
                            <li>
                                Drop
                            </li>
                            <li>
                                Return
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Track;