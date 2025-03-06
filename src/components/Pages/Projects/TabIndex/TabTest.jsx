import React from "react";
import TabIndex from "./TabIndex";

function RandomComponent() {
  return <li>Some random Component</li>;
}

function NewX() {
  return <p>New Component</p>;
}

const TabTest = () => {
  const tabs = [
    { label: "Tab 1", content: <p>This is content for tab 1</p> },
    { label: "Tab 2", content: <p>This is content for tab 2</p> },
    {
      label: "Tab 3",
      content: (
        <ul>
          <RandomComponent />
        </ul>
      ),
    },
    { label: "Tab 4", content: <NewX /> },
  ];

  function handleChange(currentTab) {
    console.log("Current Tab:", currentTab);
  }

  return <TabIndex tabsContent={tabs} onChange={handleChange} />;
};

export default TabTest;
