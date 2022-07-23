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
        <Age age = {this.props.age}/>
        </div>
        )

    }
}



export class Age extends React.Component{
    render(){
        return <div>
            {this.props.age > 18
            ? <p> your age is {this.props.age}</p>
            : false
            }
            </div>
        }
}

Welcome.defaultProps = {
    name: 'Homie'
}; 