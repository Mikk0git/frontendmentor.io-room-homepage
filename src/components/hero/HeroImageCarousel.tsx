import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";

interface HeroImageCarouselProps {
  currentImageIndex: number;
  imageSources: string[];
}

const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({
  currentImageIndex,
  imageSources,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition =
        currentImageIndex * carouselRef.current.clientWidth;
      carouselRef.current.scrollLeft = scrollPosition;
    }
  }, [currentImageIndex]);

  return (
    <div id={styles.imageCarousel} ref={carouselRef}>
      {imageSources.map((src, index) => (
        <img
          key={index}
          className={styles.heroImage}
          src={src}
          alt={`Hero Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default HeroImageCarousel;
