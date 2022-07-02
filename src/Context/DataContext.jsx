import React, { useState } from "react";
import axios from "axios";
import CreateContext from "./CreateContext";


function DataContext(props) {

    const host = process.env.REACT_APP_URL;

    const [beforedetails, setBeforeDetails] = useState([]);
    const fetchBefore = async () => {
        await axios.get(`${host}/before`)
            .then((res) => {
                const data = res.data;
                setBeforeDetails(data);
            })
    };
    const [afterdetails, setAfterDetails] = useState([]);
    const fetchAfter = async () => {
        await axios.get(`${host}/after`)
            .then((res) => {
                const data = res.data;
                setAfterDetails(data);
            })
    };


    return (
        <CreateContext.Provider value={{ beforedetails, fetchBefore, afterdetails, fetchAfter }}>
            {props.children}
        </CreateContext.Provider>
    );
}

export default DataContext