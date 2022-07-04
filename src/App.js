import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Board } from "./components/container/Container"
function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
