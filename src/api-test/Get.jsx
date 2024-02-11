import { useEffect, useState } from "react";

function Get(){

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://cat-fact.herokuapp.com/facts').then((response)=>{
            response.json().then((result)=>{
                // console.log(result[0].status);
                setData(result);
            });
        });
    }, []);
    
    return(
        <div>
            <h2>Testing Get request</h2>
            <table border={3} cellSpacing={5}>
            {
                data.map((item)=>{
                    return (<tr>
                        <td>{item._id}</td>
                        <td>{item.text}</td>
                        <td>{item.user}</td>
                    </tr>);
                })
            }
            </table>
        </div>
    );
}
export default Get;