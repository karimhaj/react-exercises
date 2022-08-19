import { useState, useEffect } from "react";

export function useGithubUser(name){
    const [username, setUsername] = useState({});

    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(res => res.json())
        .then(data=> setUsername(data))
    },[name])

    return username
}