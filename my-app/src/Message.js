import React from "react";

export class Message extends React.Component {
    render(){
       return <p>What a beautiful day!</p>
    }
}

export class Welcome extends React.Component {
    render(){
        return <p>welcome {this.props.name}!</p>
    }
}

Welcome.defaultProps = {
    name: 'Homie'
}; 