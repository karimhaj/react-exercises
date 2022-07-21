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

Welcome.defaultProps = {
    name: 'Homie'
}; 

export class Age extends React.Component{
    render(){
        return <p>Your age is {this.props.age}</p>
    }
}