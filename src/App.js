import React from 'react';
import { BrowserRouter as Router, Route,Routes,Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home';
import CarritoList from './ChartJsExample.jsx';
import Objetivos from './Objetivos.jsx';
import Acerca from './Acerca.jsx';
import robot from './robot.png';
import './App.css';

function App() {
  return (

   
      <div>
         <Router>
        <Navbar />
        <Routes>
          
            
            
            <Route path="/home" element={<Home />} />
            <Route path="/acerca" element={<Acerca />} />
            <Route path="/objetivos" element={<Objetivos />} />
            <Route path="/mediciones" element={<CarritoList />} />
          
        </Routes>


        </Router>
        
      </div>
        
    
  );
}

export default App;
