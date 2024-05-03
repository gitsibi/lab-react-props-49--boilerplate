import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataComponent from "./components/DataComponent";
import App from './App';
import AppClass from './AppClass';

const data = DataComponent();

ReactDOM.render(
  <React.StrictMode>
    {/* <App data={data} /> */}
    <AppClass data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
