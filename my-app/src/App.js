import { Route, Routes, Link } from "react-router-dom";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
        <h1>My awesome app!</h1>
        <Link to="/">Home</Link>
        <Link to="/users/:username">githubUser</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Erik"/>} />
        <Route path="users/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default App;
