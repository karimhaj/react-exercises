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

        {/* {
        this.props.age > 18 && this.props.age < 65 && this.props.name === 'John'
        ?<Age age = {this.props.age}/>
        : <p>age is not between 19 and 64 or the name is not John</p>
        } */}

        </div>
        )

    }
}



export class Age extends React.Component{
    render(){
        return <div>
            {this.props.age > 18
            ? <p> your age is {this.props.age}</p>
            : <p> You are very young! </p>
            }
            </div>
        }
}

Welcome.defaultProps = {
    name: 'john'
}; 

