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
      <div>
        <svg width="40" height="35" viewBox="0 0 72 62" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="28.7869"
            y="7.85786"
            width="10"
            height="50"
            transform="rotate(-45 28.7869 7.85786)"
            fill="#D9D9D9"
          />
          <path
            d="M35.3553 1L42.4264 8.07107L7.07108 43.4264L8.22544e-06 36.3553L35.3553 1Z"
            fill="#D9D9D9"
          />
          <rect
            x="28.7869"
            y="25.8579"
            width="10"
            height="50"
            transform="rotate(-45 28.7869 25.8579)"
            fill="#D9D9D9"
          />
          <rect x="35.3553" y="19" width="10" height="50" transform="rotate(45 35.3553 19)" fill="#D9D9D9" />
        </svg>
      </div>
    </button>
  );
}
