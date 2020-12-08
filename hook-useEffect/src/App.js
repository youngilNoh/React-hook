import React, { useState, useEffect } from "react";

const App = () => {
  const sayHello = () => console.log("Hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  const [bNumber, setBnumber] = useState(0);
  // 첫번 쨰 인자: 실행 될 함수, 두번 째 인자: 변경될 기준(dependency)
  useEffect(sayHello, [number, aNumber]);
  return (
    <div className="App">
      <h1>useEffect</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
      <button onClick={() => setBnumber(bNumber + 1)}>{bNumber}</button>
    </div>
  );
};

export default App;
