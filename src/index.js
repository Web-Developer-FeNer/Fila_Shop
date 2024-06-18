import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Order from './Order';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store, {persistor} from "./store/";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <BrowserRouter>
  <Routes>
    
    <Route path='/' element={<App/>}></Route>
    <Route path='/order' element={<Order />}></Route>

  </Routes>
  </BrowserRouter>
  </PersistGate>
  </Provider>

);
