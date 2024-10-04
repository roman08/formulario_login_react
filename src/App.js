// src/App.js
import React from 'react';
import Form from './components/Form';
import './index.css'; // Tailwind importado aquí

/**
 * Componente principal App que renderiza el formulario de registro.
 */
function App() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/assets/background.jpg')` }}
    >
      <Form />
    </div>
  );
}

export default App;
