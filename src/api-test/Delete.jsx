import { getAllByDisplayValue } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

function Delete(){

    const [data, setData] = useState([]);
    
    function getList(){
        fetch('http://localhost:5000/students').then((response)=>{
            response.json().then((result)=>{
                setData(result);
            });
        });
    }

    function deleteStudent(sid){
        fetch(`http://localhost:5000/students/${sid}`, {
            method:"DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resp)=>{
            return resp.json();
        }).then((result)=>{
            console.log(result);
            getList();
        });
    }

    useEffect(()=>{
        getList();
    },[]);

    return(
        <div>
            <Table striped bordered hover size='sm'>
                <tbody>
                {
                    data.map((item)=>{
                        return (<tr key={item.id} >
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.marks}</td>
                            <td><Button variant="danger" onClick={(e)=>deleteStudent(item.id)} >Delete</Button></td>
                        </tr>);
                    })
                }
                </tbody>
            </Table>
        </div>
    );
}

export default Delete;