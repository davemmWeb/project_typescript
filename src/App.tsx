import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import GetStart from './components/GetStart/GetStart';
import Home from './components/Home/Home';

function App() {
  

  return (
    <div className="App">     
        <Routes>
          <Route path='/' element={<GetStart/>}/> 
          <Route path='/home' element={<Home/>}/>
        </Routes>        
    </div>
  );
}

export default App;
