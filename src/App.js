import React, { useState } from "react";
import NavBar from "./components/NavBar.js";
import ItemsList from "./components/ItemsList.js";

export default function App () {
  const [items, setItems] = useState({
    apples: 0,
    bananas: 0,
    pears: 0,
    oranges: 0
  })

  const addItem = item => {
    const updatedItems = {...items};
    updatedItems[item]++;
    setItems(updatedItems);
  };

  const subtractItem = item => {
    const updatedItems = {...items};
    if (items[item]) {
      updatedItems[item]--;
    }
    setItems(updatedItems);
  };

  const handleReset = () => {
    const updatedItems = {...items};
    for (const key in updatedItems) {
      updatedItems[key] = 0;
    }
    setItems(updatedItems);
  };

  return (
    <div>
      <NavBar
        totalItems={Object.entries(items).filter(entry => entry[1] > 0).length}
      />
      <main className="container">
        <ItemsList
          items={items}
          handleReset={handleReset}
          addItem={addItem}
          subtractItem={subtractItem}
        />
      </main>
    </div>
  );

}

