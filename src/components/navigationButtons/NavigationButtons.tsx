import React from "react";
import styles from "./NavigationButtons.module.css";

const NavigationButtons = () => {
  return (
    <div id={styles.navigationButtons}>
      <button id={styles.backButton} className={styles.navigationButton}>
        <img src="/icons/icon-angle-left.svg" alt="" />
      </button>
      <button id={styles.forwardButton} className={styles.navigationButton}>
        <img src="/icons/icon-angle-right.svg" alt="" />
      </button>
    </div>
  );
};

export default NavigationButtons;
