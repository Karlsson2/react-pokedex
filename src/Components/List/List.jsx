import styles from "./List.module.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PokemonLikeButton from "../pokemonProfile/pokemonLikeButton";
import SpinnerWheel from "../Spinner/Spinner";
import InView from "../InView/InView.jsx";

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

  if (pokeData.length === 0) {
    return <SpinnerWheel />;
  }

  function formatPokemonOrder(order) {
    return order < 10 ? `00${order}` : order < 100 ? `0${order}` : `${order}`;
  }

  return (
    <div className={styles.container}>
      {pokeData &&
        pokeData.map((pokemon, index) => (
          <InView
            className={styles.card}
            key={index}
            pokemonType={pokemon.types[0].type.name}
          >
            <Link to={`/${pokemon.name}`}>
              <div className={styles.textbox}>
                <PokemonLikeButton pokemonName={pokemon.name} />
                <p>No. {formatPokemonOrder(pokemon.id)}</p>
                <h2
                  className={`${styles.textColor} ${pokemon.types[0].type.name}`}
                >{`${pokemon.name[0].toUpperCase()}${pokemon.name.slice(
                  1
                )}`}</h2>
              </div>
              <img
                className={styles.avatar}
                src={pokemon.sprites.other["official-artwork"].front_default}
              />
            </Link>
          </InView>
        ))}
    </div>
  );
}
