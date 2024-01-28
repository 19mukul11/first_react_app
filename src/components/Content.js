import React from "react";
import { useState } from "react";

function Content(props){

    let [data, setState] = useState({
        id: 12712,
        name: "mukul",
        company: "Internshala",
        ctc : 81.6,
    });
    
    function update(){
        const obj = {
            id: 754,
            name: "kriti",
            company: "Entigrity",
            ctc : 50.65,
        };
        setState(obj);
    }

    return (
        <div>
            <h1>{data.id}</h1>
            <h1>{data.name}</h1>
            <h1>{data.company}</h1>
            <h1>{data.ctc}</h1>
            <br />
            <button onClick={props.data}>
                Click Me
            </button>
        </div>
    );
}

export default Content;