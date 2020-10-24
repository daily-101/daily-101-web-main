import React from "react";
import Header from "./View/HeaderView.js";
import Main1 from "./MainView/View1.js";
import Main2 from "./MainView/View2.js";
import Main3 from "./MainView/View3.js";
import Main4 from "./MainView/View4.js";
import Login from "./View/LoginView.js";

function App() {
  return (
    <div>
      <Header />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Login />
    </div>
  );
}

export default App;
