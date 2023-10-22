import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styleChrono.css';

export function ChronologyPage() {
  const [characters, setCharacters] = useState([]);
  const [ascendente, setAscendente] = useState(true);

  useEffect(() => {
    const loadCharacterData = async () => {
      try {
        const Url = "http://localhost:3000/characters";
        const res = await axios.get(Url);
        const data = res.data;
        const charactersWithAge = data.filter(character => character.age !== null);

        const sortedCharacters = charactersWithAge.sort((a, b) => {
          return ascendente ? a.age - b.age : b.age - a.age;
        });

        setCharacters(sortedCharacters);
      } catch (error) {
        console.error("Error al cargar datos: " + error);
      }
    };

    loadCharacterData();
  }, [ascendente]);

  const getButtonText = () => {
    if (ascendente) {
      const youngestAge = getYoungestAge(characters);
      return youngestAge;
    } else {
      const oldestAge = getOldestAge(characters);
      return oldestAge;
    }
  };

  const getYoungestAge = (characters) => {
    return Math.min(...characters.map(character => Number(character.age)));
  };

  const getOldestAge = (characters) => {
    return Math.max(...characters.map(character => Number(character.age)));
  };

  return (
    <div className="container" style={{ height: '50vh', overflowY: 'auto' }}>
      <button onClick={() => setAscendente(!ascendente)} className="circle-button">
        {getButtonText()}
      </button>
      <ul className="timeline">
        {characters.map((character, index) => (
          <li key={character._id} className="timeline-item">
            <div className="timeline-content">
              <div>
                <p className="name">{character.name}</p>
                <p className="age">Edad: {character.age}</p>
              </div>
              <img src={`http://localhost:3000/${character.image}`} alt={character.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}