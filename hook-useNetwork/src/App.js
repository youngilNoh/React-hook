import React, { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(window.navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(window.navigator.onLine);
    }
    setStatus(window.navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>useNetwork</h1>
      <p>{onLine ? "Online" : "Offline"}</p>
    </div>
  );
};

export default App;
