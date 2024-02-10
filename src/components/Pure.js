import React from "react";

class Pure extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            data : 1,
        };
    }

    update = ()=>{
        this.setState({
            data : this.state.data+1,
        });
    }

    render(){
        console.log("rerednered...........");
        return(
            <div>
                <h4>Pure Component : {this.state.data}</h4>
                <button onClick={this.update}>Update state</button>
            </div>
        )
    }
}

export default Pure;