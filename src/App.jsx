import React from "react";
import { HashRouter, Route } from "react-router-dom";
import BingoPage from "./pages/BingoPage";
import './app.css';

function App() {
  return (
    <div>
      <HashRouter basename='/'>
        <Route exact path="/" component={BingoPage} />
      </HashRouter>
    </div>
  );
}

export default App;
