import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Gallery } from "./Gallery";

export function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data);
    };
    getCharacters();
  }, []);

  return (
    <section className="section">
      <Gallery data={characters} />
    </section>
  );
}
