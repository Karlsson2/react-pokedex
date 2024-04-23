import styles from "./fourOFour.module.css";
import pikachu from "../../assets/images/pikachu.gif";

function FourOFourContent() {
  return (
    <div className={styles.errorDiv}>
      <img src={pikachu} alt="pikachu-gif" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default FourOFourContent;
