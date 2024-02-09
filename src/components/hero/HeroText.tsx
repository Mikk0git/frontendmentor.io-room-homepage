import { useState } from "react";
import styles from "./Hero.module.css";

interface HeroTextProps {
  title: string;
  text: string;
}
const HeroText: React.FC<HeroTextProps> = ({ title, text }) => {
  const [hover, setHover] = useState(false);
  return (
    <div id={styles.heroText}>
      <h1>{title}</h1>
      <p>{text}</p>
      <a
        href="/shop"
        className={styles.shopLink}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        SHOP NOW{" "}
        {hover ? (
          <img src="/icons/icon-arrow-dark-gray.svg" alt="" />
        ) : (
          <img src="/icons/icon-arrow-black.svg" alt="" />
        )}
      </a>
    </div>
  );
};

export default HeroText;
