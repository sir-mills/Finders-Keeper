import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("not a color");

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>on click the button color is {color}</p>
        <br />
        <button onClick={() => setColor("red")}> red</button>
        <button onClick={() => setColor("blue")}> blue</button>
        <button onClick={() => setColor("yellow")}>yellow</button>
      </div>
    </>
  );
}

export default App;
