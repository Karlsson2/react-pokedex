import styles from "./RandomPokemon.module.css";

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
      <button className={styles.button} onClick={getRandomPokemon}>
        Random
      </button>
    </div>
  );
}
