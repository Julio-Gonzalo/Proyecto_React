import React, { useState } from 'react';

function Header({ onSearch }) {
  const [nombreBuscado, setNombreBuscado] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(nombreBuscado);
  };

  return (
    <header>
      <h1>Juego de Tronos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar personaje"
          value={nombreBuscado}
          onChange={(e) => setNombreBuscado(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}

export default Header;
