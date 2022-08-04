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
                <Login onLogin={this.state} />
            </div>
        )
    }
}

export class Login extends React.Component{

    state= {
        username: "",
        password: "",
        remember: false
    }

    handleUsernameInputChange = (event) =>{
        let name = event.target.name;

        this.setState({
            [name]: event.target.value,
            compiled: this.state.username !== "" && this.state.password !== "" ? true : false
        })
    }

    onLogin = () =>{
       return console.log(this.state)
    }

    handleCheckbox = (event) =>{
        const name = event.target.name 
        const checked = event.target.checked

        this.setState({
            [name]: checked,
        })
    }

    handleResetButton = () =>{
        this.setState({
            username: "",
            password: "",
            remember: false   
        })
    }


    render(){

        const buttonStyle ={
            backgroundColor: this.state.password.length<8 ? "rgb(255,0,0)" : "rgb(0,255,0)",
        }
        
        return (
            <div>

                <h2>LOGIN</h2>
                <input type= "text" name= "username" value={this.state.username} onChange={this.handleUsernameInputChange}/>
                <input type= "password" name= "password" value={this.state.password} onChange={this.handleUsernameInputChange} />
                <input type= "checkbox" name= "remember" checked={this.state.remember} onChange={this.handleCheckbox}  />
                <button disabled={!this.state.compiled} onClick={this.onLogin} style={buttonStyle}>Login</button>
                <button type="reset" name="reset" onClick={this.handleResetButton}>reset</button>
            </div>
        )
    }
}