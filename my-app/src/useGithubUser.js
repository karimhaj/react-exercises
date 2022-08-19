import { useState, useEffect } from "react";

export function useGithubUser(name){
    const [username, setUsername] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(()=>{
        setLoading(true);
        setError(false)
        fetch(`https://api.github.com/users/${name}`)
        .then(res => res.json())
        .then(data=> setUsername(data))
        .catch(error => setError(true), setUsername(false))
        setLoading(false)
    },[name,error])

    return {
        username,
        error,
        loading
    }
}