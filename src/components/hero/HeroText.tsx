import styles from "./Hero.module.css";

interface HeroTextProps {
  title: string;
  text: string;
}
const HeroText: React.FC<HeroTextProps> = ({ title, text }) => {
  return (
    <div id={styles.heroText}>
      <h1>{title}</h1>
      <p>{text}</p>
      <a href="/shop">Shop now</a>
    </div>
  );
};

export default HeroText;
