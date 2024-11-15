import React, { useContext, useRef, useEffect, useState } from "react";
import styles from "./HomeCommunityCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext";
import { Link } from "react-router-dom";

const HomeCommunityCarousel = () => {
  const { homeScreenDetails } = useContext(HomePageContext);
  const sliderRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(340); // Default value, to be updated
  const [currentIndex, setCurrentIndex] = useState(0); // Track current scroll index
  const [isScrolling, setIsScrolling] = useState(false); // Track if scrolling is in progress

  const maflamShowsData = homeScreenDetails?.maflamShowsData || [];
  const maflamShowsDataTitle = homeScreenDetails?.maflamShowsTitle || [];

  // Dynamically set card width based on an element's width
  useEffect(() => {
    if (sliderRef.current) {
      const firstCard = sliderRef.current.querySelector(`.${styles.card}`);
      if (firstCard) {
        setCardWidth(firstCard.offsetWidth);
      }
    }
  }, [maflamShowsData]);

  // Scroll left, ensuring it doesn’t go beyond the start
  const scrollLeft = () => {
    if (!isScrolling && currentIndex > 0) {
      setIsScrolling(true); // Start scrolling
      sliderRef.current.scrollBy({
        top: 0,
        left: -cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(currentIndex - 1);

      // Timeout to detect when the scroll has finished
      setTimeout(() => {
        setIsScrolling(false); // End scrolling
      }, 500); // Adjust the timeout as needed to match scroll duration
    }
  };

  // Scroll right, ensuring it doesn’t exceed the max index
  const scrollRight = () => {
    if (!isScrolling && currentIndex < maflamShowsData.length - 1) {
      setIsScrolling(true); // Start scrolling
      sliderRef.current.scrollBy({
        top: 0,
        left: cardWidth,
        behavior: "smooth",
      });
      setCurrentIndex(currentIndex + 1);

      // Timeout to detect when the scroll has finished
      setTimeout(() => {
        setIsScrolling(false); // End scrolling
      }, 500); // Adjust the timeout as needed to match scroll duration
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.carouselcontainer}>
        <div className={styles.croverlay}></div>
        <div className={styles.coverlay}></div>
        <Link to="/socialmedia">{maflamShowsDataTitle.title}</Link>
        <div className={styles.carousel}>
          {/* Left Arrow */}
          <button
            className={styles.arrowLeft}
            onClick={scrollLeft}
            disabled={currentIndex === 0 || isScrolling} // Disable when at the first element or during scrolling
          >
            &larr;
          </button>

          <div className={styles.sliderContainer} ref={sliderRef}>
            <div className={styles.slider}>
              {maflamShowsData.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={item.logoUrl}
                    alt={`Show logo ${index + 1}`}
                    className={styles.logo89}
                  />
                  <video
                    src={item.videoUrl}
                    className={styles.img89}
                    muted
                    loop
                    playsInline
                    controls
                    poster={item.thumbNailUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
              {/* Optionally, duplicate content to create a continuous scrolling effect */}
              {maflamShowsData.map((item, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={item.logoUrl}
                    alt={`Show logo ${index + 1}`}
                    className={styles.logo89}
                  />
                  <video
                    src={item.videoUrl}
                    className={styles.img89}
                    muted
                    loop
                    playsInline
                    controls
                    poster={item.thumbNailUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className={styles.arrowRight}
            onClick={scrollRight}
            disabled={currentIndex === maflamShowsData.length - 1 || isScrolling} // Disable when at the last element or during scrolling
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCommunityCarousel;
