import { useMemo, useState } from "react"

function MemoHook(){

    const [state1,setState1] = useState(1);
    const [state2,setState2] = useState(10);

    const calculate = useMemo(()=>{
        console.log('calculating..........');
        return(state1 * 2);
    }, [state1]);

    return(
        <div>
            <h3>use Memo using S1 = {state1}</h3>
            <h3>use Memo using S2 = {state2}</h3>
            <h3>Product is  {calculate}</h3>
            <button onClick={()=>setState1(state1+1)}>Update State 1</button>
            <button onClick={()=>setState2(state2+10)}>Update state 2</button>
        </div>
    );
}

export default MemoHook;