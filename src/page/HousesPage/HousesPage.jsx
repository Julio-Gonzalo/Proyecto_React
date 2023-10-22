import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Gallery } from "./Gallery";
import "./styles/HousePage.scss";

export function HousesPage({ filter }) {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      const { data } = await axios("http://localhost:3000/houses");
      setHouses(data);
    };
    getHouses();
  }, []);

  const filteredHouses = houses.filter(
    (character) =>
      character.name &&
      character.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Gallery data={filteredHouses} />
    </>
  );
}
