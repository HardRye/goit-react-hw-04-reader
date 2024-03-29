import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App/App';

import './index.css';

ReactDOM.render(
  <HashRouter to="/">
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
