import { Link } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
  return (
    <div>
      <GithubUser name="karimhaj" />
      <Link to="/">Back</Link>
    </div>
  );
}