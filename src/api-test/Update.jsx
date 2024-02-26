import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

function Update(){

    const [id, setId] = useState("");
    const [name,setName] = useState("");
    const [city,setCity] = useState("");
    const [marks,setMarks] = useState("");
    const [data, setData] = useState([]);

    function submitForm(e){
        e.preventDefault();

        const data = {
            "name" : name,
            "city" : city,
            "marks" : marks 
        };

        fetch(`http://localhost:5000/students/${id}`, {
            method: "PUT",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }).then((response)=>{
            response.json().then((result)=>{
                getStudents();
            });
       });

        console.log(data);
    }

    function selectUser(id){
        console.log(id);
        fetch(`http://localhost:5000/students/${id}`).then((response)=>{
            response.json().then((result)=>{
                setId(result.id);
                setName(result.name);
                setCity(result.city);
                setMarks(result.marks);
            });
        });
    }

    function getStudents(){
        fetch("http://localhost:5000/students").then((response)=>{
            response.json().then((result)=>{
                setData(result);
            });
       });
    }

    useEffect(getStudents,[]);

    return(
        <div>
            <div id="table_div">
                <Table striped bordered hover size='sm'>
                    <tbody>
                        {
                            data.map((item)=>{
                                return(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.city}</td>
                                        <td>{item.marks}</td>
                                        <td><Button variant="success" size='sm' onClick={()=>selectUser(item.id)}>Update</Button></td>
                                    </tr>
                                ) 
                            })
                        }
                    </tbody>
                </Table>
            </div> 
            <br /><br />
            <div id="form_div">
                <form onSubmit={submitForm}>
                    <input type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                    <input type="text" placeholder="City" name="city" value={city} onChange={(e)=>setCity(e.target.value)} /> <br /> <br />
                    <input type="number" placeholder="Marks" name="marks" value={marks} onChange={(e)=>setMarks(e.target.value)} /> <br /> <br />
                    <Button type="submit" variant="primary">Save Student</Button>
                </form>
            </div>           
        </div>
    );
}

export default Update;