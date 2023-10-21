import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Gallery } from "./Gallery";
import "./styles/CharacterPage.scss";

export function CharactersPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data);
    };
    getCharacters();
  }, []);

  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios("http://localhost:3000/houses");
      setHouses(data);
    };
    getHouses();
  }, []);

  return (
    <>
      <Gallery data={characters} houseData={houses} />;
    </>
  );
}
