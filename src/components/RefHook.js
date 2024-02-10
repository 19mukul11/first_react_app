import { useRef } from "react";

function RefHook(){
    
    const inputRef = useRef(null);

    function handleClick(){
        console.log(inputRef.current.value);
        inputRef.current.style.backgroundColor='Red';
        inputRef.current.style.display = 'none';
        inputRef.current.focus();
    }

    return(
        <div>
            <input type="text" placeholder="Enter text" ref={inputRef} />
            <br /><br />
            <button onClick={handleClick}>Test UseRef</button>
        </div>
    );
}
export default RefHook;