import Spinner from "../../assets/images/spinner.jsx";
import styles from "./spinner.module.css";

function SpinnerWheel() {
  return (
    <div className={styles.loadingContainer}>
      <Spinner />
      <h1>Loading...</h1>
    </div>
  );
}
export default SpinnerWheel;
