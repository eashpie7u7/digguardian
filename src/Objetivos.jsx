import React from 'react';
import Menu from './Menu.jsx';
import './Objetivos.css'
import triptico from './triptico.png';
const Objetivos = () => {
  return (
    <div>
        <Menu/>
        <p className="titulo">Objetivos</p>
        <img src={triptico} className="logo" alt="Imagen del robot del futuro" />
      <p className='text'>El proyecto consiste en la concepción y desarrollo exitoso de un robot de rescate innovador, equipado con un sensor de distancia que amplía sus capacidades operativas. Este prototipo ha sido creado con el propósito de optimizar la capacidad de respuesta y la protección tanto del personal de rescate como de las personas afectadas en escenarios de emergencia.</p>
<p className='text'>El robot de rescate cuenta con un sensor de distancia, el cual le permite detectar obstáculos y evaluar el entorno que lo rodea con precisión. Esta característica clave facilita la navegación autónoma en terrenos complejos y peligrosos, como escombros o áreas de difícil acceso.</p>

<p className='text'>Además, el diseño del robot posibilita la incorporación de mejoras futuras y su ajuste a distintos escenarios de rescate.  La versatilidad del dispositivo es acompañada por su capacidad para enviar datos en tiempo real a una base de datos, brindando información esencial para una correcta toma de decisiones. </p>

    </div>
  );
};

export default Objetivos;
