import React, { useRef } from "react";
import styles from "./HomeScreenCarousel.module.css";
import { assests } from "../../assets/assests";

const HomeScreenCarousel = () => {
  // Updated items array with different images for each card
  const items = [
    { id: 1, imgSrc: assests.EbookCard2 },
    { id: 2, imgSrc: assests.EbookCard3 },
    { id: 3, imgSrc: assests.EbookCard1 },
    { id: 4, imgSrc: assests.EbookCard2 },
    { id: 5, imgSrc: assests.EbookCard3 },
    { id: 6, imgSrc: assests.EbookCard1 },
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
      <h2>E-Booklets</h2>
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
                <img src={item.imgSrc} alt={`Ebook Card ${item.id}`} />
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

export default HomeScreenCarousel;
