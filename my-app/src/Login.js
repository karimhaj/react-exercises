import React, { useState } from "react";

export function Login (props){
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

    function handleInputChange (event){
       const {name, type, value, checked} = event.target

       setData({
        ...data,
        [name]: type === 'checkbox' ? checked : value
       })
    }

    function handleLogin(event){
        event.preventDefault()
        console.log(data)
    }
 

    return(<form>
        <h1>Login</h1>
        <input onChange={handleInputChange} type="text" name="username" value={data.username} />
        <input onChange={handleInputChange} type="password" name="password" value={data.password}/>
        <input onChange={handleInputChange} type="checkbox" name="remember" value={data.remember}/>
        <button onClick={handleLogin}>Login</button>
        </form>)
}