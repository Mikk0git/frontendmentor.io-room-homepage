import React, { useEffect } from "react";
import styles from "./NavigationButtons.module.css";

interface NavigationButtonsProps {
  onNext: () => void;
  onPrev: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        // console.log("Left arrow key pressed!");
        onPrev();
      } else if (event.key === "ArrowRight") {
        // console.log("Right arrow key pressed!");
        onNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext, onPrev]);

  return (
    <div id={styles.navigationButtons}>
      <button
        id={styles.backButton}
        className={styles.navigationButton}
        onClick={onPrev}
      >
        <img
          src={`${import.meta.env.BASE_URL}/icons/icon-angle-left.svg`}
          alt=""
        />
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
