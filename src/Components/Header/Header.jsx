import RandomPokemon from "../RandomPokemon/RandomPokemon";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <a href="/">
        <h1>Pokemon</h1>
      </a>
      <RandomPokemon />
    </div>
  );
}
