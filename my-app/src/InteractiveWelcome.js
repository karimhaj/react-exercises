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

export class Login extends React.Component{
    render(){
        return (
            <div>
                <input type= "text" name= "username" value= ""  />
                <input type= "paassword" name= "password" value= ""  />
                <input type= "checkbox" name= "remember" value= ""  />
            </div>
        )
    }
}