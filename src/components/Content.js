import React from "react";
import { useState } from "react";

function Content(){

    let [data, setState] = useState({
        id: 12712,
        name: "mukul",
        company: "Internshala",
        ctc : 5.4,
    });
    
    function update(){

        const obj = {
            id: 754,
            name: "kriti",
            company: "Entigrity",
            ctc : 3.2,
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
            <button onClick={update}>
                Click Me
            </button>
        </div>
    );
}

export default Content;