import styles from "./List.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [pokeData, setPokeData] = useState([]);
  const APIurl = "https://pokeapi.co/api/v2/pokemon?limit=15";

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        const response = await fetch(APIurl);
        if (!response.ok) {
          throw new Error("Error fetching Pokedex");
        }
        const data = await response.json();
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            if (!response.ok) {
              throw new Error("Error fetching Pokedex");
            }
            return response.json();
          })
        );
        setPokeData(pokemonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokeData();
  }, []);
  console.log(pokeData);
  return (
    <div className={styles.container}>
      {pokeData &&
        pokeData.map((pokemon, index) => (
          <div className={styles.card} key={index}>
            <Link to={`/${pokemon.name}`}>
              <h2>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(1)}`}</h2>
              <img className={styles.avatar} src={pokemon.sprites.other["official-artwork"].front_default} />
            </Link>
          </div>
        ))}
    </div>
  );
}
