import { useEffect, useState } from "react";
import NavigationButtons from "../navigationButtons/NavigationButtons.tsx";
import HeroImageCarousel from "./HeroImageCarousel.tsx";
import useWindowResize from "../../hooks/useWindowResize";
import styles from "./Hero.module.css";
import HeroText from "./HeroText.tsx";

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

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <>
      <HeroImageCarousel
        currentImageIndex={currentImageIndex}
        imageSources={imageSources}
      />

      <HeroText
        title="Discover innovative ways to decorate"
        text="We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
      />
      <NavigationButtons
        onNext={handleNextImage}
        onPrev={handlePreviousImage}
      />
    </>
  );
}
