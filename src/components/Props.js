import React from 'react';

class  Props extends React.Component{

    render(){
        return(
                <div>
                    <h1>Hello {this.props.name} Props</h1>
                </div>
        );
    }
    
}

export default Props;