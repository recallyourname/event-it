import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EventDetails from './components/pages/EventDetails';
import LoginPage from './components/pages/LoginPage';
import NewEvent from './components/pages/NewEvent';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/new" element={<NewEvent />} />
      <Route path="/" element={<MainPage/>}/>
      <Route path="/event/:eventId" element={<EventDetails />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);