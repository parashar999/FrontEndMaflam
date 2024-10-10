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
          &larr;
        </button>

        <div className={styles.sliderContainer} ref={sliderRef}>
          {/* Separate divs for each card */}
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src={items[0].imgSrc} alt="Ebook Card 1" />
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src={items[1].imgSrc} alt="Ebook Card 2" />
            </div>
          </div>

          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <img src={items[2].imgSrc} alt="Ebook Card 3" />
            </div>
          </div>

          {/* Add more card divs as necessary */}
        </div>

        {/* Right Arrow */}
        <button className={styles.arrowRight} onClick={scrollRight}>
          &rarr;
        </button>
      </div>

      <div className={styles.contentpara}>
        <p>
          Unlock your free eBook filled with essential tips and insights for filmmakers
          simply enter your email to download and start learning today!
        </p>
      </div>
    </div>
  );
};

export default HomeScreenCarousel;
