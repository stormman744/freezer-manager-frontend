import React from "react";
import "react-calendar/dist/Calendar.css";
import { Provider } from "react-redux";
import "./App.css";
import { ContainerWrapper } from "./components/ContainerWrapper/ContainerWrapper";
import { Navbar } from "./components/Navbar/Navbar";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <ContainerWrapper />
      </div>
      <div id="modal-root"></div>
    </Provider>
  );
}
export default App;
