import React, { useContext, useRef } from "react";
import styles from "./HomeCommunityCarousel.module.css";
import { HomePageContext } from "../../store/HomePageContext"; // Assuming you're using this context
import { Link } from "react-router-dom";

const HomeCommunityCarousel = () => {
  const { homeScreenDetails } = useContext(HomePageContext); // Get the data from context
  const sliderRef = useRef(null);

  const maflamShowsData = homeScreenDetails?.maflamShowsData || []; // Use data from the context
  const maflamShowsDataTitle = homeScreenDetails?.maflamShowsTitle || []; // Use data from the context

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
      <Link to="/socialmedia">{maflamShowsDataTitle.title}</Link>
      <div className={styles.carousel}>
        {/* Left Arrow */}
        <button className={styles.arrowLeft} onClick={scrollLeft}>
          &larr;
        </button>

        <div className={styles.sliderContainer} ref={sliderRef}>
          <div className={styles.slider}>
            {maflamShowsData.map((item, index) => (
              <div key={index} className={styles.card}>
                {/* Show logo */}
                <img
                  src={item.logoUrl}
                  alt={`Show logo ${index + 1}`}
                  className={styles.logo89}
                />
                
                {/* Replace image with video */}
                <video
                  src={item.videoUrl}
                  className={styles.img89}
                  // autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  poster={item.thumbNailUrl} // Show thumbnail before the video plays
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button className={styles.arrowRight} onClick={scrollRight}>
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HomeCommunityCarousel;
