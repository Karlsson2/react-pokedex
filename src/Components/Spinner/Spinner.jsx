import Spinner from "../../assets/images/spinner.jsx";
import styles from "./spinner.module.css";
import ball from "../../assets/images/ball_icon.svg";

function SpinnerWheel() {
  return (
    <div className={styles.loadingContainer}>
      <img src={ball} alt="" className={styles.ball}></img>
      <h1>Loading...</h1>
    </div>
  );
}
export default SpinnerWheel;
