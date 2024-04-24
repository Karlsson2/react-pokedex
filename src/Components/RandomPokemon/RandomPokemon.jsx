import styles from "./RandomPokemon.module.css";
import ball from "../../assets/images/ball_icon.svg";

export default function RandomPokemon() {
  const APIurl = "https://pokeapi.co/api/v2/pokemon/";

  const getRandomPokemon = async () => {
    const randomIndex = Math.floor(Math.random() * 151) + 1;
    const randomPokemon = await fetch(`${APIurl}${randomIndex}`);
    if (!randomPokemon.ok) {
      throw new Error("Error fetching Pokedex");
    }
    const randomFetch = await randomPokemon.json();
    console.log(randomFetch.name);
    window.location.href = `/${randomFetch.name}`;
  };
  return (
    <div className={styles.container}>
      <img
        src={ball}
        alt=""
        className={styles.ball}
        onClick={getRandomPokemon}
      ></img>
    </div>
  );
}
