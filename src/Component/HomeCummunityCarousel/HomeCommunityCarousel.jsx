import React, { useRef } from "react";
import styles from "./HomeCommunityCarousel.module.css";
import { assests } from "../../assets/assests";

const HomeCommunityCarousel = () => {
  // Updated items array with different images for each card
  const items = [
    { id: 1, imgSrc: assests.Reactangle49, logoSrc:assests.logo14   },
    { id: 2, imgSrc: assests.Reactangle48, logoSrc:assests.logo15 },
    { id: 3, imgSrc: assests.Reactangle50,  logoSrc:assests.logo16 },
    { id: 4, imgSrc: assests.Reactangle51, logoSrc:assests.logo19 },
    { id: 5, imgSrc: assests.Reactangle49,  logoSrc:assests.logo15 },
    { id: 6, imgSrc: assests.Reactangle48, logoSrc:assests.logo16 },
  ];

  const sliderRef = useRef(null);

  // Function to scroll the slider to the left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: -375, // Adjust this value based on your card width
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Function to scroll the slider to the right
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: 375, // Adjust this value based on your card width
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className={styles.carouselcontainer}>
      <h2>Maflam Shows</h2>
      <div className={styles.carousel}>
        {/* Left Arrow */}
        <button className={styles.arrowLeft} onClick={scrollLeft}>
          &#10094;
        </button>

        <div className={styles.sliderContainer} ref={sliderRef}>
          <div className={styles.slider}>
            {items.map((item) => (
              <div key={item.id} className={styles.card}>
                {/* Different image for each card */}
                <img src={item.logoSrc} alt={`Ebook card ${item.id}`} className={styles.logo89}></img>
               
                <img src={item.imgSrc} alt={`Ebook Card ${item.id}`}  className={styles.img89}  />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className={styles.arrowRight} onClick={scrollRight}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HomeCommunityCarousel;
