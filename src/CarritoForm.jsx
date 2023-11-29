import React, { useState } from 'react';

const CarritoForm = () => {
  const [temperatura, setTemperatura] = useState('');
  const [distancia, setDistancia] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la solicitud POST a tu función Lambda
    fetch('https://6e9lm6q0me.execute-api.us-east-2.amazonaws.com/conexionCarrito', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        temperatura: parseFloat(temperatura),
        distancia: parseFloat(distancia),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Registro guardado correctamente:', data))
      .catch((error) => console.error('Error al guardar el registro:', error));
  };

  return (
    <div>
      <h1>Formulario de Carrito</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Temperatura:
          <input
            type="number"
            value={temperatura}
            onChange={(e) => setTemperatura(e.target.value)}
          />
        </label>
        <br />
        <label>
          Distancia:
          <input
            type="number"
            value={distancia}
            onChange={(e) => setDistancia(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Guardar Registro</button>
      </form>
    </div>
  );
};

export default CarritoForm;
