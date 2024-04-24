import pikachu from "../../assets/images/pikachu.gif";
import styles from "./Error.module.css";

function ErrorContainer(props) {
  return (
    <div className={styles.errorContainer}>
      <img src={pikachu} alt="pikachu-gif" />
      <p>The pokemon {props.pokemonName} does not exist!</p>
    </div>
  );
}
export default ErrorContainer;
