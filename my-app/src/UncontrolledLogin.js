import React from 'react';


export class UncontrolledLogin extends React.Component{

    handleUncontrolledForm = (event) =>{
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username, 
            password,
            remember
        }
        )
    }

    componentDidMount(){
        this.usernameInput.focus();
      }

      

    render(){
        return(
            <div>
                <h2>UNCONTROLLED LOGIN</h2>
            
            <form onSubmit={this.handleUncontrolledForm}>
                <input type= "text" name= "username"  ref={(input) => { this.usernameInput = input; }} />
                <input type= "password" name= "password" />
                <input type= "checkbox" name= "remember" />
                <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}