import { useEffect, useState } from "react";
import NavigationButtons from "../navigationButtons/NavigationButtons.tsx";
import HeroImageCarousel from "./HeroImageCarousel.tsx";
import useWindowResize from "../../hooks/useWindowResize";
import styles from "./Hero.module.css";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  useWindowResize();

  const totalImages = 3;
  const imageSourcesMobile = [
    "/images/mobile-image-hero-1.jpg",
    "/images/mobile-image-hero-2.jpg",
    "/images/mobile-image-hero-3.jpg",
  ];
  const imageSourcesDesktop = [
    "/images/desktop-image-hero-1.jpg",
    "/images/desktop-image-hero-2.jpg",
    "/images/desktop-image-hero-3.jpg",
  ];
  const imageSources =
    window.innerWidth > 750 ? imageSourcesDesktop : imageSourcesMobile;

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const intervalId = setInterval(handleNextImage, 5000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentImageIndex]); // Run effect whenever currentImageIndex changes

  return (
    <>
      <HeroImageCarousel
        currentImageIndex={currentImageIndex}
        imageSources={imageSources}
      />

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
      <NavigationButtons
        onNext={handleNextImage}
        onPrev={handlePreviousImage}
      />
    </>
  );
}
