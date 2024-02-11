import { useLocation, useParams } from "react-router-dom";

function User(){

    const {name, city} = useParams();
    const data = useLocation();
    console.log(data);
    return(
        <div>
            <h2>Hi this is {name} Page</h2>
            <h2>City {city} Page</h2>
        </div>
    );
}

export default User;
