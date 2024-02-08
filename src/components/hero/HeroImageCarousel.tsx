import styles from "./Hero.module.css";

interface HeroImageCarouselProps {
  currentImageIndex: number;
  imageSources: string[];
}

const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({
  currentImageIndex,
  imageSources,
}) => {
  imageSources;
  return (
    <img
      id={styles.heroImage}
      src={imageSources[currentImageIndex]}
      alt={`Hero Image ${currentImageIndex + 1}`}
    />
  );
};

export default HeroImageCarousel;
