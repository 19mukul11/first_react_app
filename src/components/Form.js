import { useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        name:null,
        language:null,
        password:null,
        tnc:false,
    });

    function updateFormData(key,value){
        switch(key){
            case 'name':{
                setFormData({
                    name : value,
                    language : formData.language,
                    password: formData.password,
                    tnc: formData.tnc,
                });
                break;
            }
            case 'language':{
                setFormData({
                    name : formData.name,
                    language : value,
                    password: formData.password,
                    tnc: formData.tnc,
                });
                break;
            }
            case 'password':{
                setFormData({
                    name : formData.name,
                    language : formData.language,
                    password: value,
                    tnc: formData.tnc,
                });
                break;
            }
            case 'tnc':{
                setFormData({
                    name : formData.name,
                    language : formData.language,
                    password: formData.password,
                    tnc: value,
                });
                break;
            }
            default:
                break;
        }
    }

    function submitForm(e){
        e.preventDefault();
        if(formData.tnc){
            alert(formData.name + ' ' + formData.language + ' ' + formData.password);
        }else{
            alert("Fill agree the TnC !!");
        }
    }

    return(
        <div>
            <h2>{formData.name}</h2>
            <h2>{formData.password}</h2>
            <h2>{formData.language}</h2>
            <h2>{formData.tnc}</h2>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Name" value={formData.name} onBlur={(e)=>updateFormData('name',e.target.value)}/>  <br /> <br />
                <select value={formData.language} onBlur={(e)=>updateFormData('language',e.target.value)}>
                    <option value="">--Select Language--</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Javascript">Javascript</option>
                </select> <br /> <br />
                <input type="password" placeholder="Password" value={formData.password} onBlur={(e)=>updateFormData('password',e.target.value)} /> <br /> <br />
                <input type="checkbox" value={formData.tnc}  onBlur={(e)=>updateFormData('tnc',e.target.checked)} /> Agree Terms & Conditions <br /> <br />
                <button >Submit</button>
            </form>
        </div>
    );
}