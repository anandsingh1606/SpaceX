import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import LaunchesContainer from "./modules/Launches/Launches.container";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LaunchesContainer/>
      </div>
    </Provider>
  );
}

export default App;
