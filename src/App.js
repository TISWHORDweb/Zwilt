import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { Routes } from './Config/routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
