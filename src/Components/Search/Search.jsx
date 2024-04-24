import { useState } from "react";
import styles from "./Search.module.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RandomPokemon from "../RandomPokemon/RandomPokemon";

function Search() {
  const [search, setSearch] = useState("");

  function updateSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.SearchContainer}>
        <form action={"/" + search.toLowerCase()}>
          <div className={styles.inputContainer}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.magnifyingGlass}
            />
            <input
              type="text"
              className={styles.search}
              placeholder="Search for a pokemon"
              value={search}
              onChange={(event) => updateSearch(event)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Search;
