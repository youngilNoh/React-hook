import React, { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(3);
  const faseInP = useFadeIn(4, 3);
  return (
    <div className="App">
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...faseInP}>lorem ipsum</p>
    </div>
  );
};

export default App;
