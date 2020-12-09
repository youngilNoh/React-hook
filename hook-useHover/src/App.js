import React, { useState, useEffect, useRef } from "react";

const useHover = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseover", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseover", onClick);
      }
    };
  }, []);

  if (typeof onClick !== "function") {
    return;
  }

  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>useHover</h1>
    </div>
  );
};

export default App;
