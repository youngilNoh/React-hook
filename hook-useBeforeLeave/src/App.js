import React, { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    // 마우스가 위쪽으로 브라우저를 벗어나면 액션 진행
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => {
      document.removeEventListener("mouseleave", handle);
    };
  }, []);

  if (typeof onBefore !== "function") {
    return;
  }
};

const App = () => {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>useBeforeLeave</h1>
    </div>
  );
};

export default App;
