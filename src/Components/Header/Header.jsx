import RandomPokemon from "../RandomPokemon/RandomPokemon";
import styles from "./Header.module.css";
import Search from "../Search/Search";

export default function Header() {
  return (
    <div className={styles.container}>
      <a href="/">
        <h1>Pokedex</h1>
      </a>
      <RandomPokemon />
    </div>
  );
}
