import React from "react";

class Content2 extends React.Component {

    constructor(){
        super();
        this.state = {
            id: 19,
            data : "Mukul",
        };
    }

    update = () => {
        if(this.state.id == 19){
            this.setState({
                id: 22,
                data: "Kriti",
            });
        }else{
            this.setState({
                data: "Mukul",
                id:19,
            });
        }
        
    }

    render(){
        return (
            <div>
                <h2>Content 2 is {this.state.data}  Class Component</h2>
                <button onClick={this.update}>Click Me</button>
            </div>
        );
    };
}

export default Content2;