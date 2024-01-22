import React from "react";

function Content(){
    let name = 'Mukul Mahajan';

    function call(){
        name = "Internshala";
        alert(name);
    }
    function callagain(){
        // name = "Internshala";
        alert(name);
        console.log(name);
    }

    return (
        <div>
            <button onClick={call}>
                Click Me
            </button>
            <button onClick={callagain}>
                Click Me again
            </button>
            <h2>{name}</h2>
        </div>
    );
}

export default Content;