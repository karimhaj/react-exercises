import React, { useEffect, useState } from "react";

export function GithubUser({name}){
    const [username, setUsername] = useState({});

    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}`)
        .then(res => res.json())
        .then(data=> setUsername(data))
    },[name])

    return(<div>
        <h2>{username.name}</h2>
        <h3>{username.id}</h3>
        <h3>{username.login}</h3>
        <img src={username.avatar_url} alt="github profile pic" />
        </div>)
}