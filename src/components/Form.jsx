// src/components/Form.jsx
import React, { useState } from 'react';
import InputField from './InputField';
import Button from './Button';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Función para manejar el cambio de los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Extrae el nombre del input que está cambiando
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,  // Actualiza solo el campo correspondiente
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (formData.name && formData.email && formData.password) {
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>

      {/* Campo Nombre */}
      <InputField
        label="Nombre"
        type="text"
        name="name"  // Asigna el 'name' del input
        value={formData.name}  // Vincula con el estado
        onChange={handleInputChange}  // Llama a la función para actualizar el estado
        required={true}
        showError={submitted}
        errorMessage="El nombre es requerido"
      />

      {/* Campo Correo Electrónico */}
      <InputField
        label="Correo Electrónico"
        type="email"
        name="email"  // Asigna el 'name' del input
        value={formData.email}  // Vincula con el estado
        onChange={handleInputChange}  // Llama a la función para actualizar el estado
        required={true}
        showError={submitted}
        errorMessage="El correo electrónico es requerido"
      />

      {/* Campo Contraseña */}
      <InputField
        label="Contraseña"
        type="password"
        name="password"  // Asigna el 'name' del input
        value={formData.password}  // Vincula con el estado
        onChange={handleInputChange}  // Llama a la función para actualizar el estado
        required={true}
        showError={submitted}
        errorMessage="La contraseña es requerida"
      />

      {/* Botón de Enviar */}
      <Button text="Registrarse" type="submit" />

      {submitted && formData.name && formData.email && formData.password && (
        <p className="text-green-500 mt-4 text-center">¡Registro exitoso!</p>
      )}
    </form>
  );
};

export default Form;
