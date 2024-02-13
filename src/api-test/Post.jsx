import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function Post(){

    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [marks,setMarks] = useState("");

    function submitForm(e){
        e.preventDefault();
        const data = {
            "name": name,
            "city": city,
            "marks": marks
        }

        fetch("http://localhost:5000/students", {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }).then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                setName("");
                setCity("");
                setMarks("");
                alert("Student has been saved Successfully !");
            });
        });
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                <input type="text" placeholder="City" name="city" value={city} onChange={(e)=>setCity(e.target.value)} /> <br /> <br />
                <input type="number" placeholder="Marks" name="marks" value={marks} onChange={(e)=>setMarks(e.target.value)} /> <br /> <br />
                <Button type="submit" variant="primary">Save Student</Button>
            </form>
        </div>
    );
}
export default Post;