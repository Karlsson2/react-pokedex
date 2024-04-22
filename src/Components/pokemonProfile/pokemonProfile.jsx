import styles from "./pokemonProfile.module.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PokemonProfile() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle error, e.g., set an error state to display a message to the user
      });
  }, [pokemonName]);

  function formatPokemonOrder(order) {
    return order < 10 ? `00${order}` : order < 100 ? `0${order}` : `${order}`;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {pokemon && ( // Render only when pokemon is not null
        <>
          <div className={styles.pokemonCard}>
            <div className={styles.audioContainer}>
              <div className="audio">
                <audio controls>
                  <source src={pokemon.cries.legacy} type="audio/ogg" />
                </audio>
              </div>
            </div>
            <div className={styles.topCard}>
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={`Image of ${pokemonName}`}
              />
              <div className={styles.textContainer}>
                <p>No. {formatPokemonOrder(pokemon.id)}</p>

                <h2
                  className={`${styles.textColor} ${pokemon.types[0].type.name}`}
                >
                  {capitalizeFirstLetter(pokemonName)}
                </h2>
              </div>
            </div>
            <div className={styles.typesContainer}>
              <h3>Types:</h3>
              <div className={styles.types}>
                {pokemon.types.map((type, index) => (
                  <div class={type.type.name}>{type.type.name}</div>
                ))}
              </div>
            </div>
            <div className={styles.statsContainer}>
              <h3>Stats:</h3>

              {pokemon.stats.map((stat, index) => (
                <div>
                  {stat.stat.name} + {stat.base_stat}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PokemonProfile;
