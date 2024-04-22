import styles from "./ToTop.module.css";

export default function ToTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button className={styles.button} onClick={scrollToTop}>
      Top
    </button>
  );
}
