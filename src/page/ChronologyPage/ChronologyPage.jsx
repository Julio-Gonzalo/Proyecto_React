import React, { useState, useEffect } from 'react';
import axios from 'axios';


export function ChronologyPage() {
  const [characters, setCharacters] = useState([]);
  const [ascendente, setAscendente] = useState(true);

  useEffect(() => {
    // Función para cargar datos de la API
    const loadCharacterData = async () => {
      try {
        const apiUrl = "http://localhost:3000/characters";
        const response = await axios.get(apiUrl);
        const data = response.data;
        const charactersWithAge = data.filter(character => character.age !== "N/A");
        setCharacters(charactersWithAge);
      } catch (error) {
        console.error("Error al cargar datos de la API: " + error);
      }
    };

    loadCharacterData();
  }, []);

  const toggleOrder = () => {
    setAscendente(!ascendente);
    setCharacters([...characters].reverse());
  };

  return (
    <div>
      <h1>Game of Thrones Timeline</h1>
      <button onClick={toggleOrder}>Cambiar Orden</button>
      <div>{ascendente ? 'Ascendente' : 'Descendente'}</div>
      <ul>
        {characters.map(character => (
          <li key={character._id}>{character.name} - Edad: {character.age}</li>
        ))}
      </ul>
    </div>
  );
}










/* {
    const [characters, setCharacters] = useState([]);
    const [ascendente, setAscendente] = useState(true);
  
    useEffect(() => {
      // Función para cargar datos
      const loadCharacterData = async () => {
        try {
          const Url = "http://localhost:3000/characters";
          const res = await axios.get(Url);
          const data = res.data;
          const charactersWithAge = data.filter(character => character.age !== "N/A");
          setCharacters(charactersWithAge);
        } catch (error) {
          console.error("Error al cargar datos: " + error);
        }
      };
  
      loadCharacterData();
    }, []);
  
    const toggleOrder = () => {
      setAscendente(!ascendente);
      setCharacters([...characters].reverse());
    };
  
    return (
        <div>
          <button onClick={toggleOrder}>Cambiar Orden</button>
          <div>{ascendente ? 'Ascendente' : 'Descendente'}</div>
          <ul>
            {characters.map(character => (
              <li key={character._id}>
                <img src={`http://localhost:3000/${character.image}`} alt={character.name} width="100" height="150" />
                {character.name} - Edad: {character.age}
              </li>
            ))}
          </ul>
        </div>
    );
  }
    */