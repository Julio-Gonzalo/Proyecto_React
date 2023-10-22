import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Gallery } from "./Gallery";
import "./styles/HousePage.scss";

export function HousesPage() {
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
      <Gallery data={houses} />
    </>
  );
}
