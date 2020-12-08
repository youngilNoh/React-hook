import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return { value };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div className="App">
      <h1>useInput</h1>
      <input placeholder="Name" value={name.value} />
    </div>
  );
};

export default App;
