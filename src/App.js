import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { ContainerWrapper } from "./components/ContainerWrapper/ContainerWrapper";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ContainerWrapper />
      </div>
    </Provider>
  );
}
export default App;
