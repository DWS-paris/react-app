/* 
  [APP] Maiin import
  Define main imports to create APP
*/ 
  // React component
  import React from 'react';
  import ReactDOM from 'react-dom/client';

  // Add Redux modules
  import { Provider } from 'react-redux';
  import store from './store';

  // Add router module
  import { BrowserRouter } from 'react-router-dom';

  // Main definition
  import './index.css';
  import App from './App';
  import reportWebVitals from './reportWebVitals';
//

/* 
  [APP] Init
  Define main App configuration
*/
  const root = ReactDOM.createRoot( document.getElementById('root') );
  root.render(
    <React.StrictMode>
      {/* Use the Provider ton inject store module */}
      <Provider store={ store }>
        {/* User BrowserRouter to manipulate views */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
//

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
