// src/components/InputField.jsx
import React from 'react';

/**
 * Componente reutilizable InputField.
 * @param {string} label - Etiqueta para el campo de entrada.
 * @param {string} type - Tipo de campo de entrada (text, email, password, etc.).
 * @param {string} name - Nombre del campo.
 * @param {string} value - Valor del campo.
 * @param {function} onChange - Función para manejar el cambio de valor.
 * @param {boolean} required - Si el campo es requerido.
 * @param {boolean} showError - Controla cuándo mostrar el mensaje de error.
 * @param {string} errorMessage - Mensaje de error cuando el campo es requerido pero está vacío.
 */
const InputField = ({ label, type, name, value, onChange, required = false, showError = false, errorMessage }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-2 text-gray-700">{label}</label>
      <input
        type={type}
        name={name}  // Añadimos la propiedad 'name' para identificar el campo
        value={value}
        onChange={onChange}  // Aseguramos que el estado se actualiza correctamente
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
        required={required}
      />
      {showError && required && !value && (
        <p className="text-red-500 text-sm">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputField;
