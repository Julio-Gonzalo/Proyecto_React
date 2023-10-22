import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styleChrono.css";
import "./styles/ChronologyPage.scss";
import { MenuHeader } from "../../componentes/MenuHeader/MenuHeader";

export function ChronologyPage() {
  const [characters, setCharacters] = useState([]);
  const [ascendente, setAscendente] = useState(true);

  useEffect(() => {
    const loadCharacterData = async () => {
      try {
        const Url = "http://localhost:3000/characters";
        const res = await axios.get(Url);
        const data = res.data;
        const charactersWithAge = data.filter(
          (character) => character.age !== null
        );

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
    return Math.min(...characters.map((character) => Number(character.age)));
  };

  const getOldestAge = (characters) => {
    return Math.max(...characters.map((character) => Number(character.age)));
  };

  return (
    <>
      <MenuHeader />
      <main className="main-chronology">
        <div className="cesar">
          <section className="scroll">
            <div className="container">
              <button
                onClick={() => setAscendente(!ascendente)}
                className="circle-button"
              >
                {getButtonText()}
              </button>
              <ul className="timeline">
                {characters.map((character, index) => (
                  <li key={index} className="timeline-item">
                    <div className="timeline-content">
                      <div className="pepito">
                        <p className="age">{character.age}</p>
                        <p className="name">{character.name}</p>
                      </div>
                      <img
                        className="imagen"
                        src={`http://localhost:3000/${character.image}`}
                        alt={character.name}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
