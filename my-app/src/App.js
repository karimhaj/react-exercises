import { Route, Routes, Link } from "react-router-dom";
import { Counter } from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
        <h1>My awesome app!</h1>
        <Link to="/">Home</Link>
        <Link to="/users/:username">githubUser</Link>
        <Link to="/counter">counter</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Erik"/>} />
        <Route path="users/:username" element={<ShowGithubUser />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<div><p>Page not found</p><Link to="/">Go home</Link></div>}/>
      </Routes>
    </div>
  );
}

export default App;
