import React from "react";

class LifeCycle extends React.Component {

    constructor(){
        super();
        console.log("Constructor");
        this.state = {
            name : 'mukul'
        }
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    componentDidUpdate(){
        console.log("Component did Update");
    }

    render(){
        console.log("Render");
        return(
            <div>
                <h1>Lifecycle Component {this.state.name}</h1>
                <button onClick={()=>this.setState({name:'Bhopal'})}>Click Me</button>
            </div>
        );
    }
}

export default LifeCycle;