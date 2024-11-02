import React, { useRef, useContext } from "react";
import styles from "./HomeScreenCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Import the context
import { Link } from "react-router-dom";

const HomeScreenCarousel = () => {
  const { homeScreenDetails, loading, error } = useContext(HomePageContext); // Access the context

  // Handle loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading eBooklets: {error.message}</p>;
  }

  // Access eBooklet data
  const eBookletData = homeScreenDetails?.eBookletData || {};

  const sliderRef = useRef(null);

  // Function to scroll the slider to the left
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: -500, // Adjust this value based on your card width
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Function to scroll the slider to the right
  const scrollRight = () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: 500, // Adjust this value based on your card width
      behavior: "smooth", // Smooth scroll effect
    });
  };

  return (
    <div className={styles.carouselcontainer}>
      <Link className={styles.linking} to="/ebooks">{eBookletData.title}</Link>
      <div className={styles.carousel}>
        {/* Left Arrow */}
        <button className={styles.arrowLeft} onClick={scrollLeft}>
          &larr;
        </button>
        <div className={styles.roverlay}></div>
        <div className={styles.overlay}></div>
        <div className={styles.sliderContainer} ref={sliderRef}>
          <div className={styles.slider}>
            {eBookletData.ebookVideoUrl?.map((videoUrl, index) => (
              <div key={index} className={styles.card}>
                {/* Render video instead of image */}
               <Link to="/ebooks">
               <video
                  src={videoUrl}
                  // autoPlay
                  muted
                  loop
                  controls
                  playsInline
                  className={styles.video} // Apply styling to video
                  alt={`Ebook Video ${index + 1}`}
                />
               </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className={styles.arrowRight} onClick={scrollRight}>
          &rarr;
        </button>
      </div>
      <div className={styles.contentpara}>
        <p>{eBookletData.description}</p>
      </div>
    </div>
  );
};

export default HomeScreenCarousel;
