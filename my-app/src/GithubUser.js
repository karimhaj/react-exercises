import { useGithubUser } from "./useGithubUser";

export function GithubUser({name}){
    const username = useGithubUser(name)

    return(<div>
        <h2>{username.name}</h2>
        <h3>{username.id}</h3>
        <h3>{username.login}</h3>
        <img src={username.avatar_url} alt="github profile pic" />
        </div>)
}