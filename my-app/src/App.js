import { Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="Erik"/>} />
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </div>
  );
}

export default App;



