import styles from "./List.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemonLikeButton from "../pokemonProfile/pokemonLikeButton";

export default function List() {
  const [pokeData, setPokeData] = useState([]);
  const APIurl = "https://pokeapi.co/api/v2/pokemon?limit=151";

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

  function formatPokemonOrder(order) {
    return order < 10 ? `00${order}` : order < 100 ? `0${order}` : `${order}`;
  }

  return (
    <div className={styles.container}>
      {pokeData &&
        pokeData.map((pokemon, index) => (
          <div className={styles.card} key={index}>
            <Link to={`/${pokemon.name}`}>
<PokemonLikeButton pokemonName={pokemon.name} />
              <div className={styles.textbox}>
                <h2
                  className={`${styles.textColor} ${pokemon.types[0].type.name}`}>{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                  1
                )}`}</h2>
                <p>No. {formatPokemonOrder(pokemon.id)}</p>
              </div>
              <img className={styles.avatar} src={pokemon.sprites.other["official-artwork"].front_default} />
            </Link>
          </div>
        ))}
    </div>
  );
}
