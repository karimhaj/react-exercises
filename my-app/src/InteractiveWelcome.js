import React from "react";
import { Welcome } from "./Message";

export class InteractiveWelcome extends React.Component{

    state ={ username: '' }
    
    handleUsernameInputChange = (event) =>{
        this.setState({
            username: event.target.value
        })
        return console.log(this.state);
    }

    render(){
        return (
            <div>
                <Welcome name={this.state.username}/>
                <input type= "text" name= "username" value={this.state.username} onChange={this.handleUsernameInputChange}/>
            </div>
        )
    }
}
