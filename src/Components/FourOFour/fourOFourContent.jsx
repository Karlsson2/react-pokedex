import styles from "./fourOFour.module.css";
function FourOFourContent() {
  return (
    <div className={styles.errorDiv}>
      <img src="/src/assets/images/pikachu.gif" alt="pikachu-gif" />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}

export default FourOFourContent;
