import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
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
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>useClick</h1>
    </div>
  );
};

/* useRef() */
// const App = () => {
//   const potato = useRef();
//   setTimeout(() => {
//     potato.current?.focus();
//   }, 5000);
//   return (
//     <div className="App">
//       <h1>useClick</h1>
//       <input ref={potato} placeholder="la" />
//     </div>
//   );
// };
/* useRef() */

export default App;
