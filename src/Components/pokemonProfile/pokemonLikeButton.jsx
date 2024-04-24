import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as unlikeHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "./pokemonProfile.module.css";

const PokemonLikeButton = ({ pokemonName }) => {
  const [liked, setLiked] = useState(() => {
    // Retrieve the existing liked Pokemon array from local storage when component mounts
    const storedLikedPokemon = localStorage.getItem("likedPokemon");
    return storedLikedPokemon ? JSON.parse(storedLikedPokemon) : [];
  });
  const [profilePokemonName, setPokemonName] = useState(pokemonName);

  useEffect(() => {
    // Update local storage whenever liked state changes
    localStorage.setItem("likedPokemon", JSON.stringify(liked));
  }, [liked]);

  const toggleLiked = () => {
    setLiked((prevLiked) => {
      if (!prevLiked.includes(profilePokemonName)) {
        return [...prevLiked, profilePokemonName];
      } else {
        return prevLiked.filter((name) => name !== profilePokemonName);
      }
    });
  };

  return (
    <div className={styles.likeButton} onClick={toggleLiked}>
      {liked.includes(profilePokemonName) ? (
        <FontAwesomeIcon icon={faHeart} className={styles.likedHeart} />
      ) : (
        <FontAwesomeIcon icon={unlikeHeart} className={styles.unlikedHeart} />
      )}
    </div>
  );
};

export default PokemonLikeButton;
