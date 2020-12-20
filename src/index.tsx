import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import JSONPretty from 'react-json-pretty';
import Form from './components/Form';
import './index.scss';

const JSONPrettyMon = require('react-json-pretty/dist/monikai');

const App = () => {
  const [data, setData] = useState(null);
  return (
    <div className="app">
      <h1>JSON Parser</h1>
      <Form setData={setData} />
      <JSONPretty data={data} theme={JSONPrettyMon} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
