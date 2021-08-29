import React from "react";
import Item from "./Item.js";

export default function ItemsList({
  items = [],
  handleReset,
  addItem,
  subtractItem
}) {

  return (
    <div>
      <button
        className="btn btn-success m-2"
        onClick={handleReset}
        disabled={items.length === 0 ? "disabled" : ""}
      >
        <i className="fa fa-refresh" aria-hidden="true" />
      </button>
      <ul className="list row">
        {Object.keys(items).map((item, index) => (
          <Item
            key={index}
            item={item}
            value={items[item]}
            addItem={addItem}
            subtractItem={subtractItem}
          />
        ))}
      </ul>
    </div>
  );
}
