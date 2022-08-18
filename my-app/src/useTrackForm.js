import { useEffect } from "react";
import { useState } from "react";

export default function useTrackForm(username1,password1){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        setUsername(username1)
        setPassword(password1)
    }, [username1, password1])
    
    return{username, password}
}
