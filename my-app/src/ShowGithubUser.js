import { Link, useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  const {username}= useParams()
  return (
    <div>
      <GithubUser name={username}/>
      <Link to="/">Back</Link>
    </div>
  );
}