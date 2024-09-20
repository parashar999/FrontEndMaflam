import React, { useState } from "react";
import styles from "./Carousel.module.css";
import { assests } from "../../assets/assests";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    { id: 1, text: "" },
    { id: 2, text: "" },
    { id: 3, text: "" },
    { id: 4, text: "" },
    { id: 5, text: "" },
    { id: 6, text: "" },
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
      <div className={styles.carouselcontainer}>
        <h2>كيف يحقق المتعلمون مثلك أهدافهم</h2>
        <div className={styles.carousel}>
          <button
            className={`${styles.arrow} ${styles.left}`}
            onClick={prevSlide}
          >
            ◀
          </button>
          <div className={styles.sliderContainer}>
            <div
              className={styles.slider}
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Move cards by index
            >
              {items.map((item) => (
                <div key={item.id} className={styles.card}>
                  <h2>
                    نتعاون مع أكثر من 300 جامعة وشركة رائدةنتعاون مع أكثر من 300
                    جامعة وشركة رائدةنتعاون مع أكثر من 300 جامعة وشركة رائدة
                  </h2>
                  <span className={styles.contentimg}>
                    <p>نتعاون مع أكثر من 300 جامعة وشركة</p>
                    <img src={assests.caraImg} alt="Carousel" />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <button
            className={`${styles.arrow} ${styles.right}`}
            onClick={nextSlide}
          >
            ▶
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
