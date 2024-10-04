// src/components/Button.jsx
import React from 'react';

/**
 * Componente reutilizable Button.
 * @param {string} text - Texto que aparecerá en el botón.
 * @param {function} onClick - Función que se ejecutará cuando se haga clic en el botón.
 * @param {string} type - Tipo de botón (submit, button, etc.).
 */
const Button = ({ text, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg m-2 hover:bg-blue-600 transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
