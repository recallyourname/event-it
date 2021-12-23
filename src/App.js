import React from 'react'
import MainPage from './components/pages/MainPage';
import s from "./App.css"
import Events from './components/pages/Events';

function App() {
  return (
    <div>
      <div className={s.layout}>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
