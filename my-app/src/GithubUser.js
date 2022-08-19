import { useGithubUser } from "./useGithubUser";

export function GithubUser({name}){
    const {username , error, loading } = useGithubUser(name)

    return(<>
        {loading && <h1>Loading...</h1>}
        {error && <h1>An error has occurred</h1>}
        {username && <div>
                <h2>{username.name}</h2>
                <h3>{username.id}</h3>
                <h3>{username.login}</h3>
                <img src={username.avatar_url} alt="github profile pic" />
                </div>}
        </>)
}
