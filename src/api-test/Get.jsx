import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

function Get(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/students').then((response)=>{
            response.json().then((result)=>{
                console.log(result);
                setData(result);
            });
        });
    },[]);
    
    return(
        <div>
            <h2>Testing Get request</h2>
            <Table striped bordered hover size='sm'>
                <tbody>
            {
                data.map((item)=>{
                    return (<tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.city}</td>
                        <td>{item.marks}</td>
                    </tr>);
                })
            }
            </tbody>
            </Table>
        </div>
    );
}
export default Get;