import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MetaMask from './components/web3warning/web3warning';
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


let app;
  if(window.web3 === undefined){
    app=(<MetaMask />);
  }else if(window.web3 !== undefined){
    app=(<App />);    
  }




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          {app}
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
