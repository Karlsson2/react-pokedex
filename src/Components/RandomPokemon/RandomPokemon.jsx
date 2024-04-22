import styles from "./RandomPokemon.module.css";

export default function RandomPokemon() {
  const APIurl = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    const fetchPokeData = async () => {
      try {
        const response = await fetch(APIurl);
        if (!response.ok) {
          throw new Error("Error fetching Pokedex");
        }
        const data = await response.json();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokeData();
  }, []);
  return (
    <div className={styles.container}>
      <button>Random</button>
    </div>
  );
}
