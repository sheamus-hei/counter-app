import React from "react";

export default function Item({
  item = "",
  value = 0,
  addItem,
  subtractItem
}) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "lightgray",
    borderRadius: 10,
    alignItems: "center", 
    justifyContent: "center",
    padding: 20,
    margin: 20,
    flexWrap: "wrap",
    textTransform: "capitalize"
  }
  return (
      <li style={cardStyle}>
          <span className="badge m-2 badge-" style={{ fontSize: 24 }}>
            {item}
          </span>
        <div>
          <span className="badge m-2 badge-" style={{ fontSize: 24, width: 50 }}>
            {value}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => addItem(item)}
          >
            <i className="fa fa-plus-circle" aria-hidden="true" aria-label="plus"/>
          </button>
          <button
            className="btn btn-info m-2"
            onClick={() => subtractItem(item)}
            disabled={value === 0 ? "disabled" : ""}
          >
            <i className="fa fa-minus-circle" aria-hidden="true" aria-label="minus" />
          </button>
        </div>
      </li>
  );
}
