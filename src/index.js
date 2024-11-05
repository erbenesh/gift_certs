import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Service} from './Service.main';
import {Provider} from './Provider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <Service />
    </Provider>
  </React.StrictMode>
);
