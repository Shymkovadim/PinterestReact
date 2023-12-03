import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { PinPage } from './components/PinPage';
import { Provider } from 'react-redux';
import { store } from './redux/store';


function App() {
  return (<Provider store={store}>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<PinPage />}></Route>
      </Routes>
    </BrowserRouter></Provider>
  );
}

export default App;
