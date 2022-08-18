import React from "react"

export default class InteractiveWelcome extends React.Component{

    state = {
        username: '',
        password: '',
        checkbox: false,
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked

        this.setState({
            [name]: type === 'checkbox' ? checked : value // se(?) il mio type è di tipo checkbox userò checked, altrimenti(:) userò value

           
        })
    }

    render(){
        return(
            <div>

                <div>
                    <input name="username" value={this.state.username.value}/>
                    <input name="password" type='password' value={this.state.password.value}/>
                    <input name="checkbox" type="checkbox" value={this.state.checkbox.value}/>
                </div>

            </div>
        )
    }
}