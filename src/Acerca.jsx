import React from 'react';
import Menu from './Menu.jsx';
import './Objetivos.css'
const Acerca = () => {
  return (
    <div>
       <p className="titulo">Acerca de</p>
        <Menu/>
       <p className='text'>Proyecto realizado por: </p>
       <p className='text'>Diego Aguilar Torres.</p>
       <p className='text'>Patricio Emiliano Hernández Escamilla.</p>
       <p className='text'>Eashley Brittney Martinez Vergara.</p>
    </div>
  );
};

export default Acerca;
