import React, { Component } from "react";
import NavBar from "./components/NavBar.js";
import ItemsList from "./components/ItemsList.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar
          totalItems={0}
        />
        <main className="container">
          <ItemsList />
        </main>
      </div>
    );
  }
}

export default App;

