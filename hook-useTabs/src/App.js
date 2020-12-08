import React, { useState } from "react";

const content = [
  {
    key: "1",
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    key: "2",
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>useTabs</h1>
      {content.map((section, index) => (
        <button key={section.key} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
