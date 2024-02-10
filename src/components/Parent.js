import Child from './Child';
import { useState } from 'react';

function Parent(){
    const [name, setName] = useState("Mukul Parent");
    
    function parentFunction(data){
        setName(data);
    }
    return(
        <div>
            <h1>Parent Component {name}</h1>
            <Child data={parentFunction} />
        </div>
    );
}
export default Parent;