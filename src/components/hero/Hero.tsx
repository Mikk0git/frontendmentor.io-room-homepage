import NavigationButtons from "../navigationButtons/NavigationButtons.tsx";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <img id={styles.heroImage} src="/images/mobile-image-hero-1.jpg" alt="" />
      <div id={styles.heroText}>
        <h1>Discover innovative ways to decorate</h1>
        <p>
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
        </p>
        <a href="/shop">Shop now</a>
      </div>
      <NavigationButtons />
    </>
  );
}
