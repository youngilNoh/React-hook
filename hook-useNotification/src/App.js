import React, { useState, useEffect, useRef } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification("Can I steal your kimchi?", {
    body: "I love kimchi dont you",
  });
  return (
    <div>
      <h1>useNotification</h1>
      <button onClick={triggerNotif}>Hello</button>
    </div>
  );
};

export default App;
