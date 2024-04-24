import { useInView } from "react-intersection-observer";
import styles from "./InView.module.css";
const FadeInSection = ({ className, children, pokemonType }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% of element is in view
  });

  return (
    <div
      ref={ref}
      className={` ${pokemonType}-boxshadow ${className} ${
        styles.FadeInSection
      } ${inView ? styles.isVisible : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
