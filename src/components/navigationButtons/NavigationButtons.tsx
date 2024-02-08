import React from "react";
import styles from "./NavigationButtons.module.css";

interface NavigationButtonsProps {
  onNext: () => void;
  onPrev: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrev,
}) => {
  return (
    <div id={styles.navigationButtons}>
      <button
        id={styles.backButton}
        className={styles.navigationButton}
        onClick={onPrev}
      >
        <img src="/icons/icon-angle-left.svg" alt="" />
      </button>
      <button
        id={styles.forwardButton}
        className={styles.navigationButton}
        onClick={onNext}
      >
        <img src="/icons/icon-angle-right.svg" alt="" />
      </button>
    </div>
  );
};

export default NavigationButtons;
