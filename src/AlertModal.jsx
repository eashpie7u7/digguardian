// AlertModal.jsx

import React, { useState } from 'react';
import './Modal.css';

const AlertModal = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    onClose();
  };

  return (
    <div className={`modal ${visible ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close-btn" onClick={handleClose}>&times;</span>
        <p>La temperatura es mayor a 30. ¡Alerta! Temperaturas altas próximas</p>
      </div>
    </div>
  );
};

export default AlertModal;
