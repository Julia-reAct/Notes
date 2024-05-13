import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import MainNote from './Pages/MainPages/MainPage';
import CreatAndChangeNote from './Pages/CreateAndChangeNotes/CreateAndChangeNote';
import CreateAndChangeNote from "./Pages/CreateAndChangeNotes/CreateAndChangeNote";

function App() {




    return (
    <div className="App">
      <header className="App-header">
          <HashRouter>
              <Routes>
                  <Route path='/' element={<CreateAndChangeNote/>}/>
                  <Route path='/creatNote' element={<MainNote/>}/>
              </Routes>
          </HashRouter>
      </header>
    </div>
  );
}

export default App;
