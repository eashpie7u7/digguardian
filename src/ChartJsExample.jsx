import React, { useState, useEffect } from 'react';
import arriba from './arriba.png';
import Menu from './Menu.jsx';
import AlertModal from './AlertModal'; 
import Chart from './Chart';
import './tabla.css'
const CarritoList = () => {
  const [items, setItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/data')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data from MySQL:', data);
        setItems(data);
        const hasTemperatureAbove40 = data.some((item) => item.temperatura > 29);
        if (hasTemperatureAbove40) {
          setShowAlert(true);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div >
      <Menu/>
      <h1>Tabla de mediciones en tiempo real </h1>
      <ul className="custom-container">
      
        {items.map((item, index) => (
          <li key={index}>

            Temperatura: {item.temperatura}, Distancia: {item.distancia}
          </li>
        ))}
      </ul>
  
      {showAlert && <AlertModal onClose={() => setShowAlert(false)} />}
      <Chart data={items} />
      <div className="x-label">Tiempo</div>
      <img src={arriba} className="foto" alt="Imagen del robot del futuro" />
    </div>
      
  );
  
};

export default CarritoList;
