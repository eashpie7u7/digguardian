// Chart.jsx
import React from 'react';
import './Chart.css';

const Chart = ({ data }) => {
    console.log('Datos:', data);

  const chartItems = data.map((item) => (
    <div key={item.id_medicion} className="chart-item">
          <div className="y-label">
         {item.temperatura.toFixed(2)}°C
      </div>
      <div
        className="chart-bar"
        style={{
          height: `${(item.temperatura / 100) * 500}px`,
          // Adjust the height according to the relationship
        }}
      >
        
        
      </div>
    </div>
  ));

  return <div className="chart-container">{chartItems}</div>;
};

export default Chart;
