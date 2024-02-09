import React, { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import useWindowResize from "../../hooks/useWindowResize";

export default function Navbar() {
  const [isButtonCLicked, setIsButtonCLicked] = useState(false);
  const [opacityValue, setOpacityValue] = useState(0);
  const [backgroundColorValue, setBackgroundColorValue] =
    useState("rgba(0, 0, 0, 0)");
  const [displayValue, setDisplayValue] = useState<string>();
  // const [windowSize, setWindowSize] = useState(getWindowSize());

  const windowSize = useWindowResize();

  useEffect(() => {
    if (windowSize.innerWidth < 750) {
      setOpacityValue(isButtonCLicked ? 1 : 0);
      setDisplayValue(isButtonCLicked ? "flex" : "none");
    } else setOpacityValue(1);
  }, [isButtonCLicked, windowSize.innerWidth]);

  useEffect(() => {
    if (windowSize.innerWidth < 750) {
      setBackgroundColorValue(isButtonCLicked ? "white" : "rgba(0, 0, 0, 0)");
    } else {
      setBackgroundColorValue("rgba(0, 0, 0, 0)");
    }
  }, [isButtonCLicked, windowSize.innerWidth]);

  const handleButtonClick = () => {
    if (isButtonCLicked) {
      setIsButtonCLicked(false);
    } else {
      setIsButtonCLicked(true);
    }
    // console.log("Button clicked " + isButtonCLicked);
  };

  return (
    <nav id={styles.navbar} style={{ backgroundColor: backgroundColorValue }}>
      <button
        id={styles.navbarButton}
        className={styles.navbarElement}
        onClick={handleButtonClick}
      >
        {isButtonCLicked ? (
          <img src="/icons/icon-close.svg" alt="" />
        ) : (
          <img src="/icons/icon-hamburger.svg" alt="" />
        )}
      </button>
      <ul
        className={styles.navbarElement}
        id={styles.navbarList}
        style={{ opacity: opacityValue, display: displayValue }}
      >
        <li>
          <a href="/"> home</a>
        </li>
        <li>
          <a href="/shop">shop</a>
        </li>
        <li>
          <a href="#aboutText">about</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
      {!isButtonCLicked || windowSize.innerWidth > 750 ? (
        <div className={styles.navbarElement} id={styles.navbarLogo}>
          <a href="/">
            <img src="/logo.svg" alt="room" />
          </a>
        </div>
      ) : null}
    </nav>
  );
}
