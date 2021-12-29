import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventDetails from './components/pages/EventDetails';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/event" element={<EventDetails />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);