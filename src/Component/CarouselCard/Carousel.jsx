import React, { useContext, useState } from "react";
import styles from "./Carousel.module.css";
import { PricingPageContext } from "../../store/PricingPageContext";
import { assests } from "../../assets/assests";
// import { assests } from "../../assets/assests";
import ar from "../../assets/Ar.png"
import al from "../../assets/CarouselLeftArrow.png"


const Carousel = () => {
  const { pricingPageContextDetails, loading, error } = useContext(PricingPageContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Fetching success stories data from context
  const successStories = pricingPageContextDetails?.repeatedSuccessStories || [];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Prevent multiple transitions at once

  // Next slide handler
  const nextSlide = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    
    if (currentIndex < successStories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first item after the last
    }
  };

  // Previous slide handler
  const prevSlide = () => {
    if (isAnimating) return; // Prevent multiple clicks during animation
    setIsAnimating(true);
    
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(successStories.length - 1); // Reset to the last item when going backward
    }
  };

  // Reset animation state after transition is completed
  const handleTransitionEnd = () => {
    setIsAnimating(false);
  };

  return (
    <div className={styles.carouselcontainer}>
      <h2>Our Success Stories</h2>
      <div className={styles.carousel}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prevSlide}
        >
          <img src={al} alt="Left Arrow" />
        </button>
        
        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(-${currentIndex * (100)}%)`, // Move by full width for each slide
              transition: "transform 0.5s ease-in-out", // Smooth transition for the slider
            }}
            onTransitionEnd={handleTransitionEnd} // Reset animation flag after transition ends
          >
            {successStories.map((story, index) => (
              <div key={index} className={styles.card}>
                <h2>{story.title}</h2>
                <span className={styles.contentimg}>
                  <img src={assests.caraImg} alt="Carousel" />
                  <p>{story.description}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextSlide}
        >
          <img src={al} alt="Right Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
