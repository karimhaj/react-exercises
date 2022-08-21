import useSWR from "swr";

const fetcher = url =>fetch(url).then(response=> response.json())
export function useGithubUser(name){
    const {data, error, mutate} = useSWR(name ? `https://api.github.com/users/${name}` : null, fetcher)


    function handleRefreshUser(){
        mutate()
    }

    return {
        user: data, 
        error, 
        isLoading: !data && !error,
        onRefresh: handleRefreshUser
    }
}