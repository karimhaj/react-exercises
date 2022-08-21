import { useGithubUser } from "./useGithubUser";

export function GithubUser({name}){
    const {user, error, isLoading} = useGithubUser(name)

    return(<div>
        {isLoading && <h3>Loading...</h3>}
        {error && <h3>an error has occurred</h3>}
        {user && <div>
        <h2>{user.name}</h2>
        <h3>{user.id}</h3>
        <h3>{user.login}</h3>
        <img src={user.avatar_url} alt="github profile pic" />   
        </div>}
        </div>)
}