import React, { Fragment } from "react";
import "./scss/App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MenuLeft from "./components/MenuLeft/MenuLeft";
import ContentRight from "./components/ContentRight/ContentRight";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MenuLeft />
        <ContentRight />
      </div>
    </BrowserRouter>
  );
}

export default App;
