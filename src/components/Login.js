import { useState } from "react";

function Login(){

    const [name,setName] = useState('');
    const [pwd,setPwd] = useState('');
    const [nameError,setNameError] = useState(false);
    const [pwdError,setPwdError] = useState(false);

    function validateName(e){
        const name = e.target.value;
        if(name.length >= 6){
            setNameError(false);
            setName(name);
        }else{
            setNameError(true);
        }
    }

    function validatePwd(e){
        const pwd = e.target.value;
        if(pwd.length >= 8){
            setPwdError(false);
        }else{
            setPwdError(true);
        }
    }

    function submitForm(e){
        e.preventDefault();
        if(name != '' && !nameError && pwd != '' && !pwdError){
            alert("Form submitted");
        }
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Enter Username" value={name} onChange={(e)=>setName(e.target.value)} onBlur={(e)=>validateName(e)}  /> <br /> 
                {nameError ? <span> Required: Enter a valid name </span> : ''}
                <br />
                <input type="text" placeholder="Enter password" value={pwd} onChange={(e)=>setPwd(e.target.value)} onBlur={(e)=>validatePwd(e)} /> <br />
                {pwdError ? <span> Required: Enter a valid password </span>: ''}
                 <br />
                <button type="submit">Login Now</button>
            </form>       
        </div>
    );
}

export default Login;