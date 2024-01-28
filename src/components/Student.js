function Student(students){

    console.log(students.data);
    return(
        <div>
            <h2 style={{backgroundColor: 'green'}}>
                Hello {students.data}
            </h2>
        </div>
    );
}

export default Student;