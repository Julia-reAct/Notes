import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import MainNote from "./Pages/MainPages/MainPage";
import CreatNote from "./Pages/CreatNotes/CreatNote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HashRouter>
              <Routes>
                  <Route path="/" element={<MainNote/>}></Route>
                  <Route path="/creatNote" element={<CreatNote/>}></Route>
              </Routes>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
