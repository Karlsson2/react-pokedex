import styles from "./pokemonProfile.module.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonLikeButton from "./pokemonLikeButton";
import { Navigate } from "react-router-dom";
import SpinnerWheel from "../Spinner/Spinner";
import pikachu from "../../assets/images/pikachu.gif";

function PokemonProfile() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(undefined);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((response) => {
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Pokemon not found");
          } else {
            throw new Error("Network response was not ok");
          }
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [pokemonName]);

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <img src={pikachu} alt="pikachu-gif" />
        <p>The pokemon {pokemonName} does not exist!</p>
      </div>
    );
  }

  if (pokemon === undefined) {
    return <SpinnerWheel />;
  }

  if (!pokemon) {
    return <Navigate to={{ pathname: "error/404" }} />;
  }
  function formatPokemonOrder(order) {
    return order < 10 ? `00${order}` : order < 100 ? `0${order}` : `${order}`;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {pokemon === null && <Navigate to="/404" />}
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
                alt={`Image of ${pokemon.name}`}
              />
              <div className={styles.textContainer}>
                <PokemonLikeButton pokemonName={pokemon.name} />
                <p>No. {formatPokemonOrder(pokemon.id)}</p>

                <h2
                  className={`${styles.textColor} ${pokemon.types[0].type.name}`}
                >
                  {capitalizeFirstLetter(pokemon.name)}
                </h2>
              </div>
            </div>
            <div className={styles.typesContainer}>
              <h3>Types:</h3>
              <div className={styles.types}>
                {pokemon.types.map((type, index) => (
                  <div
                    key={index}
                    className={`${styles.type} ${
                      type.type.name + "-background"
                    }`}
                  >
                    {capitalizeFirstLetter(type.type.name)}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.statsContainer}>
              <h3>Stats:</h3>
              {pokemon.stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className="stat-name">
                    {capitalizeFirstLetter(stat.stat.name)}
                  </div>
                  <div className={styles.statNumber}>{stat.base_stat}</div>
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
