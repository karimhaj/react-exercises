import React from "react";
import { useState } from "react";
import useTrackForm from "./useTrackForm";

export function ControlledForm (){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false
    })

    const {username, password} = useTrackForm(data.username, data.password);
    console.log(`your username is ${username} and your password is ${password}`)

    const handleInputChange =(event)=>{
        setData({
            ...data, [event.target.name]: event.target.type === "checkbox" ? 
            event.target.checked : event.target.value
        })
    }


    return (<form>
                <h3>My controlled form</h3>
                <input onChange={handleInputChange} type= "text" name= "username" value={data.username}  />
                <input onChange={handleInputChange} type= "paassword" name= "password" value={data.password} />
                <input onChange={handleInputChange} type= "checkbox" name= "remember" value={data.remember} />
                </form>)
}