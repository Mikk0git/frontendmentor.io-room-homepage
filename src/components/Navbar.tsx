import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css"; // Import the styles object

export default function Navbar() {
  const [isButtonCLicked, setIsButtonCLicked] = useState(false);
  const [opacityValue, setOpacityValue] = useState(0);
  const [backgroundColorValue, setBackgroundColorValue] =
    useState("rgba(0, 0, 0, 0)");

  useEffect(() => {
    setOpacityValue(isButtonCLicked ? 1 : 0);
  }, [isButtonCLicked]);

  useEffect(() => {
    setBackgroundColorValue(isButtonCLicked ? "white" : "rgba(0, 0, 0, 0)");
    console.log("Background color " + backgroundColorValue);
  }, [isButtonCLicked]);

  const handleButtonClick = () => {
    if (isButtonCLicked) {
      setIsButtonCLicked(false);
    } else {
      setIsButtonCLicked(true);
    }
    console.log("Button clicked " + isButtonCLicked);
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
        style={{ opacity: opacityValue }}
      >
        {isButtonCLicked ? (
          <>
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
          </>
        ) : (
          //it may be stupid but it works
          <>
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </>
        )}
      </ul>
      <div className={styles.navbarElement} id={styles.navbarLogo}>
        <a href="/">
          <img src="/logo.svg" alt="room" />
        </a>
      </div>
    </nav>
  );
}
