import { useInView } from "react-intersection-observer";
import styles from "./InView.module.css";
import "./InView.module.css"; // CSS file for transitions

const FadeInSection = ({ className, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.3, // Trigger when 50% of element is in view
  });

  return (
    <div
      ref={ref}
      className={`${className} ${styles.FadeInSection} ${
        inView ? styles.isVisible : ""
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
