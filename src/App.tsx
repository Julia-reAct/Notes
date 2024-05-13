import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import MainNote from "./Pages/MainPages/MainPage";
import CreatAndChangeNote from "./Pages/CreatAndChangeNotes/CreatAndChangeNote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <HashRouter>
              <Routes>
                  <Route path="/" element={<CreatAndChangeNote/>}></Route>
                  <Route path="/creatNote" element={<MainNote/>}></Route>
              </Routes>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
