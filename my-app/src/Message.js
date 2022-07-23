import React from "react";

export class Message extends React.Component {
    render(){
       return <p>What a beautiful day!</p>
    }
}

export class Welcome extends React.Component {
    render(){
        return (
            <div>
        <p>welcome {this.props.name}!</p>

        {
        this.props.age
        ?<Age age = {this.props.age}/>
        : <p>age is not present</p>
        }

        </div>
        )

    }
}



export class Age extends React.Component{
    render(){
        return <div>
            {this.props.age > 18
            ? <p> your age is {this.props.age}</p>
            : <p> Your age is lower than 18 </p>
            }
            </div>
        }
}

Welcome.defaultProps = {
    name: 'Homie'
}; 


// Conditional Rendering - 02
// Modify the Welcome component so that the Age component is rendered only if the age prop is present.

// {
//     this.props.age in Age 
//     ?  <Age age = {this.props.age}/>
//     : false
// }  