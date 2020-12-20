import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import Output from "./components/Output";
import './index.scss'

const App = () => (
    <div className="app">
      <h1>JSON Parser</h1>
      <Form/>
      <Output/>
    </div>
);

ReactDOM.render(
    <App />,
  document.getElementById("app")
);