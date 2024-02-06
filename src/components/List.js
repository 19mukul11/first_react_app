import Student from "./Student";

function List() {

    const list = ['mukul','rohit','virat','kriti'];
    const students = [
        {
            name : "mukul",
            email : "mukul@gmail.com",
            age: 23,
        },
        {
            name : "rohit",
            email : "rohit@gmail.com",
            age: 34,
        },
        {
            name : "virat",
            email : "virat@gmail.com",
            age: 34,
        },
    ];

    

    return(
        <div>
            <h3>Rendering Lists</h3>
            {
                students.map(function(student, index){
                    return(
                        <div key={index}>
                            <Student data={student}/>
                        </div>
                    );
                })
            }

        </div>
    );
}

export default List;