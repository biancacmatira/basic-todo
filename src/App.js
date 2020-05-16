import React from "react";
import "./App.css";

import ToDo from "./components/ToDo";
import List from "./components/List";

import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/Reducer";

const store = createStore(Reducer);

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <p className="mainHead">THINGS TO DO!</p>
        <ToDo />
        <List />
      </div>
    </Provider>
  );
}

export default App;
