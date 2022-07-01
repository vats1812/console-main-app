import * as React from 'react';
import "./Track.css";

function Track({title}) {
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

                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
                            <div className='tbl-row'>
                                <div className='tbl-body'>
                                    1

                                </div>
                                <div className='tbl-body'>
                                    Orange
                                </div>
                                <div className='tbl-body'>
                                    5
                                </div>
                            </div>
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