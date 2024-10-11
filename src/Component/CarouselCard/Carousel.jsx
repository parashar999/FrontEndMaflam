import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { assests } from "../../assets/assests";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Unique content for each card
  const items = [
    {
      id: 1,
      text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts. ",
      text2:"Shahad",
      img: assests.caraImg, // Add corresponding image paths from your assets
    },
    {
      id: 2,
      text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts. ",
      text2:"Shahad",
      img: assests.caraImg,
    },
    {
      id: 3,
      text: "“I Mafilm is an unconventional experience, combining practical and traditional knowledge. It's a creative, artistic, and professional journey.”",
      text2:"Zakaria",
      img: assests.caraImg,
    },
    {
      id: 4,
      text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts. ",
      text2:"Shahad",
      img: assests.caraImg,
    },
    {
      id: 5,
      text: "I was solely focused on photography and didn’t know anything about videography, especially documentary filmmaking. During the course, I entered a national competition and won second place, thanks to God and their efforts. ",
      text2:"Shahad",     
       img: assests.caraImg,
    },
    {
      id: 6,
      text: "“I Mafilm is an unconventional experience, combining practical and traditional knowledge. It's a creative, artistic, and professional journey.”",
      text2:"Zakaria",
      img: assests.caraImg,
    },
  ];

  const nextSlide = () => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Optionally reset to first card after reaching end
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 3); // Optionally reset to last set of cards
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.carouselcontainer}>
          <h2>Our Success Stories</h2>
          <div className={styles.carousel}>
            <button
              className={`${styles.arrow} ${styles.left}`}
              onClick={prevSlide}
            >
              &larr;
            </button>
            <div className={styles.sliderContainer}>
              <div
                className={styles.slider}
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {items.map((item) => (
                  <div key={item.id} className={styles.card}>
                    <h2>{item.text}</h2>
                    <span className={styles.contentimg}>
                     
                      <img src={assests.caraImg}  alt={`Carousel ${item.id}`} />
                      <p>{item.text2}</p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`${styles.arrow} ${styles.right}`}
              onClick={nextSlide}
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
