import { useState } from "react";

function Child(props){
    const [name,setName] = useState("Mukul Child");
    return(
        <div>
            <h3>Child Component : {name} </h3>
            <button onClick={()=>props.data(name)}>Click Me</button>
        </div>
    );
}
export default Child;