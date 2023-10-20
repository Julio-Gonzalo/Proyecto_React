import axios from "axios";
import { useEffect, useState } from "react";
import { Gallery } from "./Gallery";

export function CharactersPage({ nombreBuscado }) {
  console.log('Nombre buscado:', nombreBuscado);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data);
    };
    getCharacters();
  }, []);

  const filteredCharacters = nombreBuscado
    ? characters.filter((character) =>
        character.name && character.name.toLowerCase().includes(nombreBuscado.toLowerCase())
      )
    : characters;

  return (
    <section className="section">
      <Gallery data={filteredCharacters} />
    </section>
  );
}