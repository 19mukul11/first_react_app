function Student(props){

    const student = props.data;
    return(
        <div>
            <h4>{student.name} {student.email} {student.age}</h4>
        </div>
    );
}

export default Student;