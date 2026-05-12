import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

return(
  <div className>
    <h1>Counter App</h1>
    <p>Count: {count}</p>
    <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
)}
export default App;