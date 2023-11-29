import React from 'react';
import Menu from './Menu.jsx';
import robot from './robot.png';
import segundo from './segundo.png';
import './App.css';

function Home() {
  return (


      <div>
        <Menu/>
        <p className="titulo">DigGuardian</p>
       
        <img src={robot} className="logo" alt="Imagen del robot del futuro" />
        <p className="texto">
          El proyecto consiste en la concepción y desarrollo exitoso de un robot de rescate innovador,
          equipado con un sensor de distancia que amplía sus capacidades operativas. Este prototipo
          ha sido creado con el propósito de optimizar la capacidad de respuesta y la protección
          tanto del personal de rescate como de las personas afectadas en escenarios de emergencia.
          El robot de rescate cuenta con un sensor de distancia, el cual le permite detectar obstáculos
          y evaluar el entorno que lo rodea con precisión. Esta característica clave facilita la navegación
          autónoma en terrenos complejos y peligrosos, como escombros o áreas de difícil acceso.
        </p>
        <img src={segundo} className="logo" alt="Imagen del robot del futuro" />
      </div>

  );
}

export default Home;
