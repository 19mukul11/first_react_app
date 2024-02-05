import { useState, useEffect } from "react";

function UseEffect() {
    
    let [data, setData] = useState(0);

    useEffect(()=>{
        console.log("USeEffect called !");
    });

    return(
        <div>
            <h1>Use Effect Demo  Data :{data}</h1>
            <button onClick={()=>setData(data+2)}>Update Data</button>
        </div>
    );
}


export default UseEffect;