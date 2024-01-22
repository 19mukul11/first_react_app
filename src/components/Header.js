function Header() {
    return(
        <div id="header">
            <h2> THIS IS HEADER </h2>
        </div>
    );
}

function AdminHeader(){
    const admin = {
        name : "Mukul Mahajan",
        id : 1911, 
    }

    return(
        <div id="header">
            <h2> THIS IS ADMIN HEADER </h2>
            <h5>Admin {admin.id} : {admin.name}</h5>
        </div>
    );
}

export {Header, AdminHeader};