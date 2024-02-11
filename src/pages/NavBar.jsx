import { Link } from "react-router-dom";

function NavBar() {
    return(
        <>
            <Link to='/' >Home</Link> 
            <br />
            <Link to='/about'>About Us</Link>
            <br />
            <Link to='/services'>Services</Link>
        </>
    );
}
export default NavBar;