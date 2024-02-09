import { useEffect, useState } from "react";
import NavigationButtons from "../navigationButtons/NavigationButtons.tsx";
import HeroImageCarousel from "./HeroImageCarousel.tsx";
import useWindowResize from "../../hooks/useWindowResize";
import HeroText from "./HeroText.tsx";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  useWindowResize();

  const totalImages = 3;
  const imageSourcesMobile = [
    `${import.meta.env.BASE_URL}/images/mobile-image-hero-1.jpg`,
    `${import.meta.env.BASE_URL}/images/mobile-image-hero-2.jpg`,
    `${import.meta.env.BASE_URL}/images/mobile-image-hero-3.jpg`,
  ];
  const imageSourcesDesktop = [
    `${import.meta.env.BASE_URL}/images/desktop-image-hero-1.jpg`,
    `${import.meta.env.BASE_URL}/images/desktop-image-hero-2.jpg`,
    `${import.meta.env.BASE_URL}/images/desktop-image-hero-3.jpg`,
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
    const intervalId = setInterval(handleNextImage, 7500);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  const heroText = [
    {
      title: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    },
    {
      title: "We are available all across the globe",
      text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    },
    {
      title: "Manufactured with the best materials",
      text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    },
  ];

  return (
    <>
      <HeroImageCarousel
        currentImageIndex={currentImageIndex}
        imageSources={imageSources}
      />

      <HeroText
        title={heroText[currentImageIndex].title}
        text={heroText[currentImageIndex].text}
      />
      <NavigationButtons
        onNext={handleNextImage}
        onPrev={handlePreviousImage}
      />
    </>
  );
}
